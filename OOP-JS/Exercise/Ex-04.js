class Shape{
    // constructor() {
    // }

    calculateArea() {
    }
}

class Circle extends Shape{
    constructor(radius) {
        super();
        this.radius = radius;

    }

    calculateArea() {
        var area = Math.PI * (this.radius * this.radius);
        console.log(`Circle Area is     : ${area}`);
    }
}
class Triangle extends Shape{
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        var area = this.width * this.height/2;
        console.log(`Triangle Area is   : ${area}`);
    }
}

const triangle = new Triangle(10, 10);
triangle.calculateArea();

const circle=new Circle(5);
circle.calculateArea();