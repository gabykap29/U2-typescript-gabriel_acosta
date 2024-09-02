import Car3 from "./act9";
/*    
10. Herencia de clases
Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional
batteryLife (vida de la batería) de tipo número. Añade un método charge() que
imprima un mensaje diciendo que el coche se está cargando. 11. 
*/
class ElectricCar extends Car3 {
    batteryLife: number;
  
    constructor(make: string, batteryLife: number) {
      super(make);
      this.batteryLife = batteryLife;
    }
  
    charge(): void {
      console.log(`Charging the electric car.`);
    }
  }
  