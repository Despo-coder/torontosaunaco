import { getServerSession } from 'next-auth/next';
import { authOptions } from "@/assets/utils/authOptions";

export const getUserSession = async (request) => {

    try {
        const session = await getServerSession(authOptions);
    if (!session ||!session.user) {
      return null
    }
    return {
        user: session.user,
        accessToken: session.accessToken,
        expires: session.expires,
        userId: session.user.id,
    }

    } catch (error) {
        console.error(error)
        return null
    }
    
};
