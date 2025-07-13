// Director Interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
};

// Teacher Interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

// Director Class
class Director implements DirectorInterface {
    getRole(): string { return "Director";}
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
};

// Teacher class

class Teacher implements TeacherInterface {
    getRole(): string { return "Teacher";}
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
};

// Create an employee function
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary <500) {
        return new Teacher();
    }
    return new Director();
}

//isDirector function
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// execute work function

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
}

//string literal
type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math" ) {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    }
;}

console.log(createEmployee(200).getRole());
console.log(createEmployee(1000).getRole());
console.log(createEmployee("$500").getRole());
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
console.log(teachClass("Math"));
console.log(teachClass("History"));