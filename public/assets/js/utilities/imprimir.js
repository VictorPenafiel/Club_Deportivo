import axios from "axios";

const imprimir = async()  => {
    let printTareas = document.querySelector('#printTareas')
    printTareas.innerHTML = '';

    const infoData = await axios.get('/tareas/asignadas')
    console.log('Salida de data-->, infoData.data')
    const data = infoData.data
    let numEdit = 0
    data.forEach(element => {
        numEdit++
        const {titulo, descripcion} = element
        printTareas.innerHTML += `<tr> <td>${element.descripcion}</td>
            <td class="whiteSpace">
            <div class="containerButton">
                <button data-editarTareas-number="${numEdit}" type="button" class="btn btn-warning btn-sm d-block me-2 editarTarea"><i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btndanger btn-sm d-block eliminarTarea"><i class="bi bi-trash"></i></button>
            </div>
            </td>
        </tr>
        
        `
    });

    let editarTarea = document.querySelectorAll('.editarTarea')
    let eliminarTarea = document.querySelectorAll('.eliminarTarea')

    editarTareaAll.forEach( element => {
        e.preventDefault()
        let thisButton = e.target
        numeroTarea = thisButton.getAttribute('data-editarTareas-number')
        console.log('Salida de numeroTarea-->', numeroTarea)
        editarTareas(numeroTarea)
    }

    )
}

export default imprimir