const Employee = require('./Employee');

// intern constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    
    getEd() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;