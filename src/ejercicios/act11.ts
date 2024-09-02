import { Shape } from "../interfaces/interfaces";

/* 11 */

class Circle implements Shape {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    area(): number {
      // fórmula del área de un círculo: π * r^2
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // Crear una instancia de Circle con un radio de 5 unidades
  const circle = new Circle(5);
  const areaOfCircle = circle.area();
  
  console.log(`El área del círculo con radio ${circle.radius} es ${areaOfCircle.toFixed(2)}`);
  