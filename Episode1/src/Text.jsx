import React from 'react'
import { useState, useEffect } from 'react'

const Text = ({ name, setName }) => {

    // const [text, setText] = useState("")
    useEffect(() => {
        console.log("Component Mounted");
        return () => {
            console.log("Component UnMounted");
        }
    }, [])

    return (
        <div>
            <input
                value={name}
                placeholder='Name. Pedro...'
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
        </div>
    )
}

export default Text