const Employee = require('../lib/Employee');
let officeNumber = 1;

class Manager extends Employee {
    constructor(name = '', id, email = '', officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;