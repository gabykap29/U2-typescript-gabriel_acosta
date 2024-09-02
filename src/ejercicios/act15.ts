function identity<T>(arg: T): T {
    return arg;
  }
  const numberResult = identity(42); // devuelve 42 (tipo number)
  const stringResult = identity("Hola, mundo"); // devuelve "Hola, mundo" (tipo string)
  const booleanResult = identity(true); // devuelve true (tipo boolean)
  
  console.log(numberResult);
  console.log(stringResult);
  console.log(booleanResult);
  