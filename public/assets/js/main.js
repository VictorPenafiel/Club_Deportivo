window.addEventListener('DOMContentLoaded', () => {

    let formularioNombre = document.querySelector('#formularioNombre');

    formularioNombre.addEventListener('submit', (e) => {
        e.preventDefault()
        let nombre = document.querySelector('#nombre').value,
            apellido = document.querySelector('#apellido').value;

            // console.log(nombre,apellido)
            axios.get(`/enviar?nombre=${nombre}&apellido=${apellido}`)
                .then(respuesta => {
                    console.log('llega respuesta -->', respuesta)
            })
    })
})

