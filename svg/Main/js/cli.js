// Import necessary modules
const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

// Define a CLI class for handling user input and generating a logo
class CLI {
  run() {
    // Prompt the user for input
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message: "Enter up to 3 characters for the logo text.",
          // Validate input to ensure it doesn't exceed 3 characters
          validate: (text) => (text.length <= 3 ? true : "Text must not exceed 3 characters."),
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter the text color for the logo.",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Choose a shape for the logo.",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter the color for the selected shape.",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        // Based on user input, create an instance of the selected shape
        let shape;
        switch (shapeType) {
          case "circle":
            shape = new Circle();
            break;
          case "square":
            shape = new Square();
            break;
          default:
            shape = new Triangle();
            break;
        }
        // Set the color for the selected shape
        shape.setColor(shapeColor);

        // Create an SVG instance and set text and shape
        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);

        // Write the SVG content to a file named "logo.svg"
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        // Log success message if logo generation is successful
        console.log("Logo.svg generated successfully.");
      })
      .catch((error) => {
        // Handle errors and log a generic error message
        console.log("Oops! Something went wrong.");
        console.log(error);
      });
  }
}

// Export the CLI class for use in other modules
module.exports = CLI;
