import { useState, useEffect } from 'react'
import nfLogo from "../assets/netflix_no_bg.webp"
import nfAvatar from "../assets/Netflix-avatar.png"


function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        const handleNavTransition = () => {
            if (window.scrollY > 100){
                handleShow(true)
            } else {
                handleShow(false)
            }
        }

        window.addEventListener('scroll', handleNavTransition)

        return () => window.removeEventListener('scroll', handleNavTransition)
    }, [])

    return (
        <div className={`nav ${show ? 'bg-app-dark shadow-md' : ''} fixed top-0 w-full py-6 px-3 md:px-8 z-10 transition-all ease-in`}>
            <div className='nav_contents flex items-center justify-between'>
                <img className='cursor-pointer w-20 md:w-36' src={nfLogo} alt="netflix logo" />
                <img className='cursor-pointer w-6 md:w-9' src={nfAvatar} alt="netflix logo" />
            </div>
        </div>
    )
}

export default Nav
