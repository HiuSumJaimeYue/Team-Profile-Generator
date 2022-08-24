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
    // If there's no 'members' array property, create one
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
        }, {
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
            message: 'What is the email of the employee?',
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
            positionQuestion(employeeData, portfolioData);
            return portfolioData;
            // this.createHTML();
        });
}

const positionQuestion = (employeeData, data) => {
    if (employeeData.role === 'Engineer') {
        //create here
        inquirer
            .prompt({
                type: 'input',
                name: 'githubUsername',
                message: 'What is the Github username of the Engineer?',
                validate: githubUsernameInput => {
                    if (githubUsernameInput) {
                        return true;
                    } else {
                        console.log('Please enter a Github username!');
                        return false;
                    }
                }
            })
            .then(({ githubUsername }) => {
                employeeData.github = githubUsername;
                let engineer = new Engineer(employeeData.name,
                    employeeData.id,employeeData.email,employeeData.github);

                console.log(engineer);

                data.members.push(engineer);
                checkAddEmployee(data);
            });
    } else if (employeeData.role === 'Intern') {
        //create here
        inquirer
            .prompt({
                type: 'input',
                name: 'school',
                message: 'What school is the Intern in?',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter a school name!');
                        return false;
                    }
                }
            })
            .then(({ school }) => {
                employeeData.school = school;
                let intern = new Intern(employeeData.name,
                    employeeData.id,employeeData.email,employeeData.school);

                console.log(intern);
                data.members.push(intern);
                checkAddEmployee(data);
            });
    }
}

const checkAddEmployee = (data) => {
    inquirer
        .prompt({
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }).then(({ confirmAddEmployee }) => {
            if (confirmAddEmployee) {
                return createEmployee(data);
            } else {
                console.log(data);
                return data;
            }
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
        }, {
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
            message: 'What is the email of the the team manager?',
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
            message: 'What is the office number of the the team manager?',
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
            let manager = new Manager(managerData.name,
                managerData.id,managerData.email,managerData.officeNum);

            teamData.manager = manager;
            console.log(manager);
            
            // this.employee = new Manager(name, email);
            console.log(teamData);
            // console.log(this.employee);
            createEmployee(teamData);
            // this.createHTML();

        });
}

createTeam();



