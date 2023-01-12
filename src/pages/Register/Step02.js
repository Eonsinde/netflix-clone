import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const Step02 = ({ prevStep, nextStep, handleChange, formdata }) => {
    const { register:RegisterField, handleSubmit:SubmitForm, formState: { errors } } = useForm(); // form validation

    const handleSubmit = () => {
        if (formdata.password !== formdata.confirm_password){
            toast.error(`Passwords don't match 😒`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            nextStep();
        }
    }

    return (
        <section
            className='z-10 px-10'
        >
            <form onSubmit={SubmitForm(handleSubmit)} className='flex flex-col space-y-8 bg-[#000000ad] p-12 w-[100%] sm:w-[400px] md:w-[400px] lg:w-[500px] rounded-sm'>
                <h1 className='text-white text-2xl md:text-3xl font-semibold'>Sign Up</h1>
                <div className=''>
                    <div className="mb-4">
                        <input
                            {...RegisterField("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                            type="text" 
                            className={`bg-[#333] w-full text-[0.9rem] p-3 text-white outline-none rounded-sm 
                                    ${(errors.email?.type === 'required' || errors.email?.type === 'pattern') ? 'border-b-2 border-[#e87c03]' : ''}`}
                            onChange={handleChange}
                            value={formdata.email}
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
                    <div className="mb-4">
                        <input
                            {...RegisterField("password", {required: true, minLength: 18})}
                            type="password" 
                            className={`bg-[#333] w-full text-[0.9rem] p-3 text-white outline-none rounded-sm ${errors.password?.type === 'required' ? 'border-b-2 border-[#e87c03]' : ''}`}
                            onChange={handleChange}
                            value={formdata.password}
                            placeholder="Password"
                        />
                        {errors.password?.type === 'required' || errors.password?.type === 'minLength'
                            ? 
                                <small className='block mt-2 pl-1 text-md italic text-[#e87c03]'>
                                    {
                                        errors.password?.type === 'required'
                                        ?
                                        'The password field is required'
                                        :
                                        'Password is not long enough'
                                    }
                                </small>
                            : 
                            <></> 
                        }  
                    </div>
                    <div className="">
                        <input
                            {...RegisterField("confirm_password", {required: true, minLength: 18})}
                            type="password" 
                            className={`bg-[#333] w-full text-[0.9rem] p-3 text-white outline-none rounded-sm ${errors.confirm_password?.type === 'required' ? 'border-b-2 border-[#e87c03]' : ''}`}
                            onChange={handleChange}
                            value={formdata.confirm_password}
                            placeholder="Confirm Password"
                        />
                        {errors.confirm_password?.type === 'required' || errors.confirm_password?.type === 'minLength'
                            ? 
                                <small className='block mt-2 pl-1 text-md italic text-[#e87c03]'>
                                    {
                                        errors.confirm_password?.type === 'required'
                                        ?
                                        'The password field is required'
                                        :
                                        'Password is not long enough'
                                    }
                                </small>
                            : 
                            <></> 
                        }  
                    </div>
                    <div className="flex space-x-6 mt-4 text-[0.9rem]">
                        <button onClick={prevStep} className='bg-red-600 text-white py-2 px-3'>Back</button>
                        <button className='bg-red-600 text-white py-2 px-3'>Submit</button>
                    </div>
                </div>
            </form>
           
        </section>
    );
}
 
export default Step02;