// require
const inquirer = require("inquirer");

// function with prompt for "engineer" or "intern"

const decideNextQuestions = [
    {
        type: "list",
        message: "'Would you like to create any more employees'",
        name: "option",
        choices: ["Yes, create an Engineer", "Yes, create an Intern", "No, I'm finished"]
    }
]

const decideNext = () => {
    inquirer
        .prompt(decideNextQuestions)
            .then((data) => {
                if (data.option === "Yes, create an Engineer") {
                    console.log(data.option)
                } else if (data.option === "Yes, create an Intern") {
                    console.log(data.option)
                } else {
                    console.log(data.option)
                }
            })
}

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
                decideNext();
            })
}
init();
// if statement in the .then which decides which questions to give (another function with a .prompt) based on previous response



