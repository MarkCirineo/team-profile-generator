// require
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const createCard = require("./createhtml");

const decideNextQuestions = [
    {
        type: "list",
        message: "Which type of employee would you live to create?",
        name: "option",
        choices: ["Engineer", "Intern", "None, I'm finished"]
    }
]

const decideNext = () => {
    inquirer
        .prompt(decideNextQuestions)
            .then((data) => {
                if (data.option === "Engineer") {
                    createEngineer();
                } else if (data.option === "Intern"){
                    createIntern();
                } else {
                    console.log("Creating index.html")
                }
            })
}

const managerQuestions = [
    {
        type: "input",
        message: "Enter the manager's name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the manager's ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the manager's email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the manager's office number:",
        name: "officeNumber"
    },
]

const createManager = () => {
    inquirer
        .prompt(managerQuestions)
            .then((data) => {
                let name = data.name;
                name = new Manager(data.name, data.id, data.email, data.officeNumber); 
                createCard(name);
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
                let name = data.name;
                name = new Engineer(data.name, data.id, data.email, data.github); 
                createCard(name);
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
                let name = data.name;
                name = new Intern(data.name, data.id, data.email, data.school); 
                createCard(name);
                decideNext();
            })
}

const init = () => {
    createManager();
}

init();



