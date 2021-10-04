const Manager = require("../lib/manager")

describe("Manager", () => {
    //TODO: describe initialization: constructor
    describe("Initialization", () => {
        it("should create a class of Manager that extends the Employee class with a name, id, email and office number", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const officeNumber = 123;
            // act 
            const manager = new Manager(name, id, email, officeNumber);
            // assert
            expect(manager.name).toBe("John Doe");
            expect(manager.id).toBe(5);
            expect(manager.email).toBe("test@test.com");
            expect(manager.officeNumber).toBe(123);
        });
    });
    //TODO: describe getName()
    describe("getName", () => {
        it("should return the name of the manager", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const officeNumber = 123;
            const manager = new Manager(name, id, email, officeNumber);
            // act
            const managerName = manager.getName();
            // assert
            expect(managerName).toBe(name);
        });
        it("should return an error is there is no name entered", () => {
            // arrange
            const name = "";
            const id = 5;
            const email = "test@test.com";
            const officeNumber = 123;
            const manager = new Manager(name, id, email, officeNumber);
            const err = new Error("Please enter a name");
            // act
            const cb = () => manager.getName();
            // assert
            expect(cb).toThrowError(err);
        });
    });
    //TODO: describe getId()
    describe("getId", () => {
        it("should return the id of the manager", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const officeNumber = 123;
            const manager = new Manager(name, id, email, officeNumber);
            // act
            const managerId = manager.getId();
            // assert
            expect(managerId).toBe(id);
        });
    });
    //TODO: describe getEmail()
    describe("getEmail", () => {
        it("should return the email of the manager", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const officeNumber = 123;
            const manager = new Manager(name, id, email, officeNumber);
            // act
            const managerEmail = manager.getEmail();
            // assert
            expect(managerEmail).toBe(email);
        });
        it("should return an error is there is no email entered", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "";
            const officeNumber = 123;
            const manager = new Manager(name, id, email, officeNumber);
            const err = new Error("Please enter an email");
            // act
            const cb = () => manager.getEmail();
            // assert
            expect(cb).toThrowError(err);
        });
        it("should return an error is there is no email entered", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test";
            const officeNumber = 123;
            const manager = new Manager(name, id, email, officeNumber);
            const err = new Error("Please enter a valid email address");
            // act
            const cb = () => manager.getEmail();
            // assert
            expect(cb).toThrowError(err);
        });
    });
    //TODO: describe getRole()
    describe("getRole", () => {
        it("should return the role of the employee", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const officeNumber = 123;
            const manager = new Manager(name, id, email, officeNumber);
            // act
            const managerRole = manager.getRole();
            // assert
            expect(managerRole).toBe("Manager");
        });
    });
});
