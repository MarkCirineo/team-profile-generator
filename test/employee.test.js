const Employee = require("../lib/employee")

describe("Employee", () => {
    //TODO: describe initialization: constructor
    describe("Initialization", () => {
        it("should create a class with a name, id and email", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            // act 
            const employee = new Employee(name, id, email);
            // assert
            expect(employee.name).toBe("John Doe");
            expect(employee.id).toBe(5);
            expect(employee.email).toBe("test@test.com");
        });
    });
    //TODO: describe getName()
    describe("getName", () => {
        it("should return the name of the employee", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const employee = new Employee(name, id, email);
            // act
            const employeeName = employee.getName();
            // assert
            expect(employeeName).toBe(name);
        });
        it("should return an error is there is no name entered", () => {
            // arrange
            const name = "";
            const id = 5;
            const email = "test@test.com";
            const employee = new Employee(name, id, email);
            const err = new Error("Please enter a name");
            // act
            const cb = () => employee.getName();
            // assert
            expect(cb).toThrowError(err);
        });
    });
    //TODO: describe getId()
    describe("getId", () => {
    
    });
    //TODO: describe getEmail()
    describe("getEmail", () => {

    });
    //TODO: describe getRole()
    describe("getRole", () => {

    });
});
