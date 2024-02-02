import asyncHandler from "express-async-handler"
import { DataModel } from "../models/dataModel.js"

export const getData = asyncHandler(async (req, res) => {
    const dataJson = await DataModel.find()

    if (!dataJson || dataJson.length === 0) {
        return res.status(400).json({ message: "Data Not Found" })
    }

    return res.status(200).json({ dataJson })
})