class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        var area = this.width * this.height;
        console.log(`Area is        : ${area}`);
    }
    calculatePerimeter() {
        var perimeter = (this.width * 2) + (this.height * 2);
        console.log(`Perimeter is   : ${perimeter}`);
    }
}

const result = new Rectangle(10, 12);

result.calculateArea();
result.calculatePerimeter();
