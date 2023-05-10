/* 
* This is the main Javascript file for ScheduPaper. This file stores the app's algorithm and displays
* calculated information. 
* Dan-Ha Le, Ananya Sayani, Zaina Saleem, Miriam Rairick
*/

// Global variables:
var myEssay = newArray(7);
var error = false;
var changed = false;

// This function returns a list of sections and the time needed to complete them.
function checkBoxSection(hours) {

    let count = 0
    // A list of variables correspond to the checkboxes
    // var can be used globally, let is only scoped within this curly bracket

    // Content of myEssay = [intro, litreview, case, analysis, methodology, conclusion, abstract]
    const intro = document.querySelector('#section2');
    const litreview = document.querySelector('#section3');
    const cases = document.querySelector('#section4');
    const analysis = document.querySelector('#section5');
    const methodology = document.querySelector('#section6');
    const conclusion = document.querySelector('#section7');
    const abstract = document.querySelector('#section1');
    
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
       error = true;
       return document.getElementById("error").innerHTML = "Please select at least one checkbox";

    }

    // Creating the myEssay array
    for (let i = 0; i < 7; i++) {
        if (typeof array[i] == 'undefined') array[i] = 0;
        else array[i] = hours/count;
    }
    
    // check for undefined: typeof array[index] == 'undefined'
}





// This function creates a schedule when the user clicks on the button
function makeSchedule() {
    // Possibility: Maybe when the user click on the link we could have the results be displayed on a different HTML page?
    // Getting information from the form

    document.getElementById("error").innerHTML = "Please select at least one checkbox";
    
    let paperName = document.querySelector("#paperName");

    let paperLength = document.querySelector("#paperLength");
    let paperDays = document.querySelector("#paperDays");
    let paperDailyHours = document.querySelector("#paperDailyHours");
    let paperPace = document.querySelector("#paperPace");


    let totalHours = paperDailyHours.value * paperDays.value;
    let totalHoursRequired = Math.round(paperLength.value / paperPace.value);

    // Throw an error if the user requires more time to finish the essay than the reported total hours available.
    if (totalHoursRequired > totalHours) return document.getElementById("error").innerHTML = "Your essay can not be completed before its deadline";

    // Prepare myEssay;
    checkBoxSection(totalHours);
    if (error == true) return;
        // If there was an error, stop operations.
    //myEssay array prepared!

    // Choosing algorithm:
    let paperAlgorithm = document.getElementsByName('algo');
    for (let i = 0; i < paperAlgorithm.length; i++) {
        if (paperAlgorithm[i].checked) {
            paperAlgorithm = paperAlgorithm[i].value;
            break;
        }
    }
    if (Array.isArray(paperAlgorithm) == true) {
        // If the user has not selected any algorithm, then display error message, and stop operations.
        document.getElementById("error").innerHTML = "Please select at least one category"
        return;
    }
    // paperAlgorithm should represent the Algorithm that the user wants to use;

    // Creating the array for schedule:
    const mySchedule = new Array(paperDays.value);
    for (let i=0; i< paperDays.value; i++) {
        mySchedule[i] = paperDailyHours.value;
    }
    // mySchedule should be an array with paperDays index, each of which would have a value of paperDailyHours to represent time available
    
    // Now, call the appropriate algorith:
    if (paperAlgoritm == 'greedy') GreedyAlgorithm(mySchedule, myEssay);
    else document.getElementById("error").innerHTML = "Something went wrong."

    

    // Output information here!
}