import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { projectAuth } from '../../firebase';


// regsiter user
const register = async (formdata) => {
    const response = await createUserWithEmailAndPassword(projectAuth, formdata.email, formdata.password)
    console.log("Register action:", response);

    if (response.data){
        // dont't generate token for user
        // rather have them redirect back to login
        return response.data;
    }

    return { message: "failure" };
}

const login = async (formdata) => {
    const response = await signInWithEmailAndPassword(projectAuth, formdata.email, formdata.password)
    console.log("Login action:", response);

    if (response.data){
        const user = response.data.user;
        console.log('User:', user);

        const payload = {
            user
        };

        return payload;
    }

    return { message: "failure" };
}

const logout = async () => {
    localStorage.removeItem('auth_tokens');
}


const authService = {
  register,
  login,
  logout
};

export default authService;