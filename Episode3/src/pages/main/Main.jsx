import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import Post from './Post'



const Main = () => {
    const [postList, setPostList] = useState(null)
    const postRef = collection(db, "posts")

    const getPosts = async () => {
        const data = await getDocs(postRef)
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "15px", alignItems: "center", justifyContent: "center" }}>
            {postList?.map((post, key) => (
                <Post post={post} key={key} />
            ))}
        </div>
    )
}

export default Main