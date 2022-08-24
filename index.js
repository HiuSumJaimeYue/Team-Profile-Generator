const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function createEmployee() {
    inquirer
    .prompt([{
        type: 'text',
        name: 'name',
        message: 'What is the name of the employee?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the employee? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    }])
    .then(employeeData => {
        console.log(employeeData);
        // this.employee = new Manager(name, email);

        // console.log(this.employee);
        // this.createHTML();

    });
}

createEmployee();



