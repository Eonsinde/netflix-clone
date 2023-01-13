import { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, useLocation,  } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { toast } from 'react-toastify';
import { projectAuth } from '../firebase'
import { logout, reset, setUser } from '../reducers/auth/authSlice'


const queryClient = new QueryClient();
export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = projectAuth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                const formattedUser = {
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    email: userAuth.email,
                    emailVerified: userAuth.emailVerified,
                    phoneNumber: userAuth.phoneNumber,
                    photoURL: userAuth.photoURL,
                    isAnonymous: userAuth.isAnonymous,
                    metadata: {
                        creationAt: userAuth.metadata.creationTime,
                        lastLogin: userAuth.metadata.lastSignInTime,
                    }
                }
                dispatch(setUser(formattedUser));
            } else {
                dispatch(logout(null));
            }
        })

        return unsubscribe;
    }, []);

    const contextData = {

    };

    return ( 
        <AuthContext.Provider value={contextData}>
            <QueryClientProvider client={queryClient}>
                { children }            
            </QueryClientProvider>
        </AuthContext.Provider>
    );
}

export const ProtectedView = ({ children }) => {
    const location = useLocation();
    const { user } = useSelector(state => state.auth);

    if (!user)
        return <Navigate to='/accounts/authorization/login' state={{from: location}} replace />;
    return ( 
        <>{children}</>
    );
}
 
export default AuthProvider;