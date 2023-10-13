// Array #1
const goodCharacters = ["Harry Potter", "Ron Weasley", "Hermione Granger", "Dobby", "Severus Snape", " Albus Dumbledore", "Sirius Black"];
// Array #2
const badCharacters = ["Voldemort", "Bellatrix Lestrange", "Peter Pettigrew", "Dolores Umbridge"];

// Objects
const harryPotter = {
  name: "Harry Potter",
  house: "Gryffindor",
  halfBlood: "True"
}

const ronWeasley = {
  name: "Ron Weasley",
  house: "Gryffindor",
  halfBlood: "False"
}

const hermioneGranger = {
  name: "Hermione Granger",
  house: "Gryffindor",
  halfBlood: "False"
}

const dobby = {
  name: "Dobby",
  house: "None",
  halfBlood: "False"
}

const severusSnape = {
  name: "Severus Snape",
  house: "Slytherin",
  halfBlood: "True"
}

const albusDumbledore = {
  name: "Albus Dumbledore",
  house: "Gryffindor",
  halfBlood: "True"
}

const siriusBlack = {
  name: " Sirius Black",
  house: "Gryffindor",
  halfBlood: "False"
}

// Array Methods

// push() - Adds item(s) to the end of an array
goodCharacters.push("Neville Longbottom") 
document.getElementById("array-push").innerHTML = goodCharacters;

// pop() - Removes the last item from an array
goodCharacters.pop();
document.getElementById("array-pop").innerHTML = goodCharacters;

// concat() - Merge two arrays together 
const characters = goodCharacters.concat(badCharacters);

