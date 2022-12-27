// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var e = 0;e<array.length;e++)
    {
       array[e]++;
    }

    return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);

  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);

  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var resultado = '';

  for (let member in palabras)
    {
        if(member<palabras.length-1)
        resultado += palabras[member]+" ";
          else
          resultado += palabras[member];
    }

    return resultado;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var temp = false;
  for (var e=0;e<array.length;e++)
    {
        if(elemento===array[e])
            temp = true;
        
    }

    return temp;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultado = 0;

  for(var e= 0;e<numeros.length;e++)
    {
      resultado += numeros[e];


    }

    return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultado = 0;
  
  for(var e= 0;e<resultadosTest.length;e++)
    {
      resultado = resultado + resultadosTest[e];


    }
    resultado = resultado/resultadosTest.length;
    return resultado;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
    var resultado = numeros[0];
    for(var e= 0;e<numeros.length;e++)
    {

      if(resultado<=numeros[e])
        resultado = numeros[e];

    }

    return resultado;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
    let sum = 0;

    if(arguments===null)
    return 0;
    if(arguments.length===1)
    return arguments[0];

    for(let i = 0;i<arguments.length-1;i++)
      {
          arguments[0]*=arguments[i];
          sum = arguments[0].toString();
          
      }
      sum = parseInt(sum);
    
      return sum;
   
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var resultado = 0;
  for(var e=0;e<arreglo.length;e++)
    {
        if(arreglo[e]>18)
        resultado++;
    }

    return resultado;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  
  if(numeroDeDia===7 || numeroDeDia===1)
    return "Es fin de semana";
    else
    return "Es dia Laboral";
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  const firstDigitStr = String(n)[0];

  if(firstDigitStr==="9")
  return true;
  else
  return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var resultado = false;
  var temp = 0;
  for(var e = 0;e<arreglo.length;e++)
      {
          if(e===0)
          {
            if(arreglo[e]===arreglo[0])
            temp++;
          }
          else
          {
              if(arreglo[e]===arreglo[e-1])
              temp++;
          }
      }

      if(temp===arreglo.length)
      {
        resultado = true;
        return resultado;
      }
      else
      return resultado;
     
  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var temp =[];
  for(let month in array)
  {
    if(array[month]==="Enero" || array[month]==="Marzo" || array[month]==="Noviembre" )

      temp.push(array[month]);

  }
    if(temp.length<3)
      return "No se encontraron los meses pedidos";
      else
      return temp;
  
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var temp = [];
    for(var e = 0;e<array.length;e++)
    {
        if(array[e]>100)
        temp.push(array[e]);
    }

    return temp;

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
   var temp = [];

    for(var e = 0;e<10;e++)
    { 

      if(numero===e)
      {
        return "Se interrumpió la ejecución";
        break;
      }
       
        numero = numero + 2;
        temp.push(numero);

    }

    return temp;

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var temp = [];

    for(var e = 0;e<10;e++)
    { 
      if(5===e)
      {
        continue;
      }
        numero = numero + 2;
        temp.push(numero);
  
    }

    return temp;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
