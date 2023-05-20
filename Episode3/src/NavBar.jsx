import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './config/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth'

const NavBar = () => {
    const [user] = useAuthState(auth)
    const signUserOut = async () => {
        await signOut(auth)
    }
    return (
        <div className='navbar'>
            <Link to="/">
                Logo
            </Link>
            <div className='navigations'>
                <div>
                    <a href="/">Home</a>
                </div>
                {!user && <div>
                    <a href="/login">Login</a>
                </div>}
                {user && <div>
                    <a href="/createpost">Create Post</a>
                </div>}
                <div className="profileInfo">
                    {user && (
                        <>
                            <div>
                                <h4>
                                    {user?.displayName}
                                </h4>
                            </div>
                            <div className="profileImg">
                                <img src={user?.photoURL || ""} alt="profile" />
                            </div></>
                    )}
                </div>
                {user && <button onClick={signUserOut}>Log Out</button>}
            </div>
        </div>
    )
}

export default NavBar