import axios from "axios"
import { endpoints } from "../Data/endpoints"
let data = null 
export const registerUser = async (firstname, lastname, email, password, role) => {

    await axios.post(endpoints.register,{firstname, lastname, email, password, role})
    .then(res=>{
        console.log(res)
        data = res.data 
    })
    .catch(err=>{
        console.log(err)
    })

    return data
}

