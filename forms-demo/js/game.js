//this file is for code needed for
//input, quiz and truth game

// global variable for first name
// a variable that can be used in all functions
// first name
let fname = "";

//function to get info from intro form
//check input, and produce a sentence
function greet() {
    let greetParagraph = document.getElementById("greet");

    //get the values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    //check the input
    if (fname==="" || lname ==="") {
        alert("First and last name cannot be an empty string!");
        return;
    }
    //age ceck
    if (age ==="" || age < 0) {
        alert("Inavlid age! Your age must be a positive number.")
        return;
    }

    //update output paragraph
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
}

//function to play the trivia game
function trivia1(){
    // get handle to answer paragraph
    let triviaAnswer = document.getElementById("trivia-answer");

    //get handles and values from radio selections
    let chocSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // give the results
    if (chocSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong!";
    }
    else if (tunaSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong!";
    }
    else if (honeySelected){
        triviaAnswer.innerHTML = fname + ", bravo! You are right!";
    }
    else {
        triviaAnswer.innerHTML = "Uh oh. Something went wrong!!!"
    }
}

//function to play the two truth and a lie game
function truth(){
    let gameAnswer = document.getElementById("game-answer")

    let chinaSelected = document.getElementById("china").checked;
    let publicSelected = document.getElementById("public").checked;
    let gradeSelected = document.getElementById("grade").checked;

    if (chinaSelected) {
        gameAnswer.innerHTML = fname + ", you are wrong! I attended two and a half years of elementary school in China before moving to the U.S."
    } else if (publicSelected) {
        gameAnswer.innerHTML = fname + ", you are wrong! I have always attended private schools in the U.S. because of my status as a international student."
    } else if (gradeSelected) {
        gameAnswer.innerHTML = fname + ", bravo! You are correct! In fact, I started school one year earlier than normal, but got pulled back a grade when I came to the U.S."
    } else {
        gameAnswer.innerHTML = "Uh oh, something went wrong!"
    }
}