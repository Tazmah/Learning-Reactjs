import { useQuery } from "@tanstack/react-query"
// import { Axios } from "axios"
import axios from "axios"

const Home = () => {
    const { data,
        isLoading,
        error,
        refetch
    } = useQuery(["cat"], () => {
        return axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    if (error) {
        console.log(error);
    }
    return (
        <div>
            <h1>This is the Home page and user is </h1>
            <p> {data?.fact} </p>
            <button onClick={refetch}>Update</button>
        </div>
    )
}

export default Home