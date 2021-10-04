class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        if (!this.name.trim().length) {
            throw new Error("Please enter a name")
        }
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.constructor.name;
    }
}

module.exports = Employee;