import { Request,Response } from "express";
import { UserResponse,UserResponseBody } from "../types/userTypes";
import { ApiResponse } from "../types/responseTypes";

export const createUser = (req:Request<{},{},UserResponseBody>, res:Response<ApiResponse<UserResponse>>)=>{
    const {name,email,age} = req.body
    if(!name || !email){
         res.status(400).json({success:false, error:"Name and email are required"});
         return
        }
        const user = {name,email,age}
        res.status(201).json({success: true, data:{message: "User Created Successfully",user}})
    }
