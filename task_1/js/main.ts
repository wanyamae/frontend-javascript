interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any; // Index signature for additional properties
};

interface Directors extends Teacher {
    numberOfReports: number;
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
};

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
};
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

const teacher3: Teacher = {
    firstName: 'Otieno',
    fullTimeEmployee: false,
    lastName: 'Njoroge',
    location: 'Nairobi',
    contract: false,
};

console.log(teacher3);


const director1: Directors = {
    firstName: 'Mongulu',
    lastName: 'Mongala',
    fullTimeEmployee: true,
    location: 'Wakanda',
    numberOfReports: 10,
}
console.log(director1);

console.log(printTeacher("John", "Doe"));

class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}
    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
};

const student = new StudentClass("Jane", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());

