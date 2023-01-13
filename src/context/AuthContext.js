import { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, useLocation,  } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../reducers/auth/authSlice'
import { QueryClient, QueryClientProvider } from 'react-query'
import { toast } from 'react-toastify';


const queryClient = new QueryClient();
export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const { user, message } = useSelector(state => state.auth);
    // console.log(user)
    
    const contextData = {
        user,
    };

    return ( 
        <AuthContext.Provider value={contextData}>
            <QueryClientProvider client={queryClient}>
                { children }            
            </QueryClientProvider>
        </AuthContext.Provider>
    );
}

export const ProtectedView = ({ Component }) => {
    const location = useLocation();
    const { user } = useAuth();

    if (!user)
        return <Navigate to='/accounts/authorization/login' state={{from: location}} replace />;
    return ( 
        <Component />
    );
}
 
export default AuthProvider;