import express from "express"
import { create, deleteUser, getAllUsers, getUserById, update } from "../controller/userController.js"

const route = express.Router()

route.post("/user",create)
route.get("/getAllUser",getAllUsers)
route.get("/user/:id",getUserById)
route.put("/user/:id",update)
route.delete("/delete/user/:id",deleteUser)
export default route