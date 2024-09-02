/* 
6. Tipado en funciones
Crea una función greet que tome un argumento name de tipo string y devuelva una
frase de saludo usando ese nombre.
*/

function saludo(name: string):string{
    return `bienvenido ${name}`;
}
console.log(saludo("Gabriel"));
