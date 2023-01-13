import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { projectAuth } from '../../firebase';


// regsiter user
const register = async (formdata) => {
    const response = await createUserWithEmailAndPassword(projectAuth, formdata.email, formdata.password)

    if (response.data){
        // dont't generate token for user
        // rather have them redirect back to login
        return response.data;
    }

    return { message: "failure" };
}

const login = async (formdata) => {
    const response = await signInWithEmailAndPassword(projectAuth, formdata.email, formdata.password)

    if (response){
        const formattedUser = {
            uid: response.user.uid,
            displayName: response.user.displayName,
            email: response.user.email,
            emailVerified: response.user.emailVerified,
            phoneNumber: response.user.phoneNumber,
            photoURL: response.user.photoURL,
            isAnonymous: response.user.isAnonymous,
            metadata: {
                creationAt: response.user.metadata.creationTime,
                lastLogin: response.user.metadata.lastSignInTime,
            }
        }

        // console.log('User:', formattedUser);

        const payload = {
            user: formattedUser,
            // authTokens: {
            //     refreshToken: response.user.stsTokenManager.refreshToken,
            //     accessToken: response.user.stsTokenManager.accessToken,
            //     expirationTime: response.user.stsTokenManager.expirationTime,
            //     isExpired: response.user.stsTokenManager.isExpired
            // }
        };

        return payload;
    }

    return { message: "failure" };
}

const logout = async () => {
    const response = await signOut(projectAuth);
    
    if (response) {
        return "Sign out successful"
    }
    return { message: "failure" };
}


const authService = {
  register,
  login,
  logout
};

export default authService;