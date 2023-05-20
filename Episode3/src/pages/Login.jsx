import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import React from 'react'

const Login = () => {
    const navigate = useNavigate()
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result);
        navigate("/")
    }
    return (
        <div>
            <p>Sign in with Google To Continue</p>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}

export default Login