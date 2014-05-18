"use strict";
var score = 0;    //score starts at zero
var page = 0;     // app starts before page 1 of the quiz
var access;   //access needs to be 1 to go to the next question page
var header = document.getElementById("header"); header.innerHTML = "<h1> READY? </h1>";   //header div
if (page === 0) { header.firstChild.style.padding = "30px"; }
var list = document.getElementById("list");       // div that shows the answers
list.innerHTML = "<li style='visibility: hidden;'></li><li style='visibility: hidden;'></li><li style='visibility: hidden;'></li><li style='visibility: hidden;'></li><li style='visibility: hidden;'></li>";
var next = document.getElementById("nextButton"); //store nextButton div
var quiz = [{
    Q: "Which guitarist was nominated 15 times for a Grammy Award, yet received none?", A1: "Joe Satriani",
    A2: "Steve Vai", A3: "Eddie Van Halen", A4: "Eric Clapton", A5: "Jimi Hendrix"
},
    {
        Q: "What did the programming language Mumps (Multi-User Multi-Programming System) originally stand for?",
        A1: "Multi-User Multi-Programming System", A2: "Multi-User Massachusetts Prototype System",
        A3: "Massachusetts General Hospital Utility Multi-Programming System", A4: "Massachusetts Utility Multi-Purpose System",
        A5: "Maintenance Utility Multi-Programming System"
    },
    {
        Q: "What is the approximate pH of baking soda?",
        A1: "8", A2: "8.5", A3: "6.5", A4: "9", A5: "7.5"
    },
    {
        Q: "What type of pool shot is hitting the cue ball into an object ball which hits the cushion and bounces off into a pocket?",
        A1: "Carom Shot", A2: "Break Shot", A3: "Push Shot", A4: "Jump Shot", A5: "Bank Shot"
    },
    {
        Q: "What is the fewest total amount of moves possible to checkmate your opponent in Chess?", A1: "3", A2: "4",
        A3: "2", A4: "1", A5: "5"
    }];   //array of questions and answers
