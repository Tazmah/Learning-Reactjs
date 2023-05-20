import { useDispatch, useSelector } from "react-redux/es/exports"

const Home = () => {
    const username = useSelector((state: any) => state.user.value.username)
    return (
        <div>
            <h1>This is the Home Page</h1>
            <h1>{username}</h1>
        </div>
    )
}

export default Home