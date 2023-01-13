import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../../reducers/auth/authSlice';
import LoadingDots from '../../components/LoadingDots';


const FinalStep = ({ prevStep, formdata }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch  = useDispatch();

    const from = location.state?.from?.pathname;

    const { user, message, registerSuccess, isLoading, isError } = useSelector(state => state.auth);

    useEffect(() => {
        if (isError) {
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

        if (registerSuccess){
            navigate('/accounts/authorization/login');

            toast.success(`Account Created: Login to continue`, {
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
    }, [isLoading, isError, registerSuccess, message, navigate, dispatch]);


    const handleSubmit = () => {
        dispatch(register(formdata));
    }

    if (user)
        navigate(from || '/', { replace: true });
    return ( 
        <section className='z-10 px-3 md:px-10 text-white'>
            <div className='flex flex-col space-y-8 bg-[#000000ad] p-6 md:p-12 w-[90vw] sm:w-[400px] md:w-[400px] lg:w-[500px] rounded-sm'>
                <h2 className='text-1xl md:text-2xl font-semibold'>Happy with your details 🤗?</h2>
                <main className='flex flex-col space-y-4'>
                    <p>{formdata.email}</p>
                    <p>******************</p>
                </main>
                <div className="flex space-x-6 text-[0.9rem]">
                    <button 
                        className='bg-red-600 text-white py-2 px-3 rounded-sm'
                        onClick={prevStep}
                    >
                        Back
                    </button>
                    <button 
                        className={`${isLoading ? 'opacity-60' : ''} bg-red-600 text-white py-2 px-3 rounded-sm`}
                        onClick={handleSubmit}
                    >
                        { isLoading ? <LoadingDots /> : <>Submit</> }
                    </button>
                </div>
            </div>
            
        </section>
    );
}
 
export default FinalStep;