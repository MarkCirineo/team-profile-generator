const Engineer = require("../lib/engineer")

describe("Engineer", () => {
    //TODO: describe initialization: constructor
    describe("Initialization", () => {
        it("should create a class of Engineer that extends the Employee class with a name, id, email and office number", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const github = "https://www.github.com/"
            // act 
            const engineer = new Engineer(name, id, email, github);
            // assert
            expect(engineer.name).toBe("John Doe");
            expect(engineer.id).toBe(5);
            expect(engineer.email).toBe("test@test.com");
            expect(engineer.github).toBe("https://www.github.com/");
        });
    });
    //TODO: describe getName()
    describe("getName", () => {
        it("should return the name of the engineer", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const github = "https://www.github.com/"
            const engineer = new Engineer(name, id, email, github);
            // act
            const engineerName = engineer.getName();
            // assert
            expect(engineerName).toBe(name);
        });
        it("should return an error is there is no name entered", () => {
            // arrange
            const name = "";
            const id = 5;
            const email = "test@test.com";
            const github = "https://www.github.com/"
            const engineer = new Engineer(name, id, email, github);
            const err = new Error("Please enter a name");
            // act
            const cb = () => engineer.getName();
            // assert
            expect(cb).toThrowError(err);
        });
    });
    //TODO: describe getId()
    describe("getId", () => {
        it("should return the id of the engineer", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const github = "https://www.github.com/"
            const engineer = new Engineer(name, id, email, github);
            // act
            const engineerId = engineer.getId();
            // assert
            expect(engineerId).toBe(id);
        });
    });
    //TODO: describe getEmail()
    describe("getEmail", () => {
        it("should return the email of the engineer", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const github = "https://www.github.com/"
            const engineer = new Engineer(name, id, email, github);
            // act
            const engineerEmail = engineer.getEmail();
            // assert
            expect(engineerEmail).toBe(email);
        });
        it("should return an error is there is no email entered", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "";
            const github = "https://www.github.com/"
            const engineer = new Engineer(name, id, email, github);
            const err = new Error("Please enter an email");
            // act
            const cb = () => engineer.getEmail();
            // assert
            expect(cb).toThrowError(err);
        });
        it("should return an error is there is no email entered", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test";
            const github = "https://www.github.com/"
            const engineer = new Engineer(name, id, email, github);
            const err = new Error("Please enter a valid email address");
            // act
            const cb = () => engineer.getEmail();
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
            const github = "https://www.github.com/"
            const engineer = new Engineer(name, id, email, github);
            // act
            const engineerRole = engineer.getRole();
            // assert
            expect(engineerRole).toBe("Engineer");
        });
    });
    describe("getGithub", () => {
        it("should return the github of the engineer", () => {
            // arrange
            const name = "John Doe";
            const id = 5;
            const email = "test@test.com";
            const github = "https://www.github.com/"
            const engineer = new Engineer(name, id, email, github);
            // act
            const engineerGithub = engineer.getGithub();
            // assert
            expect(engineerGithub).toBe(github);
        });
    });
});
