// JavaScript Program
let Fname = prompt("Enter your first name:");
// Display a welcome message using the user's first name
alert("Welcome, " + Fname + "!");
// Define the value of pi
const piValue = 3.1415926;
// Prompt the user to enter their favorite number
let myFavNum = prompt("Enter your favorite number:");
// Convert the input to a number
myFavNum = Number(myFavNum);
// Calculate the area of a circle using A = πr²
let myArea = piValue * myFavNum * myFavNum;
// Display the results to the user
document.write("<p>Hello " + Fname + ", you entered " + myFavNum + " as your favorite number.</p>");
document.write("<p>If that was the radius of a circle, then the area of that circle would be " + myArea + ".</p>");
document.write("<p>The value of pi is " + piValue + ".</p>");
