import Axios from "./Axios"
import axios from "axios"
import SummaryApi from "../Common/SummaryApi.js"

const fetchUserDetails = async()=>{
    try {
        const response = await axios.get(
             'http://localhost:8080/api/user/user-details',
             { withCredentials: true }

        )
        return response.data
    } catch (error) {
        console.log("ya hai",error)
    }
}

export default fetchUserDetails