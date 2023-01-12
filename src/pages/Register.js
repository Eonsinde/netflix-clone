import { useEffect } from 'react';


const Register = () => {
    useEffect(() => {
        document.title = "Netflix Clone | Register"
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <section
            className='z-10 px-10 text-center'
        >
            <header className="flex flex-col space-y-4 mb-4 text-white">
                <h1 className='text-2xl md:text-5xl font-semibold'>Unlimited films, TV programmes and more.</h1>
                <h2 className="text-1xl md:text-2xl">Watch anywhere. Cancel at any time.</h2>
                <p className="text-[.9rem] md:text-[1rem]">Ready to watch? Enter your email to create or restart your membership</p>
            </header>
            <form onSubmit={handleSubmit} className='flex items-center justify-center'>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0">
                    <input 
                        type="text" 
                        className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[600px] text-[0.9rem] p-3 outline-none text-blac" 
                        placeholder="Email Address"
                    />
                    <button className=" bg-red-600 text-[.9rem] py-2 px-3 md:py-3 md:px-5 text-white">GET STARTED</button>
                </div>
            </form>
        </section>
    );
}
 
export default Register;