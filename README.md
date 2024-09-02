#Ejercicios Prácticos de Fundamentos de TypeScript
En este repositorio encontrarás una serie de ejercicios prácticos relacionados con los fundamentos de TypeScript. Cada ejercicio se resuelve en un archivo diferente. A continuación, se describen los ejercicios:

### Tipos básicos:
1. Declara una variable age de tipo número y asígnale un valor. Luego, declara una variable name de tipo string y asígnale un valor.
** Union types: ** 
2. Declara una variable status que pueda ser de tipo string o número. Asígnale diferentes valores para probar ambos tipos.
** Interfaz básica: ** 
3. Crea una interfaz Person con las propiedades firstName (string) y lastName (string). Declara una variable person de tipo Person y asígnale un objeto con tu nombre y apellido.

** Interfaz opcional: ** 
4. Modifica la interfaz Person del ejercicio anterior para que la propiedad lastName sea opcional. Declara un objeto que solo incluya firstName.
** Función con tipado: ** 
5. Escribe una función add que acepte dos números como argumentos y devuelva su suma. Asegúrate de tipar adecuadamente los parámetros y el valor de retorno.

** Tipado en funciones: **
6. Crea una función greet que tome un argumento name de tipo string y devuelva una frase de saludo usando ese nombre.
** Clase básica: **
7. Define una clase Car que tenga una propiedad make (marca del coche) de tipo string y un método drive() que imprima un mensaje en la consola diciendo “Driving a [make]”.
** Clase con constructor: **
8. Añade un constructor a la clase Car que inicialice la propiedad make. Crea una instancia de Car con una marca y llama al método drive().
** Clase con propiedades privadas: **
9. Modifica la clase Car para que la propiedad make sea privada. Añade un método getMake() que devuelva el valor de make.
** Herencia de clases: ** 
10. Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional batteryLife (vida de la batería) de tipo número. Añade un método charge() que imprima un mensaje diciendo que el coche se está cargando.
** Interface y clases: **
11. Crea una interfaz Shape que tenga un método area() que devuelve un número. Luego, crea una clase Circle que implemente esta interfaz y calcule el área de un círculo.
** Tipos literales: **
12 Crea una variable direction que solo pueda tener uno de los siguientes valores: “up”, “down”, “left”, “right”.
** Enum: ** 
13. Declara un enum Color con los valores “Red”, “Green” y “Blue”. Crea una función que tome un argumento de tipo Color y devuelva un mensaje con el color.
** Type assertions: ** 
14. Declara una variable de tipo any con un valor numérico y usa una aserción de tipo para tratarla como un string. Usa la propiedad .length en esta variable.
** Genéricos (básico): ** 
15. Escribe una función genérica identity que tome un argumento de tipo T y devuelva el mismo valor. Usa esta función con diferentes tipos de datos.
