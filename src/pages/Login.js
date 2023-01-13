import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { login, reset } from '../reducers/auth/authSlice';
import { projectAuth } from '../firebase';
import LoadingDots from '../components/LoadingDots';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch  = useDispatch();

    const from = location.state?.from?.pathname;
    const { user, message, loginSuccess, isLoading, isError } = useSelector(state => state.auth);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { register:RegisterField, handleSubmit:SubmitForm, formState: { errors } } = useForm(); // form validation

    useEffect(() => {
        document.title = "Netflix Clone | Login"
    }, []);

    useEffect(() => {
        if (isError){
            toast.error(`${message}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            
            dispatch(reset());
        }

        if (loginSuccess){
            if (from) // navigate to protected view 
                navigate(from, { replace: true });
            console.log(user);
            // toast.success(`Logged In: Welcome ${user}`);
            dispatch(reset());
        }
    }, [user, message, loginSuccess, isLoading, isError]);

    const handleChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    
    const handleSubmit = () => {
        // signInWithEmailAndPassword(projectAuth, formData.email, formData.password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         console.log(user);
        //     })
        //     .catch((error) => {
        //         // const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // console.error(typeof errorMessage, errorCode);

        //         const respMessage = errorMessage.includes('user-not-found') ? "Account not found 🙂" : "Authentication failed 😢"

        //         toast.error(`${respMessage}`, {
        //             position: "bottom-center",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "dark",
        //         });
        //     });
        dispatch(login(formData));
    }

    return (
        <section
            className='z-10 px-3 md:px-10'
        >
            <form onSubmit={SubmitForm(handleSubmit)} className='flex flex-col space-y-8 bg-[#000000ad] p-6 md:p-12 w-[90vw] sm:w-[400px] md:w-[400px] lg:w-[500px] rounded-sm'>
                <h1 className='text-white text-2xl md:text-3xl font-semibold'>Sign In</h1>
                <div className=''>
                    <div className="mb-4">
                        <input
                            {...RegisterField("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                            type="text" 
                            className={`bg-[#333] w-full text-[0.9rem] p-3 text-white outline-none rounded-sm ${errors.email?.type === 'required' ? 'border-b-2 border-[#e87c03]' : ''}`}
                            onChange={handleChange}
                            placeholder="Email Address"
                        />
                        {errors.email?.type === 'required' || errors.email?.type === 'pattern'
                            ? 
                                <small className='block mt-2 pl-1 text-md italic text-[#e87c03]'>
                                    {
                                        errors.email?.type === 'required'
                                        ?
                                        'The email field is required'
                                        :
                                        'Email address is not valid'
                                    }
                                </small>
                            : 
                            <></> 
                        } 
                    </div>
                    <div className="">
                        <input
                            {...RegisterField("password", {required: true})}
                            type="password" 
                            className={`bg-[#333] w-full text-[0.9rem] p-3 text-white outline-none rounded-sm ${errors.password?.type === 'required' ? 'border-b-2 border-[#e87c03]' : ''}`}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        {errors.password?.type === 'required'
                            ? 
                                <small className='block mt-2 pl-1 text-md italic text-[#e87c03]'>
                                    The password field is required
                                </small>
                            : 
                            <></> 
                        } 
                    </div>
                </div>
                <button 
                    className={`w-full ${isLoading ? 'opacity-60' : ''} bg-red-600 text-white text-center text-[.9rem] py-2 px-3 md:py-3 md:px-5 rounded-sm`}
                >
                    { isLoading ? <LoadingDots /> : <>Sign In</> }
                </button>
                <div className='font-semibold '>
                    <span className='text-[#999999] text-[0.9rem] md:text-[1rem]'>New to Netflix?</span>{' '}
                    <Link to="/accounts/authorization/register" className='text-white text-[0.9rem] md:text-[1rem] hover:underline'>Sign up now</Link>
                </div>
            </form>
        </section>
    );
}
 
export default Login;