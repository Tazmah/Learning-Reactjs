import React from 'react'
import ChangeProfile from '../ChangeProfile'
import { useContext } from 'react'
import { AppContext } from '../App'

const Profile = () => {
    const { username } = useContext(AppContext)
    return (
        <div>
            <h1>This is the profile Page user is {username}</h1>
            <ChangeProfile />
        </div>
    )
}

export default Profile