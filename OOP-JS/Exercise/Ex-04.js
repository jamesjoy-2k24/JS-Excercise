class Shape{
    constructor() {
    }

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
class Rectangle extends Shape{
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        var area = this.width * this.height;
        console.log(`Rectangle Area is  : ${area}`);
    }
}

const rectangle = new Rectangle(10, 10);
rectangle.calculateArea();

const circle=new Circle(5);
circle.calculateArea();