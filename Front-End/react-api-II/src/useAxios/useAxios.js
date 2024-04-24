import { useState } from "react"

const useAxios = (configRequest) => {

    //desconstrução
    const { axiosInstance, method, path, body } = configRequest

    const [data, setData] = useState([])

    const fetchData = async () => {

        try {
            const resp = await axiosInstance[method](path, body)
            console.log(resp);
            setData(resp.data)

        }
        catch (err) {
            console.log(err);
        }
    }

    return { data, fetchData }

}

export default useAxios