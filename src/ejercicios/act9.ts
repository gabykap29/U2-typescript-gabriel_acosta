
/* 
9. Clase con propiedades privadas
Modifica la clase Car para que la propiedad make sea privada. Añade un método
getMake() que devuelva el valor de make. 
*/
class Car3{
    private make: string;
    constructor(make: string){
        this.make = make;
    }
    drive():void{
       console.log(`Driving a make ${this.make}`);
    }
    getMake(){
        return this.make;
    }
}
export default Car3;
