/* 
* This is the main Javascript file for ScheduPaper. This file stores the app's algorithm and displays
* calculated information. 
* Dan-Ha Le, Ananya Sayani, Zaina Saleem, Miriam Rairick
*/

// Global variables:
var myEssay = newArray(6);
var error = false;

// This function returns a list of sections and the time needed to complete them.
function checkBoxSection(hours) {
    document.getElementById("error").innerHTML = "Test"
    let count = 0
    // A list of variables correspond to the checkboxes
    // var can be used globally, let is only scoped within this curly bracket

    // Content of myEssay = [intro, litreview, case, analysis, methodology, conclusion]
    var intro = document.getElementById("section2");
    var litreview = document.getElementById("section3");
    var cases = document.getElementById("section4");
    var analysis = document.getElementById("section5");
    var methodology = document.getElementById("section6");
    var conclusion = document.getElementById("section7");
    var abstract = document.getElementById("section1")

    // Preliminarily check which sections have selected, returns an error if none.
    if (intro.checked == true) {
        myEssay[0] = 0;
        count++;
    }
    if (litreview.checked == true) {
        myEssay[1] = 0;
        count++;
    }
    if (cases.checked == true) {
        myEssay[2] = 0;
        count++;
    }
    if (analysis.checked == true) {
        myEssay[3] = 0;
        count++;
    }
    if (methodology.checked== true) {
        myEssay[4] = 0;
        count++;
    }
    if (conclusion.checked== true) {
        myEssay[5] = 0;
        count++;
    }
    if (abstract.checked == true) {
        myEssay[6] = 0;
        count++;
    }
    else {
        // returns an error if no sections are picked.

        return error.innerHTML = "Please pick at least one checkbox!"
    }
    

    // check for undefined: typeof array[index] == 'undefined'
}

// This function creates a schedule when the user clicks on the button
function makeSchedule() {
    // Possibility: Maybe when the user click on the link we could have the results be displayed on a different HTML page?
    document.getElementByID("error") = "Test";
    // Getting information from the form
    let paperName = document.querySelector("#paperName");

    let paperLength = document.querySelector("#paperLength");
    let paperDays = document.querySelector("#paperDays");
    let paperDailyHours = document.querySelector("#paperDailyHours");
    let paperPace = document.querySelector("#paperPace");


    let totalHours = paperDailyHours.value * paperDays.value;
    let totalHoursRequired = Math.round(paperLength.value / paperPace.value);

    // Prepare myEssay;
    checkboxSection(totalHours);
        // If there was an error, stop operations.
    if (error == true) return;



    // Creating the array schedule:
    let schedule = new Array();
    for (let i = 0; i < paperDays.value; i++) {
        schedule[i] = paperDailyHours.value;
    }



    // Output information here!
}