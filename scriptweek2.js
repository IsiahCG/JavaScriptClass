// Ask the user for their first name and store it in Fname
let Fname = prompt("Please enter your first name:");

// Display a welcome message using the name they entered
alert("Welcome, " + Fname + "!");

// Create a constant to store Pi to 7 significant digits
const piValue = 3.1415926;

// Ask the user for their favorite number and store it in myFavNum
let myFavNum = prompt("Enter your favorite number:");

// Convert the input to a number (prompt returns a string)
myFavNum = Number(myFavNum);

// Calculate the area of a circle using the user's number as the radius
// Formula: A = πr^2
let myArea = piValue * (myFavNum ** 2);

// Display all variable values on the webpage
document.write("<h2>JavaScript Variable Demonstration</h2>");
document.write("Hello " + Fname + ", you entered <strong>" + myFavNum + "</strong> as your favorite number.<br>");
document.write("The value of Pi used was <strong>" + piValue + "</strong>.<br>");
document.write("If your favorite number was the radius of a circle, the area would be <strong>" + myArea + "</strong>.<br>");
