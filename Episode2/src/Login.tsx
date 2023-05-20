import { useState } from "react"
import { login, logOut } from "./store"
import { useDispatch, useSelector } from "react-redux/es/exports"

const Login = () => {
    const [newUsername, setNewUsername] = useState("")
    const dispatch = useDispatch()

    const username = useSelector((state: any) => state.user.value.username)

    return (
        <div>
            <h1>Login {username}</h1>
            <input
                value={newUsername}
                onChange={(e) => { setNewUsername(e.target.value) }}
            />
            <button onClick={() => {
                dispatch(login({ username: newUsername }))
            }} >Submit Login</button>
            <button onClick={() => dispatch(logOut())} >LogOut</button>
        </div>
    )
}

export default Login