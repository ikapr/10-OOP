// Base class representing a geometric shape
class Shape {
  constructor() {
    this.color = "";
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Subclass representing a circle, extending the Shape class
class Circle extends Shape {
  // Method to render the circle shape with a specified color
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Subclass representing a triangle, extending the Shape class
class Triangle extends Shape {
  // Method to render the triangle shape with a specified color
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Subclass representing a square, extending the Shape class
class Square extends Shape {
  // Method to render the square shape with a specified color
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}

// Exporting the Circle, Triangle, and Square classes
module.exports = { Circle, Triangle, Square };
