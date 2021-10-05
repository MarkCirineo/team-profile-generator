// require
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const decideNextQuestions = [
    {
        type: "list",
        message: "Which type of employee would you live to create?",
        name: "option",
        choices: ["Manager", "Engineer", "Intern", "None, I'm finished"]
    }
]

const decideNext = () => {
    inquirer
        .prompt(decideNextQuestions)
            .then((data) => {
                if (data.option === "Manager") {
                    createManager();
                } else if (data.option === "Engineer") {
                    createEngineer();
                } else if (data.option === "Intern"){
                    createIntern();
                } else {
                    return;
                }
            })
}

const managerQuestions = [
    {
        type: "input",
        message: "Enter the employee's name:",
        name: "name"
    },
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

const createManager = () => {
    inquirer
        .prompt(managerQuestions)
            .then((data) => {
                console.log(data)
                decideNext();
            })
}

const engineerQuestions = [
    {
        type: "input",
        message: "Enter the employee's name:",
        name: "name"
    },
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
        message: "Enter the employee's github username:",
        name: "github"
    },
]

const createEngineer = () => {
    inquirer
        .prompt(engineerQuestions)
            .then((data) => {
                console.log(data)
                decideNext();
            })
}

const internQuestions = [
    {
        type: "input",
        message: "Enter the employee's name:",
        name: "name"
    },
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
        message: "Enter the employee's school:",
        name: "school"
    },
]

const createIntern = () => {
    inquirer
        .prompt(internQuestions)
            .then((data) => {
                console.log(data)
                decideNext();
            })
}

const init = () => {
    decideNext();
}

init();



