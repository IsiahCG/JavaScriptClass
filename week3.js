let output = document.getElementById("output");

// For loop 0–10 (odd or even)
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        output.innerHTML += "Count " + i + " is even<br>";
    } else {
        output.innerHTML += "Count " + i + " is odd<br>";
    }
}

output.innerHTML += "<hr>";

// Ask user for number 5–20
let myNum = parseInt(prompt("Enter a number between 5 and 20:"));

// Do While loop
let counter = 1;

do {
    output.innerHTML += "Counter: " + counter + "<br>";
    counter++;
} while (counter <= myNum);

output.innerHTML += "<hr>";

// Store subjects in an array
let subjects = [
    "Accounting",
    "Algebra",
    "Programming",
    "Art",
    "Data Analytics"
];

//  Display using forEach()
output.innerHTML += "<strong>Subjects:</strong><br>";
subjects.forEach(function(subject) {
    output.innerHTML += subject + "<br>";
});
output.innerHTML += "<hr>";
// Display separated by commas (one statement)
output.innerHTML += "<strong>Subjects (comma separated):</strong><br>";
output.innerHTML += subjects.join(", ");