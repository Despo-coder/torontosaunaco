import GoogleProvider from  'next-auth/providers/google';
// Import Credentials Provider
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '@/config/db';
import User from '@/models/Users';
import bcryptjs from 'bcryptjs'


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
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
              const { email, password, username } = credentials 
              try {
                await connectDB();
                const user = await User.findOne({ email });
                if (!user) {
                  return null;
                }
                const passwordsMatch = await bcryptjs.compare(
                  password,
                  user.password
                );
                if (!passwordsMatch) {
                  return null;
                }
                return user;
              } catch (error) {
              //  console.log("Error:", error);
              }
            },
          }),
    ],
callbacks: {

    async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.isAdmin = user.isAdmin;
        }
     
        return token;
      },
    // Invoked on Successful Sign In
    async signIn({ user, account, profile }) {
        await connectDB();
    
        if (account.provider === 'google') {
            const userInDb = await User.findOne({ email: profile.email });
            if (!userInDb) {
                const username = profile.name.slice(0, 20);
                await User.create({
                    username,
                    email: profile.email,
                    image: profile.picture,
                });
            }
           //console.log(profile);
        } else if (account.provider === 'credentials') {
            // For credentials login, we don't need to do anything here
            // as the user is already authenticated in the authorize function
        }
    
        return true;
    },
    async session({session, token}){
        // Steps
        // 1. Connect to the DB
        const user = await User.findOne({email:session.user.email});
        // async session({session, token}){
        //     const user = await User.findOne({email:session.user.email});
            session.user = {
                id: token.id,
                isAdmin: user.isAdmin,
                username: user.username,
                email:user.email,
                image:user.image,
                secondaryId:user._id.toString(),


            };
            return session;
        }
        
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

// Notes
// The code in authOptions.js is responsible for setting up authentication options for a web application. This file configures how users can sign in and how their session information is managed.

// The main purpose of this code is to define authentication providers and callbacks that handle user sign-in, session management, and token creation. It supports two ways for users to sign in: through Google and through a username/password (credentials) system.

// This code doesn't take direct inputs or produce direct outputs in the traditional sense. Instead, it exports an object called authOptions that other parts of the application can use to set up authentication.

// The code achieves its purpose by first setting up two authentication providers:

// Google Provider: This allows users to sign in with their Google accounts. It uses environment variables to securely store the Google client ID and secret.

// Credentials Provider: This allows users to sign in with a username and password. It checks if the provided email exists in the database and if the password matches.

// The code then defines several callback functions that handle different aspects of the authentication process:

// The jwt callback adds user information to the JSON Web Token (JWT) that's created when a user signs in.

// The signIn callback is called when a user successfully signs in. For Google sign-ins, it checks if the user already exists in the database. If not, it creates a new user record.

// The session callback is responsible for adding user information to the session object, which can be used throughout the application to know who is currently logged in.

// An important logic flow in this code is how it handles different sign-in methods. For Google sign-ins, it checks if the user exists in the database and creates a new user if they don't. For credential sign-ins, it verifies the email and password against the database.

// The code also includes data transformations, such as creating a username from the Google profile name and converting the database user ID to a string.

// Overall, this code sets up a flexible authentication system that supports multiple sign-in methods and manages user sessions, providing a foundation for user authentication in the application.