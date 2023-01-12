import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { register:RegisterField, handleSubmit:SubmitForm, formState: { errors } } = useForm(); // form validation

    useEffect(() => {
        document.title = "Netflix Clone | Login"
    }, []);

    const handleChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    
    const handleSubmit = () => {
        alert("Submitting Form Data");
    }

    return (
        <section
            className='z-10 px-10'
        >
            <header className="flex flex-col space-y-4 mb-4 text-white">
            </header>
            <form onSubmit={SubmitForm(handleSubmit)} className='flex flex-col space-y-8 bg-[#000000ad] p-12 w-[100%] sm:w-[400px] md:w-[400px] lg:w-[500px] rounded-sm'>
                <h1 className='text-white text-2xl md:text-3xl font-semibold'>Sign In</h1>
                <div className=''>
                    <div className="mb-4">
                        <input
                            {...RegisterField("email", {required: true, maxLength: 50})}
                            type="text" 
                            className={`bg-[#333] w-full text-[0.9rem] p-3 text-white outline-none rounded-sm ${errors.email?.type === 'required' ? 'border-b-2 border-[#e87c03]' : ''}`}
                            onChange={handleChange}
                            placeholder="Email Address"
                        />
                        {errors.email?.type === 'required'
                            ? 
                                <small className='block mt-2 pl-1 text-md italic text-[#e87c03]'>
                                    The email field is required
                                </small>
                            : 
                            <></> 
                        } 
                    </div>
                    <div className="">
                        <input
                            {...RegisterField("password", {required: true, maxLength: 50})}
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
                <button className="w-full bg-red-600 text-white text-center text-[.9rem] py-2 px-3 md:py-3 md:px-5 rounded-sm">Sign In</button>
                <div className='font-semibold'>
                    <span className='text-[#999999]'>New to Netflix?</span>{' '}
                    <Link to="/register" className='text-white hover:underline'>Sign up now</Link>
                </div>
            </form>
        </section>
    );
}
 
export default Login;