import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate ,useParams} from "react-router-dom";
import toast from "react-hot-toast";

export default function Update(){
    const users ={
        name:"",
        email:"",
        address:""
    }
    const [user,setUser] = useState(users)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/user/${id}`)
        .then((response)=>{
            setUser(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[id])
    function inputHandler(e){
        const {name,value} = e.target
        console.log(name,value)
        setUser({...user,[name]:value})
    }
    const submitForm = async (e) => {
        e.preventDefault()
        try {
          const response = await axios.put(`http://localhost:5000/api/user/${id}`,user)
          toast.success( response.data.message, {position:"top-right"})
          navigate('/')
        } catch (error) {
          console.log("Error creating user", error)
        }
      }

    return(
        <div className="bg-gray-300 my-40 mx-80 pb-20 flex flex-col  items-center justify-center">
            <h3 className="text-center ">Update User</h3>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input className="border border-gray-500 m-2"type="text" value={user.name} onChange={inputHandler} name="name" placeholder="Enter your name"/>

                </div>
                <div>
                    <label htmlFor="name">Email:</label>
                    <input className="border border-gray-500 m-2"type="email" value={user.email} onChange={inputHandler} name="email" placeholder="Enter Email"/>

                </div>
                <div>
                    <label htmlFor="name">Address:</label>
                    <input className="border border-gray-500 m-2"type="text" value={user.address} onChange={inputHandler} name="address" placeholder="Enter your Address"/>

                </div>
                <div >
                    <button className="bg-gray-600 p-2 border rounded-xl" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}