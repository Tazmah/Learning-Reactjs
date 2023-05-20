import { addDoc, collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Post = ({ post }) => {
    const [user] = useAuthState(auth)
    const [likes, setLikes] = useState(null)

    const likesRef = collection(db, "likes")
    const likesDoc = query(likesRef, where("postId", "==", post.id))

    const getLikes = async () => {
        const data = await getDocs(likesDoc)
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id })));
    }

    const addLike = async () => {
        try {
            const newDoc = await addDoc(likesRef, {
                userId: user?.uid,
                postId: post.id
            })
            if (user) {
                setLikes((prev) => prev ? [...prev, { userId: user?.uid, likeId: newDoc.id }] : [{ userId: user?.uid, likeId: newDoc.id }])
                // console.log(likes);
            }
        } catch (error) {
            console.log(error);
        }

    }
    const removeLike = async () => {
        try {
            const likeToDeleteQuery = query(
                likesRef,
                where("postId", "==", post.id),
                where("userId", "==", user?.uid)
            )
            const likeToDeleteData = await getDocs(likeToDeleteQuery)
            const likeId = likeToDeleteData.docs[0].id
            const likedToDelete = doc(db, "likes", likeId)
            await deleteDoc(likedToDelete)

            await addDoc(likesRef, {
                userId: user?.uid,
                postId: post.id
            })
            if (user) {
                setLikes((prev) => prev && prev.filter((like) => like.likeId != likeId))
            }
        } catch (error) {
            console.log(error);
        }

    }
    const hasUserLiked = likes?.find((like) => like.userId === user?.uid)

    useEffect(() => {
        getLikes()
    }, [])

    return (
        <div style={{ border: "1px solid black", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", gap: "7px" }}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>@{post.username}</p>
            <button onClick={hasUserLiked ? removeLike : addLike}> {hasUserLiked ? <>&#128078;</> : <>&#128077;</>} </button>
            <p>{likes && <>Likes: {likes?.length}</>} </p>
        </div>
    )
}

export default Post