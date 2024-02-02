import { getData } from "../controller/dataController.js"
import express from "express"

const router = express.Router()

router.get('/', getData)

export default router