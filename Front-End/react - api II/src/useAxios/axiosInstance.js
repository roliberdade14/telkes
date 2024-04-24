import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'

const axiosInstance = axios.create(
    {
        baseURL: BASE_URL
        //headers: {'Authorization': 'juliana-moraes-telks'}
    }
)

export default axiosInstance