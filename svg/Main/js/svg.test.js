const SVG = require("./svg");
const { Square } = require("./shapes");

// Helper function to make an SVG tag
function makeSvg(content) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
}

// Test for drawing a basic SVG element
test("draws a simple SVG", () => {
  const expectedSvg = makeSvg("");
  const svg = new SVG();
  expect(svg.render()).toEqual(expectedSvg);
});

// Test for adding a text element
test("adds a text to the drawing", () => {
  const expectedSvg = makeSvg('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text>');
  const svg = new SVG();
  svg.setText("A", "white");
  expect(svg.render()).toEqual(expectedSvg);
});

// Test for setting text and color
test("writes text with a color", () => {
  const expectedSvg = makeSvg('<text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text>');
  const svg = new SVG();
  svg.setText("SVG", "#333");
  expect(svg.render()).toEqual(expectedSvg);
});

// Test for handling too long text
test("throws an error if text is too long", () => {
  const svg = new SVG();
  expect(() => svg.setText("HELLO", "#333")).toThrowError("Text must not exceed 3 characters.");
});

// Test for adding a shape
test("includes a shape in the drawing", () => {
  const expectedSvg = makeSvg(
    '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text>'
  );
  const svg = new SVG();
  svg.setText("SVG", "#333");
  const square = new Square();
  square.setColor("dodgerblue");
  svg.setShape(square);
  expect(svg.render()).toEqual(expectedSvg);
});
