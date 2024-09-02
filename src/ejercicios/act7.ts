/* 
7. Clase básica
Define una clase Car que tenga una propiedad make (marca del coche) de tipo string
y un método drive() que imprima un mensaje en la consola diciendo "Driving a
[make]".
*/

class Car{
    make: string = "Unknown";
    drive():void{
       console.log(`Driving a make ${this.make}`);
    }
}
let car = new Car();
car.make = "Toyota";
car.drive();
