// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    const array = [];

      for (values in objeto)
      {
          
        array.push([values,objeto[values]]);
       

      }

   return array;
     

}




function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var times = [];
  var letters = [];
	var counter = 0;
  const obj = {};
  for (var e = 0;e<string.length;e++)
  {
    	letters.push(string.charAt(e));
      for(var x = 0;x<string.length;x++)
      {
        if(string.charAt(e)===string.charAt(x))
              	counter++;
      }
        	
              	times[e] = counter;
             	  counter = 0;
  }
  for(var i = 0; i < string.length; i++)
    {
        obj[letters[i]] = times[i];
    }



  return obj;
  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
    var stringupper = [];
    var stringlower = [];
    var u = "";
    var l = "";
    var result;

    for(value in s)
    { 
      if(/[A-Z]/.test(s.charAt(value)))
        stringupper.push(s.charAt(value));
          else 
           stringlower.push(s.charAt(value));



    }
      for(let x = 0;x<stringupper.length;x++)
        {
          u = u+ stringupper[x];
        }
    for(let x = 0;x<stringlower.length;x++)
        {
          l = l+ stringlower[x];
        }
       
        result = u.concat(l);

        return result;
   

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
	var wordsbackwards = [];
	var temp = [];
	var result = "";
	var counter = 0;
  
  for(var e = 0;e<str.length;e++)
  {
    temp.unshift(str[e]);
  }
	for(var x = 0;x<temp.length;x++)
    {
      	if(temp[x]!==" ")
        {	
          
      	  	wordsbackwards[counter] += temp[x];   
          	
        }
      	else
          counter++;
    }
	
	for(var i = wordsbackwards.length;i>=0;i--)
    {
      	result += wordsbackwards[i];
    }
		
	result = result.replaceAll("undefined"," ");
	result = result.slice(2);

  return result;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var nstring = numero.toString();
  var invertedstring;
  invertedstring = nstring.split('').reverse().join('');

    if(nstring===invertedstring)
    return "Es capicua";
    else
    return "No es capicua";

  
  


}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  cadena = cadena.replaceAll("a",'');
	cadena = cadena.replaceAll("b",'');
	cadena = cadena.replaceAll("c",'');

  return cadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(var x = 0;x<arr.length;x++)
                {
                	if(arr[x].length>arr[arr.length-1].length)
                    {
                      temp = arr[arr.length-1];
                      arr[arr.length-1] = arr[x];
                      arr[x] = temp;
                    }
                }

                return arr;




}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var union = [];

		for(var x = 0;x<arreglo1.length;x++)
        {

          for(var e = 0;e<arreglo2.length;e++)
          {
            if(arreglo1[x]===arreglo2[e])
                  	union.push(arreglo2[e]);
          }
        		
        
        }

        return union;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

