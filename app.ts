

// implementar la funciona sumArr que recibe un arreglo de numeros y retorna 
// la suma de todos los elementos del arreglo
function sumaArr(arr) {
    let suma = 0;
    for(let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    return suma;
}




// implementar la funcion mayores que recibe un arreglo de numeros [33,44,33,32,21 ] y un numero
// y retorna un arreglo con los elementos que son mayores al numero recibido

function mayores(arr, num) {
   /*con PUSH
   function mayores1(arr, num) {
    var arrf = [];
    for(var i = 0; i <= arr.length; i++){
        if(arr[i] > num){
            arrf.push(arr[i]);
        }
    }
    return arrf;   
    }*/
    /*con MAP
    function mayores2(arr, num) {
        var arrf = arr.map((elemento) => {
            if (elemento > num){
            return elemento;
            }
        });
        return arrf;
    }*/

    // con FILTER
    var arr4 = arr.filter((elemento) => elemento > num);
   return arr4; 
}


// Tenemos el siguiente array de objetos
// const personas = [
//     { nombre: 'Juan', edad: 20 },
//     { nombre: 'Ana', edad: 15 },
//     { nombre: 'Pedro', edad: 30 },
//     { nombre: 'Maria', edad: 25 },
//     { nombre: 'Luis', edad: 10 },
//     { nombre: 'Laura', edad: 40 },
// ]
// Implementar la funcion mayoresEdad que recibe el  arreglo anterior 
//  de personas y un numero y que nos de otro arreglo con las personas 
// que son mayores al numero recibido

function mayoresEdad(personas, num) {
    var mayores = personas.filter((elemento) => elemento.edad > num);
    return mayores;
}


// con el arreglo anterior calcular la media de las edades de las personas
// a la funcion mediaEdad le llega el arreglo de personas y retorna la media de las edades
function mediaEdad(personas) {
    var sumaEdad = personas.reduce((acc,elemento) => acc + elemento.edad, 0);
    var media = sumaEdad/personas.length;
    return media;
}


// implementar la function mayores o iguales a la media usando el array anterior.
function mayoresIgualMedia(personas) {
    var sumaEdad = personas.reduce((acc,elemento) => acc + elemento.edad, 0);
    var media = sumaEdad/personas.length;
    var mayoresigualMedia = personas.filter((elemento) => elemento.edad >= media);
    return mayoresigualMedia;   
}



module.exports = {
    sumaArr,
    mayores,
    mayoresEdad,
    mediaEdad,
    mayoresIgualMedia
};
// 