import { rutas } from "/proyectoFiltro/modules/db.js";
// console.log(rutas)


document.addEventListener('DOMContentLoaded', ()=>{

    

    // VARIABLES
    let nombreRuta=document.getElementById('nombre')
    let minKm=document.getElementById('minkm')
    let maxKm=document.getElementById('maxkm')
    let estadoRuta=document.getElementById('estado')
    let calificacionRuta=document.getElementById('calificacion')
    let tipoVia=document.getElementById('tipovia')

    let resultadoBusqueda=document.getElementById('resultado')
    
    
    rutas.forEach(element => {
        console.log(element)

        // poblar opciones
        let opcNombre=document.createElement('option')
        opcNombre.value=element
        opcNombre.textContent=element.nombre
        nombreRuta.appendChild(opcNombre)

        let opcMaxKm=document.createElement('option')
        opcMaxKm.value=element
        opcMaxKm.textContent=element.maxKilometros
        maxKm.appendChild(opcMaxKm)

        let opcMinKm=document.createElement('option')
        opcMinKm.value=element
        opcMinKm.textContent=element.minKilometros
        minKm.appendChild(opcMinKm)
    });
    
    























})

