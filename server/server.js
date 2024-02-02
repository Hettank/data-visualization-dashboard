import express from "express"
import connectDB from "./config/db.js"
import router from "./routes/dataRoutes.js"
import cors from "cors"

const PORT = 5000

connectDB() // database connection

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use('/api/visualData', router)

app.listen(PORT, () => {
    console.log("app running on port 5000")
})