import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import nfLogo from "../assets/netflix_no_bg.webp"


const AuthLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);

    console.log(user)


    if (user)
        navigate('/');
    return (
        <section
            className='bg-neutral-900 relative h-screen w-screen flex justify-center items-center gap-y-10 object-contain'
            style={{
                backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/891f9fb4-7a31-450b-9949-79bd8612fcb3/NG-en-20230109-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <nav className={`nav fixed top-0 w-full py-6 px-3 md:px-8 z-10 transition-all ease-in`}>
                <div className='nav_contents flex items-center justify-between'>
                    <Link to='/'>
                        <img className='cursor-pointer w-20 md:w-36' src={nfLogo} alt="netflix logo" />
                    </Link>
                    {
                        location.pathname.includes('login')
                        ?
                        <Link
                            to='accounts/authorization/register'
                            className="bg-red-600 text-[.9rem] py-2 px-3 md:py-3 md:px-5 text-white rounded-sm"
                        >
                            Sign Up
                        </Link>
                        :
                        <Link
                            to='accounts/authorization/login'
                            className="bg-red-600 text-[.9rem] py-2 px-3 md:py-3 md:px-5 text-white rounded-sm"
                        >
                            Sign In
                        </Link>
                    }
                </div>
            </nav>

            {/* render children or sub-components */}
            <Outlet />

            <div className='absolute h-full w-full bg-gradient-to-b from-app-dark to-[#0000007e]' />
        </section>
    );
}
 
export default AuthLayout;