'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SignInForm from '@/components/SignInForm';
import { useEffect } from 'react';

const PreCheckout = () => {
 
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      router.push('/checkout');
    }
  }, [userId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    {!userId && (
      <>
        <h2 className='mt-3 bg-slate-700 text-white text-center p-4 rounded'>
          You have to be logged in. Sign in below.
        </h2>
        <SignInForm fromCheckout={true} />
      </>
    )}
  </div>
  );
};

export default PreCheckout;
