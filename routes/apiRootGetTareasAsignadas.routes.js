import express from "express";
import {getTareasHandler} from '../controller/tareasHandler.js'

const router = express.Router();

router.get('/',  getTareasHandler)

export default router