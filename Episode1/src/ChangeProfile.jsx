import { useContext, useState } from "react"
import { AppContext } from "./App"


const ChangeProfile = () => {
    const { username, setUsername } = useContext(AppContext)
    const [newUsernmae, setNewUserName] = useState("")
    return (
        <div>
            <input onChange={(e) => setNewUserName(e.target.value)} />
            <button
                onClick={() => {
                    setUsername(newUsernmae)
                }}
            >
                Change Username
            </button>
        </div>
    )
}

export default ChangeProfile