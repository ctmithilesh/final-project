import axios from 'axios'
import React from 'react'

const register_api = 'http://localhost:8080/register'
const TestComponent = () => {


    const submitData = () => {

                registerUser()
    }

    const registerUser = async (firstname, lastname, email, password, role) => {

        await axios.post(register_api,{firstname, lastname, email, password, role})
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div>
       <form onSubmit={submitData}>
        <button type='submit'> Submit </button>
       </form>
    </div>
  )
}

export default TestComponent