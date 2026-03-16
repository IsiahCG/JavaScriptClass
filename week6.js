const myDog = {
    name: "Scooby-Doo",
    species: "Dog",
    gender: "Male",
    breed: "Great Dane",
    show: "Scooby-Doo, Where Are You!",
    role: "Main character and mystery-solving dog",
    creator: "Joe Ruby and Ken Spears",
    mySound: "Ruh-roh! I may be scared, but I always try my best!",
    canTalk: true,

    myGreeting: function () {
        if (this.canTalk) {
            return "Hi! I'm " + this.name + ". I can talk! " + this.mySound;
        } else {
            return "Hi! I'm " + this.name + ". I cannot talk. " + this.mySound;
        }
    }
};
// Display Scooby content
document.write("<h2>Meet " + myDog.name + "!</h2>");
document.write("<p>He is a " + myDog.gender + " " + myDog.breed +
               " from the show <strong>" + myDog.show + "</strong>. He is the " +
               myDog.role + " and was created by " + myDog.creator + ".</p>");
document.write("<p>If Scooby could describe himself, he'd say: \"" +
               myDog.myGreeting() + "\"</p>");


// CONSTRUCTOR FUNCTION
function Dog(name, species, gender, breed, show, role, creator, mySound, canTalk) {
    this.name = name;
    this.species = species;
    this.gender = gender;
    this.breed = breed;
    this.show = show;
    this.role = role;
    this.creator = creator;
    this.mySound = mySound;
    this.canTalk = canTalk;

    this.myGreeting = function () {
        if (this.canTalk) {
            return "Hi! I'm " + this.name + ". I can talk! " + this.mySound;
        } else {
            return "Hi! I'm " + this.name + ". I cannot talk. " + this.mySound;
        }
    };
}
// CREATE myDogConst USING THE CONSTRUCTOR
const myDogConst = new Dog(
    "Scooby-Doo",
    "Dog",
    "Male",
    "Great Dane",
    "Scooby-Doo, Where Are You!",
    "Main character and mystery-solving dog",
    "Joe Ruby and Ken Spears",
    "Ruh-roh! I may be scared, but I always try my best!",
    true
);
document.write("<h3>Greeting from myDogConst:</h3>");
document.write("<p>" + myDogConst.myGreeting() + "</p>");
// TWO FICTIONAL DOGS
let brian = new Dog(
    "Brian Griffin",
    "Dog",
    "Male",
    "White Labrador",
    "Family Guy",
    "Talking family pet",
    "Seth MacFarlane",
    "I enjoy intellectual conversations and martinis.",
    true
);
let santa = new Dog(
    "Santa's Little Helper",
    "Dog",
    "Male",
    "Greyhound",
    "The Simpsons",
    "Family pet of the Simpsons",
    "Matt Groening",
    "Bark! Bark!",
    false
);
// Store them in an object list
let dogList = {
    brian: brian,
    santa: santa
};
//DISPLAY PROPERTIES USING for...in LOOP
console.log("---- Fictional Dogs ----");
for (let dog in dogList) {
    console.log("Dog: " + dogList[dog].name);
    for (let prop in dogList[dog]) {
        if (prop !== "myGreeting") {
            console.log(prop + ": " + dogList[dog][prop]);
        }
    }
    console.log("------------------------");
}
// USER PROMPT TO SELECT A DOG
let userChoice = prompt("Choose a dog: Brian Griffin or Santa's Little Helper");
userChoice = userChoice ? userChoice.toLowerCase() : "";

let selectedDog = null;

if (userChoice.includes("brian")) {
    selectedDog = dogList.brian;
} else if (userChoice.includes("santa")) {
    selectedDog = dogList.santa;
}
let output = document.getElementById("dogInfo");

if (selectedDog) {
    output.innerHTML =
        "<h3>You selected: " + selectedDog.name + "</h3>" +
        "<p>Breed: " + selectedDog.breed + "</p>" +
        "<p>Show: " + selectedDog.show + "</p>" +
        "<p>Role: " + selectedDog.role + "</p>" +
        "<p>Creator: " + selectedDog.creator + "</p>" +
        "<p>" + selectedDog.myGreeting() + "</p>";
} else {
    output.innerHTML =
        "<p style='color:red;'>Error: That dog is not in the list.</p>";
}