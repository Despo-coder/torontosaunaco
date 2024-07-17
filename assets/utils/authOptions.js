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
           // console.log(profile);
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
                secondaryId:user._id


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
