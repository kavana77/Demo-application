import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"
import cors from "cors"

const app = express()
app.use(cors("http://localhost:5173/"))
app.use(bodyParser.json())
dotenv.config()

const PORT = process.env.PORT || 6000
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{
    console.log("DB connected successfully.")
}).catch((error)=>console.log(error))

app.use("/api",route)
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})