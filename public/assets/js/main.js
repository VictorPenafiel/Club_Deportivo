// window.addEventListener('DOMContentLoaded', () => {

//     let formularioNombre = document.querySelector('#formularioNombre');

//     formularioNombre.addEventListener('submit', (e) => {
//         e.preventDefault()
//         let nombre = document.querySelector('#nombre').value,
//             apellido = document.querySelector('#apellido').value;

//             // console.log(nombre,apellido)
//             axios.get(`/enviar?nombre=${nombre}&apellido=${apellido}`)
//                 .then(respuesta => {
//                     console.log('llega respuesta -->', respuesta)
//             })
//     })
// })




// El código dentro de esta función se ejecutará cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    //Seleccionamos el formulario y el botón de envío.
    const form = document.getElementById('formularioNombre');
    const submitButton = form.querySelector('button[type="submit"]');
    //Creamos un nuevo elemento `div` para mostrar mensajes de feedback al usuario y lo añadimos al formulario.
    const feedbackElement = document.createElement('div');
    form.appendChild(feedbackElement);
    
    //Añadimos un event listener al formulario para el evento 'submit'. Usamos `async` porque vamos a usar `await` dentro de esta función.
    form.addEventListener('submit', async (e) => {
        //e.preventDefault()` evita que el formulario se envíe de la manera tradicional.
        e.preventDefault();

        //Obtenemos los valores de los campos nombre y apellido, y eliminamos espacios en blanco al inicio y al final.
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();

        //Verificamos si alguno de los campos está vacío. Si es así, mostramos un mensaje de error y detenemos la ejecución.
        if (!nombre || !apellido) {
            showFeedback('Por favor, complete todos los campos.', 'error');
            return;
        }

        //Usamos un bloque try/catch para manejar errores.
        try {
            //Activamos el estado de carga.
            setLoading(true);
            //Hacemos la petición GET a '/enviar' usando axios, pasando nombre y apellido como parámetros.
            const response = await axios.get('/enviar', {
                params: { nombre, apellido }
            });
            //Si la petición es exitosa, mostramos un mensaje de éxito y reseteamos el formulario.
            console.log('Respuesta recibida:', response.data);
            showFeedback('Formulario enviado con éxito!', 'success');
            form.reset();
        //Si hay un error, lo registramos en la consola y mostramos un mensaje de error al usuario.
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            showFeedback('Hubo un error al enviar el formulario. Por favor, intente nuevamente.',   'error');
        //Independientemente del resultado, desactivamos el estado de carga.
        } finally {
            setLoading(false);
        }
        });

    //Esta función maneja el estado de carga, deshabilitando el botón y cambiando su texto mientras se envía el formulario.
    function setLoading(isLoading) {
        submitButton.disabled = isLoading;
        submitButton.textContent = isLoading ? 'Enviando...' : 'Enviar';
        }
    //Esta función muestra mensajes de feedback al usuario. Establece el mensaje y la clase CSS apropiada (para estilizar diferentemente los mensajes de éxito y error).
    function showFeedback(message, type) {
    feedbackElement.textContent = message;
        feedbackElement.className = `feedback ${type}`;
    //Después de 5 segundos, el mensaje desaparece.
    setTimeout(() => {
        feedbackElement.textContent = '';
        feedbackElement.className = 'feedback';
    }, 5000);
    }
});