var changePage = function () {
    if (page === 0) {
        access = 1;
    };
    if (access === 0 && page < 6) { alert("Oops, choose an answer first."); };
    if (access === 1) {
        if (page < quiz.length) {
            var page_ = page + 1;        //sets question number to index 1
            list.innerHTML = "";         //clears list each time function runs
            header.innerHTML = "";       //clears header text when function runs
            next.innerHTML = "<h2> NEXT </h2>";    //creates text "NEXT" on lower div
            var Q = document.createElement("h1");     //creates h1 in header
            var question = document.createElement("p");   //  creates p in header
            Q.innerHTML = "Question " + page_;
            question.innerHTML = quiz[page].Q;
            header.appendChild(Q);
            header.appendChild(question);
            var item = document.createElement("li");       //create answer list items
            var item2 = document.createElement("li");
            var item3 = document.createElement("li");
            var item4 = document.createElement("li");
            var item5 = document.createElement("li");
            var R1 = Math.floor((Math.random() * 5) + 1); // create random numbers
            var R2 = Math.floor((Math.random() * 5) + 1);
            var R3 = Math.floor((Math.random() * 5) + 1);
            var R4 = Math.floor((Math.random() * 5) + 1);
            var R5 = Math.floor((Math.random() * 5) + 1);
            while (R2 === R1) {
                R2 = Math.floor((Math.random() * 5) + 1);    //make random numbers different
            }
            while (R3 === R1 || R3 === R2) {
                R3 = Math.floor((Math.random() * 5) + 1);
            }
            while (R4 === R3 || R4 === R2 || R4 === R1) {
                R4 = Math.floor((Math.random() * 5) + 1);
            }
            while (R5 === R4 || R5 === R3 || R5 === R2 || R5 === R1) {
                R5 = Math.floor((Math.random() * 5) + 1);
            }
            if (R1 === 1) { item.innerHTML = quiz[page].A1 }   //sets list item to different object property based on random number
            if (R1 === 2) { item.innerHTML = quiz[page].A2 }
            if (R1 === 3) { item.innerHTML = quiz[page].A3 }
            if (R1 === 4) { item.innerHTML = quiz[page].A4 }
            if (R1 === 5) { item.innerHTML = quiz[page].A5 }
            if (R2 === 1) { item2.innerHTML = quiz[page].A1 }
            if (R2 === 2) { item2.innerHTML = quiz[page].A2 }
            if (R2 === 3) { item2.innerHTML = quiz[page].A3 }
            if (R2 === 4) { item2.innerHTML = quiz[page].A4 }
            if (R2 === 5) { item2.innerHTML = quiz[page].A5 }
            if (R3 === 1) { item3.innerHTML = quiz[page].A1 }
            if (R3 === 2) { item3.innerHTML = quiz[page].A2 }
            if (R3 === 3) { item3.innerHTML = quiz[page].A3 }
            if (R3 === 4) { item3.innerHTML = quiz[page].A4 }
            if (R3 === 5) { item3.innerHTML = quiz[page].A5 }
            if (R4 === 1) { item4.innerHTML = quiz[page].A1 }
            if (R4 === 2) { item4.innerHTML = quiz[page].A2 }
            if (R4 === 3) { item4.innerHTML = quiz[page].A3 }
            if (R4 === 4) { item4.innerHTML = quiz[page].A4 }
            if (R4 === 5) { item4.innerHTML = quiz[page].A5 }
            if (R5 === 1) { item5.innerHTML = quiz[page].A1 }
            if (R5 === 2) { item5.innerHTML = quiz[page].A2 }
            if (R5 === 3) { item5.innerHTML = quiz[page].A3 }
            if (R5 === 4) { item5.innerHTML = quiz[page].A4 }
            if (R5 === 5) { item5.innerHTML = quiz[page].A5 }
            item.setAttribute("onClick", "checkAnswer();");
            item2.setAttribute("onClick", "checkAnswer();");
            item3.setAttribute("onClick", "checkAnswer();");
            item4.setAttribute("onClick", "checkAnswer();");
            item5.setAttribute("onClick", "checkAnswer();");
            list.appendChild(item);             //appends list items to list
            list.appendChild(item2);
            list.appendChild(item3);
            list.appendChild(item4);
            list.appendChild(item5);
            document.querySelector("progress").removeAttribute("style");
        }
        page++;  //increments page when "next" button is clicked
        if (page === 2) { document.querySelector("progress").value = "1"; }
        if (page === 3) { document.querySelector("progress").value = "2"; }
        if (page === 4) { document.querySelector("progress").value = "3"; }
        if (page === 5) { next.innerHTML = "<h2> FINISH </h2>"; document.querySelector("progress").value = "4"; }
        if (page === 6) {
            document.querySelector("progress").value = "5";
            header.innerHTML = "";       //clears header text when function runs
            next.innerHTML = "<h2> FINISHED </h2>";    //creates text "NEXT" on lower div
            var Q = document.createElement("h1");     //creates h1 in header
            Q.innerHTML = "You scored " + score + " out of 5";
            header.appendChild(Q);
            Q.style.padding = "30px";
            list.innerHTML = "<li style='visibility: hidden;'></li><li style='visibility: hidden;'></li><li style='visibility: hidden;'></li><li style='visibility: hidden;'></li><li style='visibility: hidden;'></li>";
        }
    }
    access = 0;
};
var checkAnswer = function () {
    if (page === 1) {                  //checks on page 1 the position of the list element to see if it is right or wrong
        if (event.target.innerHTML === quiz[page - 1].A1) {
            alert("You chose the correct answer!");
            score++;
            voidAnswer();
        }
        else { alert("Incorrect answer, the correct answer is " + quiz[page - 1].A1); voidAnswer(); }
    }
    else if (page === 2) {          //checks page 2 for the right anwswer and alerts it
        if (event.target.innerHTML === quiz[page - 1].A3) {
            alert("You chose the correct answer!");
            score++;
            voidAnswer();     //removes the onclick function that alerts the answer and sets the score for first choice
        }
        else { alert("Incorrect answer, the correct answer is " + quiz[page - 1].A3); voidAnswer(); }
    }
    else if (page === 3) {
        if (event.target.innerHTML === quiz[page - 1].A4) {
            alert("You chose the correct answer!");
            score++;
            voidAnswer();
        }
        else { alert("Incorrect answer, the correct answer is " + quiz[page - 1].A4); voidAnswer(); }
    }
    else if (page === 4) {
        if (event.target.innerHTML === quiz[page - 1].A5) {
            alert("You chose the correct answer!");
            score++;
            voidAnswer();
        }
        else { alert("Incorrect answer, the correct answer is " + quiz[page - 1].A5); voidAnswer(); }
    }
    else if (page === 5) {
        if (event.target.innerHTML === quiz[page - 1].A2) {
            alert("You chose the correct answer!");
            score++;
            voidAnswer();
        }
        else { alert("Incorrect answer, the correct answer is " + quiz[page - 1].A2); voidAnswer(); }
    }
    access = 1;    //now page can be changed by clicking next button
};
var voidAnswer = function () {    //is run after user chooses first answer
    list.firstChild.removeAttribute("onClick");
    list.childNodes[1].removeAttribute("onClick");
    list.childNodes[2].removeAttribute("onClick");
    list.childNodes[3].removeAttribute("onClick");
    list.childNodes[4].removeAttribute("onClick");
};