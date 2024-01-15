const { Square, Triangle, Circle } = require("./shapes");

// Testing for the Circle class
describe("Circle", () => {
  // Test rendering with a default color (green)
  test("renders a green circle", () => {
    const expected = '<circle cx="150" cy="100" r="80" fill="green" />';
    const actual = new Circle().render();
    expect(actual).toEqual(expected);
  });

  // Test rendering with a custom color (blue)
  test("renders a blue circle", () => {
    const expected = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const actual = new Circle().setColor("blue").render();
    expect(actual).toEqual(expected);
  });
});

// Testing for the Triangle class
describe("Triangle", () => {
  // Test rendering with a default color (bisque)
  test("renders a bisque triangle", () => {
    const expected = '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const actual = new Triangle().render();
    expect(actual).toEqual(expected);
  });

  // Test rendering with a custom color (purple)
  test("renders a purple triangle", () => {
    const expected = '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
    const actual = new Triangle().setColor("purple").render();
    expect(actual).toEqual(expected);
  });
});

// Testing for the Square class
describe("Square", () => {
  // Test rendering with a default color (dodgerblue)
  test("renders a dodgerblue square", () => {
    const expected = '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const actual = new Square().render();
    expect(actual).toEqual(expected);
  });

  // Test rendering with a custom color (red)
  test("renders a red square", () => {
    const expected = '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const actual = new Square().setColor("red").render();
    expect(actual).toEqual(expected);
  });
});
