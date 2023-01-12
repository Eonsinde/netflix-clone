import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { projectAuth } from '../../firebase';


const FinalStep = ({ prevStep, formdata }) => {
    const handleSubmit = () => {
        createUserWithEmailAndPassword(projectAuth, formdata.email, formdata.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error);

                const errorCode = error.code;
                const errorMessage = error.message;

                toast.error(`${errorMessage ? errorMessage : 'Registration failed 😢'}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
    }

    return ( 
        <section className='z-10 px-10 text-white'>
            <div className='flex flex-col space-y-8 bg-[#000000ad] p-12 w-[100%] sm:w-[400px] md:w-[400px] lg:w-[500px] rounded-sm'>
                <h2 className='text-1xl md:text-2xl font-semibold'>Are contented with your details</h2>
                <main className='flex flex-col space-y-4'>
                    <p>{formdata.email}</p>
                    <p>******************</p>
                </main>
                <div className="flex space-x-6 text-[0.9rem]">
                    <button 
                        className='bg-red-600 text-white py-2 px-3'
                        onClick={prevStep}
                    >
                        Back
                    </button>
                    <button 
                        className='bg-red-600 text-white py-2 px-3'
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
            
        </section>
    );
}
 
export default FinalStep;