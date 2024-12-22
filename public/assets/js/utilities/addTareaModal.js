import imprimir from './imprimir.js'

const addTarea = async() => {
    let titulo = document.querySelector('#tituloAdd').value 
    descripcion = document.querySelector('#descripcionadd').value 

    await axios.post('tareas', {
        titulo,
        descripcion
    })

    .then( respuesta => {
        $('#modalAddTarea').modal('toggle')
        titulo = document.querySelector('#tituloAdd').value = '',
        descripcion = document.querySelector('#descripcionAdd').value = ''
        imprimir()
        console.log('LLega respuesta -->', respuesta)
    })
    .catch((err)=>{
        console.log('Salida del error',err)
    })
}

export default addTarea