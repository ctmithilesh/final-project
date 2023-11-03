import axios from "axios"
import { endpoints } from "../Data/endpoints"

export const loginUser = async () => {

    await axios.get(endpoints.register)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}

