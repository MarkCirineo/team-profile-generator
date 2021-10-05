const Intern = require("../lib/intern")

describe("Intern", () => {
    //TODO: describe initialization: constructor
    describe("Initialization", () => {
        it("should create a class of Intern that extends the Employee class with a name, id, email and office number", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const school = "Test University";
            // act 
            const intern = new Intern(name, id, email, school);
            // assert
            expect(intern.name).toBe("John Doe");
            expect(intern.id).toBe(5);
            expect(intern.email).toBe("test@test.com");
            expect(intern.school).toBe("Test University");
        });
    });
    //TODO: describe getName()
    describe("getName", () => {
        it("should return the name of the intern", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const school = "Test University";
            const intern = new Intern(name, id, email, school);
            // act
            const internName = intern.getName();
            // assert
            expect(internName).toBe(name);
        });
        it("should return an error is there is no name entered", () => {
            // arrange
            const name = "";
            const id = 5;
            const email = "test@test.com";
            const school = "Test University";
            const intern = new Intern(name, id, email, school);
            const err = new Error("Please enter a name");
            // act
            const cb = () => intern.getName();
            // assert
            expect(cb).toThrowError(err);
        });
    });
    //TODO: describe getId()
    describe("getId", () => {
        it("should return the id of the intern", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const school = "Test University";
            const intern = new Intern(name, id, email, school);
            // act
            const internId = intern.getId();
            // assert
            expect(internId).toBe(id);
        });
    });
    //TODO: describe getEmail()
    describe("getEmail", () => {
        it("should return the email of the intern", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const school = "Test University";
            const intern = new Intern(name, id, email, school);
            // act
            const internEmail = intern.getEmail();
            // assert
            expect(internEmail).toBe(email);
        });
        it("should return an error is there is no email entered", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "";
            const school = "Test University";
            const intern = new Intern(name, id, email, school);
            const err = new Error("Please enter an email");
            // act
            const cb = () => intern.getEmail();
            // assert
            expect(cb).toThrowError(err);
        });
        it("should return an error is there is no email entered", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test";
            const school = "Test University";
            const intern = new Intern(name, id, email, school);
            const err = new Error("Please enter a valid email address");
            // act
            const cb = () => intern.getEmail();
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
            const school = "Test University";
            const intern = new Intern(name, id, email, school);
            // act
            const internRole = intern.getRole();
            // assert
            expect(internRole).toBe("Intern");
        });
    });
    describe("getSchool", () => {
        it("should return the github of the intern", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const school = "Test University";
            const intern = new Intern(name, id, email, school);
            // act
            const internSchool = intern.getSchool();
            // assert
            expect(internSchool).toBe(school);
        });
    });
});
