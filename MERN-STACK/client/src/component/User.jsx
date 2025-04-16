import {faPenToSquare,faTrash,faUserPlus} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
export default function User(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            try{
               const response =await axios.get("http://localhost:5000/api/getAllUser")
               setUsers(response.data)
            }catch(error){
                console.log("Error while fetching data",error)
            }
        }
        fetchData()
    },[])
    const deleteUser = async (userId)=>{
        await axios.delete(`http://localhost:5000/api/delete/user/${userId}`)
        .then((response)=>{
            setUsers((prevUser)=>prevUser.filter((user)=>user._id !==userId))
            toast.success(response.data.message, {position:"top-right"})

        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <div className=" mt-20 px-10 flex flex-col  items-center justify-center" >
            <Link to="/add" className="flex gap-2 border border-gray-300 px-4 py-2 mb-5  rounded-md bg-gray-300 hover:bg-gray-100 ">Add User<FontAwesomeIcon className=" mt-1"icon={faUserPlus}/></Link>
            {users.length === 0?(
                <div className="text-center">
                    <h1>No Data To Display.</h1>
                    <h3>Please Add User</h3>
                </div>
            ):(
                <table className="  border border-gray-300  ">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className=" border border-gray-300 px-4 py-2" scope="col">Sl.No</th>
                        <th className=" border border-gray-300 px-4 py-2" scope="col">Name</th>
                        <th className=" border border-gray-300 px-4 py-2" scope="col">Email</th>
                        <th className=" border border-gray-300 px-4 py-2" scope="col">Address</th>
                        <th className=" border border-gray-300 px-4 py-2" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody >
                    {users.map((user,index)=>{
                        return(
                            <tr key={user._id} >
                            <td className="border border-gray-300 px-4 py-2" >{index+1}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.address}</td>
                            <td className=" border border-gray-300 px-4 py-2">
                                <Link to={`/update/${user._id}`} className="mr-4 hover:text-gray-600"> <FontAwesomeIcon  icon={faPenToSquare}/></Link>
                                <button onClick={()=>deleteUser(user._id)} className="hover:text-gray-600"> <FontAwesomeIcon icon={faTrash}/></button>
                               </td>
                        </tr>
    
                        )
                    })}
    
                </tbody>
              </table>
            )}

        </div>
    )
}