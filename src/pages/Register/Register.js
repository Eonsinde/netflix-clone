import React, { useState, useEffect } from 'react';
import PageTransitionLoader from '../../components/PageTransLoader';
// lazy imports
const Step01 = React.lazy(() => import('./Step01'));
const Step02 = React.lazy(() => import('./Step02'));
const FinalStep = React.lazy(() => import('./FinalStep'));


const Register = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: ''
    });

    useEffect(() => {
        document.title = "Netflix Clone | Register"
    }, []);

    const handleChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const nextStep = () => {
        setPage(currentPage => currentPage + 1);
    }

    const prevStep = () => {
        setPage(currentPage => currentPage - 1);
    }

    switch (page){
        default:
        case 0:
            return (<React.Suspense fallback={<PageTransitionLoader className="z-10" />}>
                <Step01 formdata={formData} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />
            </React.Suspense>)
        case 1:
            return (<React.Suspense fallback={<PageTransitionLoader className="z-10" />}>
                <Step02 formdata={formData} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />
            </React.Suspense>)
        case 2:
            return (<React.Suspense fallback={<PageTransitionLoader className="z-10" />}>
                <FinalStep formdata={formData} nexStep={nextStep} prevStep={prevStep} handleChange={handleChange} />
            </React.Suspense>)
    }
}
 
export default Register;