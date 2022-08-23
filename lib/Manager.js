const Employee = require('../lib/Employee');
let officeNumber = 1;

class Manager extends Employee {
    constructor(name = '', email = '') {
        super(name, email);
        this.officeNumber = officeNumber;
        officeNumber++;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;