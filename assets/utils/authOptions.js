import GoogleProvider from  'next-auth/providers/google';
// Import Credentials Provider
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '@/config/db';
import User from '@/models/Users';


export const authOptions = {
    session: {
        strategy:'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization:{
                params:{
                    prompt:'consent',
                    access_type:'offline',
                    response_type:'code',
                }
            }
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            type: 'credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: { label: "Email", type: "text", placeholder: "Enter your email" },
                 password: { label: "Password", type: "password" },
               },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a logged in user or value
                // that signifies failure. e.g. throw new Error('...')
                const res = await fetch('/your/auth/endpoint', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' }
                })
                const user = await res.json()

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
callbacks: {
    // Invoked on Successful Sign In
    async signIn({user, account, profile}){
        // Steps
        // 1. Connect to the DB
        await connectDB();
        // 2. Check if user exists in db
        const userInDb = await User.findOne({email:profile.email});
        // 3. If user exists, return the user object(true)
       if(!userInDb){
        const username = profile.name.slice(0,20)
        await User.create(
            {
                username,
                email:profile.email,
                image:profile.picture,
                
            })
           
        }
        console.log(profile)
       return true;
    },
    async session({session}){
        // Steps
        // 1. Connect to the DB
        const user = await User.findOne({email:session.user.email});
        session.user.id = user._id.toString();
        session.user.isAdmin = user.isAdmin;
        return session;
        // 2. Get User from DB
        // 3. Set User in Session with the userid
        // 4. Return the Session

        // session.user.id = user._id;
        // session.user.name = user.name;
        // session.user.email = user.email;
        // session.user.image = user.image;
        
        // return session;
    }
}
}