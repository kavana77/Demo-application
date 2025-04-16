import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddUser(){
    const users ={
        name:"",
        email:"",
        address:""
    }
    const [user,setUser] = useState(users)
    const navigate = useNavigate()
    function inputHandler(e){
        const {name,value} = e.target
        console.log(name,value)
        setUser({...user,[name]:value})
    }
    const submitForm = async (e) => {
        e.preventDefault()
        try {
          const response = await axios.post("http://localhost:5000/api/user", user)
          toast.success( response.data.message, {position:"top-right"})
          navigate('/')
        } catch (error) {
          console.log("Error creating user", error)
        }
      }

    return(
        <div className="bg-gray-300 my-40 mx-80 pb-20 flex flex-col  items-center justify-center">
            <h3 className="text-center ">Add New User</h3>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input className="border border-gray-500 m-2"type="text" onChange={inputHandler} name="name" placeholder="Enter your name"/>

                </div>
                <div>
                    <label htmlFor="name">Email:</label>
                    <input className="border border-gray-500 m-2"type="email" onChange={inputHandler} name="email" placeholder="Enter Email"/>

                </div>
                <div>
                    <label htmlFor="name">Address:</label>
                    <input className="border border-gray-500 m-2"type="text" onChange={inputHandler} name="address" placeholder="Enter your Address"/>

                </div>
                <div >
                    <button className="bg-gray-600 p-2 border rounded-xl" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}