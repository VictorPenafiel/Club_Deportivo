export const vistaHome = (req, res) => {
    res.render('home', {
        layout: 'main',
        title: 'Bienvenido al administrador de tareas'
    })
}