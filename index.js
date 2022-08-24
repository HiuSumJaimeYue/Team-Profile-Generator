const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const createEmployee = (teamData = []) => {
    console.log(teamData);
    console.log(`
    ====================
    Add another Employee
    ====================
    `);
    // If there's no 'members' array property, create one
    if (!teamData.members) {
        teamData.members = [];
    }

    return inquirer
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
        }, {
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
            },
            when: (answers) => answers.role === 'Engineer'
        }, {
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
            },
            when: (answers) => answers.role === 'Intern'
        }, {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }])
        .then(employeeData => {
            if(employeeData.role === 'Engineer'){
                let engineer = new Engineer(employeeData.name,
                    employeeData.id, employeeData.email, employeeData.githubUsername);

                teamData.members.push(engineer);
            }
            else if (employeeData.role === 'Intern'){
                let intern = new Intern(employeeData.name,
                    employeeData.id, employeeData.email, employeeData.school);

                teamData.members.push(intern);
            }
            
            if (employeeData.confirmAddEmployee) {
                return createEmployee(teamData);
            } else {
                console.log(teamData);
                // console.log(generatePage(teamData));
                writeFile(generatePage(teamData));
                copyFile();
                return teamData;
            }
        });
}

const createTeam = (teamData = []) => {
    console.log(`
    ========================
    Team Manager Information
    ========================
    `);

    return inquirer
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
                managerData.id, managerData.email, managerData.officeNum);
            
            console.log(manager);
            teamData.manager = manager;
            console.log(teamData);
            createEmployee(teamData);

        });
}

createTeam();
    // .then(teamData => {
    //     console.log(teamData);
    //     return generatePage(teamData);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // });




