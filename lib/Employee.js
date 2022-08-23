companyId = 0;

class Employee {
    constructor(name = '', email = '') {
        this.name = name;
        this.id = companyId;
        this.email = email;

        companyId++;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
    
}

module.exports = Employee;