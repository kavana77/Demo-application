import express from "express"
import  {createUser } from "../handlers/userHandler"
const router = express.Router()
router.post('/',createUser)
export default router