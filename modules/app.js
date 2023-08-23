import { nombre,apellido, mital }  from '/modules/users.js'
import { moteros }  from '/modules/moteros.js'
console.log(nombre,apellido)

console.log(mital('cristian'))

console.table(moteros)


const getMoteroByID=(name)=>{
    // console.log("Consultas hechas:")
    return moteros.find((moto)=>{
        // console.log(moto)
        if (moto.name===name){
            console.log("--------------------------Coincidencia Encontrada--------------------------")
            console.table(moto)
            
        }
    })
}
getMoteroByID((prompt('Ingresa un nombre a buscar')))



// console.log(nombre,apellido)

// (function(){
//     let nombre = "Cristian"
//     let apellido = "tal"
    
//     console.log(nombre,apellido)
//     })();
// (function(){
        
// })();