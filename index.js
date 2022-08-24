const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const createEmployee = (portfolioData = []) => {
    console.log(`
    ====================
    Add another Employee
    ====================
    `);
    // If there's no 'projects' array property, create one
    if (!portfolioData.members) {
        portfolioData.members = [];
    }

    inquirer
        .prompt([{
            type: 'list',
            message: 'Add what role to the team?',
            name: 'role',
            choices: ['Engineer', 'Intern']
        }, {
            type: 'input',
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
        },{
            type: 'input',
            name: 'id',
            message: 'What is the id of the employee?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an employee Id!');
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
        }, {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }])
        .then(employeeData => {
            portfolioData.members.push(employeeData);
            // this.employee = new Manager(name, email);

            // console.log(this.employee);
            if (employeeData.confirmAddEmployee) {
                return createEmployee(portfolioData);
            } else {
                console.log(portfolioData);
                return portfolioData;
            }
            // this.createHTML();

        });
}

const createTeam = (teamData = []) => {
    console.log(`
    ========================
    Team Manager Information
    ========================
    `);

    inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'id',
            message: 'What is the id of the team manager?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an employee Id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the the team manager? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'officeNum',
            message: 'What is the office number of the the team manager? (Required)',
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                } else {
                    console.log('Please enter an office number!');
                    return false;
                }
            }
        }])
        .then(managerData => {
            teamData.manager = managerData;
            // this.employee = new Manager(name, email);
            console.log(teamData);
            // console.log(this.employee);
            createEmployee(teamData);
            // this.createHTML();

        });
}

createTeam();



