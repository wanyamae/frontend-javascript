//interface declaration
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
//creating two student objects
const student1: Student = {
    firstName: "Mongulu",
    lastName: "Mongala",
    age: 20,
    location: "Wakanda"
};

const student2: Student = {
    firstName: "T'Challa",
    lastName: "Kingly",
    age: 30,
    location: "Jabari"
};

// creating an array list with the two students
const studentsList: Student[] = [student1, student2];

//creating the table
const table =document.createElement('table');
const tbody = document.createElement('tbody');

//adding students to the table
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);