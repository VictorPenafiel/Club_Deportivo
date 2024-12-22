import express from "express";
import {putTareasHandler} from '../controller/tareasHandler.js'

const router = express.Router();

router.put('/',  putTareasHandler)

export default router