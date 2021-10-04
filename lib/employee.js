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
}

module.exports = Employee;