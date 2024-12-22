import express from "express";
import {getEnviarHandler} from '../controller/tareasHandler.js'

const router = express.Router();

router.get('/', getEnviarHandler)

export default router