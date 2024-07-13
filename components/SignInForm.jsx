'use client'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { signIn, useSession, getProviders} from 'next-auth/react';
import { useRouter } from 'next/navigation';


const SignInForm = ({ fromCheckout }) => {
  const [providers, setProviders] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    }
    if (session && fromCheckout) {
      router.push('/checkout');
    }else if (session) {
      router.push('/');
    }

    setAuthProviders();
  }, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
    setLoading(false);
  };
// console.log(fromCheckout)
  // Once a session is created redirect the user to the homepage
 
  
  return (
    // {session && (<p className="text-green-500 mb-4">You are already signed in</p>)}
// Route to Homepage once a session is created



    <div className="font-[sans-serif] min-h-screen flex items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
        {/* Left side content */}
        <div>
          <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] text-gray-800">
            The Toronto Sauna Company
          </h2>
          <p className="text-sm mt-6 text-gray-800">We're thrilled to have you here. Please sign in to access your account and explore our exciting products. If you don't have an account yet, don't worry! Creating one is quick and easy. Click the button below to register. </p>
          <p className="text-sm mt-12 text-gray-800">Don't have an account ? <Link href={'/register'}><span className='text-blue-600 font-semibold'>Register here</span></Link></p>
        </div>

        {/* Right side form */}
        <form onSubmit={handleSubmit} className="max-w-md md:ml-auto w-full">
          <h3 className="text-gray-800 text-3xl font-extrabold mb-8">Sign in</h3>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {providers && Object.values(providers).map((provider) => (
            <div key={provider.name}>
              {provider.id === 'credentials' && (
                <>
                  <div className="space-y-4">
                    <div>
                      <input 
                        name="email" 
                        type="email" 
                        autoComplete="email" 
                        required 
                        className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent" 
                        placeholder="Email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <input 
                        name="password" 
                        type="password" 
                        autoComplete="current-password" 
                        required 
                        className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full mt-8 shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    {loading ? 'Logging in...' : 'Log in with Email'}
                  </button>
                </>
              )}
              {provider.id === 'google' && (
                <button 
                  type="button"
                  onClick={() => signIn(provider.id)}
                  className="w-full mt-4 shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-gray-800 bg-white hover:bg-gray-50 focus:outline-none flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                  <span className="ml-2">Log in with Google</span>
                </button>
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default SignInForm
