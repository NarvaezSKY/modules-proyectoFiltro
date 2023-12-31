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
    mostrarRutas()
    
    rutas.forEach(element => {
        // console.log(element)

    // poblar opciones
        let opcNombre=document.createElement('option')
        opcNombre.value=element.nombre
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
    
// FUNCION QUE MUESTRA LAS RUTAS
    function mostrarRutas(){
        rutas.forEach((element)=>{
            let divElemento=document.createElement('div')
            divElemento.classList.add('divElemento')
            divElemento.innerHTML=`<b class="textoRuta">Nombre Ruta:</b> ${element.nombre}
            <b class="textoRuta">Kilometros Min: </b> ${element.minKilometros}
            <b class="textoRuta">Kilometros Max: </b> ${element.maxKilometros}
            <b class="textoRuta">Estado: </b> ${element.estado}
            <b class="textoRuta">Calificación: </b> ${element.calificacion}
            <b class="textoRuta">Tipo de vía: </b> ${element.tipoVia}`

            resultadoBusqueda.appendChild(divElemento)

       
        })

        
    }

    let filtro={}

    nombreRuta.addEventListener('change', (e)=>{
        filtro.nombre=e.target.value
        console.log(filtro)
    })
    estadoRuta.addEventListener('change', (e)=>{
        filtro.estado=e.target.value
        console.log(filtro)
    })
    calificacionRuta.addEventListener('change', (e)=>{
        filtro.calificacion=parseInt(e.target.value)
        console.log(filtro)
    })
    tipoVia.addEventListener('change', (e)=>{
        filtro.tipo=e.target.value
        console.log(filtro)
    })

    for (const valor in filtro){
        const value=filtro[valor]
        console.log(value)
    }
    




    // nombreRuta.addEventListener('change',(element)=>{
    //     limpiarHTML()
    //     console.clear()
    //     console.log(element.target)
    //     rutas.forEach((so)=>{
    //         if (element.target.value===so.nombre){
                
    //             console.log(so)
    //             let divElemento=document.createElement('div')
    //             divElemento.classList.add('divElemento')
    //             divElemento.innerHTML=`<b class="textoRuta">Nombre Ruta:</b> ${so.nombre}
    //             <b class="textoRuta">Kilometros Min: </b> ${so.minKilometros}
    //             <b class="textoRuta">Kilometros Max: </b> ${so.maxKilometros}
    //             <b class="textoRuta">Estado: </b> ${so.estado}
    //             <b class="textoRuta">Calificación: </b> ${so.calificacion}
    //             <b class="textoRuta">Tipo de vía: </b> ${so.tipoVia}`
    //             resultadoBusqueda.appendChild(divElemento)
             
    //         }
            
    //     })
        
        
    // })
    // estadoRuta.addEventListener('change',(element)=>{
    //     limpiarHTML()
    //     console.clear()
    //     console.log(element.target.value)
    //     rutas.forEach((so)=>{
    //         if (element.target.value===so.estado){
                
    //             console.log(so)
    //             let divElemento=document.createElement('div')
    //             divElemento.classList.add('divElemento')
    //             divElemento.innerHTML=`<b class="textoRuta">Nombre Ruta:</b> ${so.nombre}
    //             <b class="textoRuta">Kilometros Min: </b> ${so.minKilometros}
    //             <b class="textoRuta">Kilometros Max: </b> ${so.maxKilometros}
    //             <b class="textoRuta">Estado: </b> ${so.estado}
    //             <b class="textoRuta">Calificación: </b> ${so.calificacion}
    //             <b class="textoRuta">Tipo de vía: </b> ${so.tipoVia}`
    //             resultadoBusqueda.appendChild(divElemento)
             
    //         }
            
    //     })  
    // })

    // tipoVia.addEventListener('change',(element)=>{
    //     limpiarHTML()
    //     console.clear()
    //     console.log(element.target.value)
    //     rutas.forEach((so)=>{
    //         if (element.target.value===so.tipoVia){
                
    //             console.log(so)
    //             let divElemento=document.createElement('div')
    //             divElemento.classList.add('divElemento')
    //             divElemento.innerHTML=`<b class="textoRuta">Nombre Ruta:</b> ${so.nombre}
    //             <b class="textoRuta">Kilometros Min: </b> ${so.minKilometros}
    //             <b class="textoRuta">Kilometros Max: </b> ${so.maxKilometros}
    //             <b class="textoRuta">Estado: </b> ${so.estado}
    //             <b class="textoRuta">Calificación: </b> ${so.calificacion}
    //             <b class="textoRuta">Tipo de vía: </b> ${so.tipoVia}`
    //             resultadoBusqueda.appendChild(divElemento)
             
    //         }
            
    //     })
        
        
    // })

    



    function limpiarHTML(){
        resultadoBusqueda.innerHTML=""
    }


})

