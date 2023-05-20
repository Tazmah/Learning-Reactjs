import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { async } from "@firebase/util"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"


const CreateForm = () => {
    const navigate = useNavigate()

    const [user] = useAuthState(auth)

    const schema = yup.object().shape({
        title: yup.string().required("There Must Be A Title"),
        description: yup.string().required("There Must Be A Description"),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const postRef = collection(db, "posts")

    const onCreatePost = async (data) => {
        await addDoc(postRef, {
            // title: data.title,
            // description: data.description,
            ...data,
            username: user?.displayName,
            userId: user?.uid
        })
        navigate("/")
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <p style={{ color: "red" }}> {errors.title?.message} </p>
            <input type="text" placeholder='Title...' {...register("title")} /><br />
            <p style={{ color: "red" }}> {errors.description?.message} </p>
            <textarea type="text" placeholder='Description...' {...register("description")} /> <br />
            <input type='submit' />
        </form>
    )
}

export default CreateForm