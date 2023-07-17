import { useContext, createContext, useState, useEffect } from "react";
import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth'

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authUser, setAuthUser] = useState(null)


    useEffect(() => {
        
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })
        return () => listen()

    }, [])


    const handleSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
        })

        .catch((error) => {
            console.log(error)
        })
    }

    const handleRegister= (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            setAuthUser(null)
            console.log('SignOut')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <AuthContext.Provider value={{handleSignIn, setEmail, setPassword, handleRegister, authUser, handleSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
