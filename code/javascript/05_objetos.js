var estudiante = {
    nombre: 'Roberto',
    apellido: 'Jijon',
    trabajo: 'Tecnico',
    correo: 'robertodmcs4@gmail.com'

}
var estudiante2 ={
    nombre: 'Carolina',
    apellido: 'Farias',
    trabajo: 'Claro',
    correo: 'colivares@globalhitss.com'
 
}

function imprimirNombreMayuscula(objeto){
    var { nombre } = objeto
    console.log(`${nombre.toUpperCase()} ${objeto.apellido}`)
}

function imprimirNombreMinuscula(objeto){
       console.log(`${objeto.nombre.toLowerCase()} ${objeto.apellido}`)
}
imprimirNombreMayuscula(estudiante)
imprimirNombreMayuscula(estudiante2)