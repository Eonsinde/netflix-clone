import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/auth/authSlice";
import nfAvatar from "../assets/Netflix-avatar.png"


const Profile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    return ( 
        <section className='h-screen w-screen flex justify-center items-center'>
            <main className='bg-[#161616ad] p-6 md:p-6 lg:p-12 w-[92vw] sm:w-[400px] md:w-[500px] lg:w-[700px]'>
                <header className='mb-5'>
                    <h1 className='mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-white'>Edit profile</h1>
                    <hr className='h-[0.02rem] w-full border-0 bg-neutral-700' />
                </header>                
                <div className='flex space-x-0 md:space-x-4'>
                    <img className='h-14 lg:h-20 hidden md:block' src={nfAvatar} alt='' />
                    <div className='flex-grow flex flex-col space-y-6'>
                        <div className='flex flex-col space-y-3'>
                            <p className='bg-neutral-500 text-white p-3'>{user.email}</p>
                            <div>
                                <h3 className="text-white mb-2 font-semibold">{'Plans (Current Plan: premium)'}</h3>
                                <hr className='h-[0.02rem] w-full border-0 bg-neutral-700' />
                            </div>
                        </div>
                        <div className="text-neutral-400 flex flex-col space-y-3 md:space-y-6">
                            <p>Renewal date: 04/03/2021</p>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p>Netflix Standard</p>
                                    <p>1080p</p>
                                </div>
                                <button className="bg-red-600 text-white py-2 px-4 outline-none text-[0.9rem]">Subscribe</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p>Netflix Basic</p>
                                    <p>480p</p>
                                </div>
                                <button className="bg-red-600 text-white py-2 px-4 outline-none text-[0.9rem]">Subscribe</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p>Netflix Premium</p>
                                    <p>4K+HDR</p>
                                </div>
                                <button className="bg-neutral-500 text-white py-2 px-4 outline-none text-[0.9rem]">Current Package</button>
                            </div>
                        </div>
                        <button 
                            className="w-full bg-red-600 text-white py-2 px-4 outline-none text-[0.9rem]"
                            onClick={() => dispatch(logout(null)) }
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </main>
        </section>
    );
}
 
export default Profile;