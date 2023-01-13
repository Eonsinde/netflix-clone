import { useForm } from "react-hook-form";


const Step01 = ({ nextStep, formdata, handleChange }) => {
    const { register:RegisterField, handleSubmit:SubmitForm, formState: { errors } } = useForm(); // form validation

    const handleSubmit = () => {
        nextStep();
    }

    return (
        <section
            className='z-10 px-10 text-center'
        >
            <header className="flex flex-col space-y-4 mb-4 text-white">
                <h1 className='text-2xl md:text-5xl font-semibold'>Unlimited movies, TV shows, and more.</h1>
                <h2 className="text-1xl md:text-2xl">Watch anywhere. Cancel at any time.</h2>
                <p className="text-[.9rem] md:text-[1rem]">Ready to watch? Enter your email to create or restart your membership.</p>
            </header>
            <form onSubmit={SubmitForm(handleSubmit)} className='flex items-center justify-center'>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0">
                    <input 
                        {...RegisterField("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                        type="text" 
                        className={`w-[250px] sm:w-[350px] md:w-[400px] lg:w-[600px] text-[0.9rem] p-3 outline-none 
                        ${(errors.email?.type === 'required' || errors.email?.type === 'pattern') ? 'border-b-2 border-[#e87c03]' : ''}`}
                        onChange={handleChange}
                        value={formdata.email}
                        placeholder="Email Address"
                    />
                    <button className=" bg-red-600 text-[.9rem] py-2 px-3 md:py-3 md:px-5 text-white">GET STARTED</button>
                </div>
            </form>
        </section>
    );
}
 
export default Step01;