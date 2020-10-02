var nombreApellido = 'Roberto Jijon'
var edad = 37

//FUNCION TIPO DECLARATIVA
function imprimirEdad(nombre, edad) {
    console.log(nombre, 'tiene la edad de: ', edad)

}

//FUNCION TIPO FLECHA 
var imprimirEdad2 = (nombre, edad) => {
console.log(nombre, 'tiene la edad de: ', edad)
}

//FUNCION TIPO EXPRESIVA
var imprimirEdad3 = function(nombre, edad)  {
    console.log(nombre, 'tiene la edad de: ', edad)
}

imprimirEdad(nombreApellido, edad)
imprimirEdad('Roberto A.', 24)
imprimirEdad2(nombreApellido, edad)
imprimirEdad3('Jijon A.', 15)