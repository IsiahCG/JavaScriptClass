
const myDog = {
    name: "Scooby-Doo",
    species: "Dog",
    gender: "Male",
    breed: "Great Dane",
    show: "Scooby-Doo, Where Are You!",
    role: "Main character and mystery-solving dog",
    creator: "Joe Ruby and Ken Spears",
    mySound: "Ruh-roh! I may be scared, but I always try my best!"
};

// DISPLAY CONTENTS OF OBJECT LITERAL
document.write(
    "<h2>Meet " + myDog.name + "!</h2>" +
    "<p>He is a " + myDog.gender + " " + myDog.breed + " from the show <strong>" +
    myDog.show + "</strong>. He is the " + myDog.role +
    " and was created by " + myDog.creator + ".</p>" +
    "<p>If Scooby could describe himself, he'd say: \"" + myDog.mySound + "\"</p>"
);


// CONSTRUCTOR FUNCTION FOR ANOTHER DOG OBJECT

function Dog(name, species, gender, breed, show, role, creator, mySound) {
    this.name = name;
    this.species = species;
    this.gender = gender;
    this.breed = breed;
    this.show = show;
    this.role = role;
    this.creator = creator;
    this.mySound = mySound;

    this.canTalk = true;

    // Required method
    this.myGreeting = function() {
        return "Hi! I'm " + this.name + ". I am a " + this.breed +
               " from " + this.show + ". " + this.mySound;
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
    "Ruh-roh! I may be scared, but I always try my best!"
);
// CALL THE METHOD AND DISPLAY ITS MESSAGE
document.write("<h3>Greeting from myDogConst:</h3>");
document.write("<p>" + myDogConst.myGreeting() + "</p>");
