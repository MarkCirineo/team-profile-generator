// require
const inquirer = require("inquirer");

// function with prompt for "engineer" or "intern"

const managerQuestions = [
    {
        type: "input",
        message: "Enter the employee's ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the employee's email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the employee's office number:",
        name: "officeNumber"
    },
]

const init = () => {
    inquirer
        .prompt(managerQuestions)
            .then((data) => {
                console.log(data)
            })
}
init();
// if statement in the .then which decides which questions to give (another function with a .prompt) based on previous response



