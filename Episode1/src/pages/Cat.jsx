import React from 'react'
import { useGetCat } from '../useGetCat'

const Cat = () => {
    const { data, refetchData, error, isLoading } = useGetCat()
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1> {data?.fact} </h1>
            <button onClick={refetchData}>
                Refetch
            </button>
        </div>
    )
}

export default Cat