import fs from 'fs'

// Creación de variables de entorno
import { fileURLToPath } from 'url'
import { dirname } from "path";


// Variables que me permiten mostrar el path donde estoy en el proyecto
const __filename = fileURLToPath( import.meta.url )
const __dirname = dirname( __filename )

//Constante database que contiene una array vacio para guardar las tareas
const database = []
const infouser = []

// Ruta o path paar crear en la raiz del proyecto la carpeta DB
const path = `${__dirname}/../db/db.json`;

// Iniciamos nuestro CRUD
export const postTareasHandler = (req ,res) => {
    try {
        const {titulo, descripcion } = req.body

        if(typeof titulo !== 'string' && typeof descripcion !== 'string'){
            throw new Error('Datos invalidos, descripcion debe ser una cadena')
        }
        database.push({titulo, descripcion});
        res.status(200).send(database)
        } catch(error){
            res.status(400).json({message: error.message})
        }
    }

export const getTareasHandler = (req, res) => {
    try {
        //Creamos el archivo
        fs.writeFileSync(path , JSON.stringify(database))
        //leemos el archivo
        fs.readFileSync(path, (err, json) =>{
        if(err){
            res.status(500).send({ message: 'Error al leer el archivo de tareas', error: err.message});
        }else{
            res.status(200).send(JSON.parse(json))        
        }
    })
    } catch (error){
        res.status(500).send({ message: 'Error al obtener las tareas', error: err.message});
    }
}

export const putTareasHandler = (req, res) => {
    try {
        const id = req.query.id;
        console.log( 'Salida de ID-->', id)
        if ( id === -1){
            throw new Error('Tarea no encontrada con el ID proporcionado.')
        }
        database [ id -1 ] = req.body
        res.status(200).send(database)
    } catch (error){
        res.status(400).json({ message: error.message });
    }
}

export const deleteTareasHandler = (req, res) =>{
    try {
        const id = req.query.id
        if (id >= 1){
            database.splice(id - 1, 1 );
        }else{
            throw new Error('ID inválido,debe ser un número mayor o igual a 1')
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getEnviarHandler = (req, res) =>{
    console.log('Salida de req.query', req.query)
    const { nombre, apellido } = req.query
    infouser.push({ nombre, apellido })

    fs.writeFileSync('usuarios.json', JSON.stringify(infouser))
    
    fs.readFile('usuarios.json', (err, json) =>{
    if(err){
        res.status(500).send({ message: 'Error al leer el archivo de tareas', error: err.message});
    }else{
        res.status(200).send(JSON.parse(json))        
    }
 })

}