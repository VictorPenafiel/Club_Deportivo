import express from "express";
import {deleteTareasHandler} from '../controller/tareasHandler.js'

const router = express.Router();

router.delete('/',  deleteTareasHandler)

export default router