import mongoose from "mongoose";

const connectionString = 'mongodb://localhost:27017/datavisualization'

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log("database connected")
    } catch (error) {
        console.log("error connecting database")
    }
}

export default connectDB