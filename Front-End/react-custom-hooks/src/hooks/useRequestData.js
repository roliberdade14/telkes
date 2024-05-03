import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/constants"


const useRequestData = (path) =>{

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        axios
        .get(`${BASE_URL}${path}`)
        .then((resp)=>{
            setData(resp.data)
            setIsLoading(false)
        })
        .catch((err)=>{
            setIsError(true)
            console.log(err);
        })
    },[])

    return [data, isLoading, isError]

}

export default useRequestData