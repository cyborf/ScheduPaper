/* 
* This is the main Javascript file for ScheduPaper. This file stores the app's algorithm and displays
* calculated information. 
* Dan-Ha Le, Ananya Sayani, Zaina Saleem, Miriam Rairick
*/

// Global variables:
var myEssay = newArray(7);
var error = false;
var count = 0;

function add(){
    return count = count +1;
}

// This function returns a list of sections and the time needed to complete them.
function checkBoxSection(hours) {
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
    if (intro.checked) {
        myEssay[0] = 0;
        add();
    }
    if (litreview.checked == true) {
        myEssay[1] = 0;
        add();
    }
    if (cases.checked == true) {
        myEssay[2] = 0;
        add();
    }
    if (analysis.checked == true) {
        myEssay[3] = 0;
        add();
    }
    if (methodology.checked== true) {
        myEssay[4] = 0;
        add();
    }
    if (conclusion.checked== true) {
        myEssay[5] = 0;
        add();
    }
    if (abstract.checked == true) {
        myEssay[6] = 0;
        add();
    }
    if (count !== 0) return document.getElementById('errors').innerHTML= "Please check at least one category";

    document.write("Landed");



    // Creating the myEssay array
    for (let i = 0; i < 7; i++) {
        if (typeof myEssay[i] == 'undefined') myEssay[i] = 0;
        else myEssay[i] = hours/count;
        document.getElementById('test').innerHTML= hours/count;
    }
    count = 0;
    // check for undefined: typeof array[index] == 'undefined'
}

function GreedyAlgorithm(schedule, essay){
    document.getElementById('test').innerHTML= "Landed";
    // schedule is an array of days length, each slot with a certain number of hours
    // essay is an array with certain number corresponding to certain parts of the essay 
    
}

// This function creates a schedule when the user clicks on the button
function makeSchedule() {
    // Possibility: Maybe when the user click on the link we could have the results be displayed on a different HTML page?
    // Getting information from the form
    
    let paperName = document.querySelector("#paperName");
    let paperLength = document.querySelector("#paperLength");
    let paperDays = document.querySelector("#paperDays");
    let paperDailyHours = document.querySelector("#paperDailyHours");
    let paperPace = document.querySelector("#paperPace");


    let totalHours = paperDailyHours.value * paperDays.value;
    let totalHoursRequired = Math.round(paperLength.value / paperPace.value);

    // Error if the user doesn't input the necessary details

    // if (paperLength.value == null) return document.getElementById('error').innerHTML= "Please enter a length for your paper";
    // if (paperDays.value == null) return document.getElementById('error').innerHTML= "Please enter days for your paper";
    // if (paperDailyHour.value == null) return document.getElementById('error').innerHTML= "Please enter a daily hour for your paper";
    // if (paperPace.value == null) return document.getElementById('error').innerHTML= "Please enter a pace for your paper";

    // Throw an error if the user requires more time to finish the essay than the reported total hours available.
    if (totalHoursRequired > totalHours) return document.getElementById("error").innerHTML = "Your essay can not be completed before its deadline";

    // Prepare myEssay;
    // checkBoxSection(totalHours);
    //myEssay array prepared!

    // Choosing algorithm:
    // let paperAlgorithm = document.getElementsByName('algo');
    // let algorithm = ""
    // for (let i = 0; i < paperAlgorithm.length; i++) {
    //     if (paperAlgorithm[i].checked) {
    //         algorithm = paperAlgorithm[i].value;
    //         break;
    //     }
    // }
    // paperAlgorithm should represent the Algorithm that the user wants to use;

    // Creating the array for schedule:
    const mySchedule = new Array(paperDays.value);
    for (let i=0; i< paperDays.value; i++) {
        mySchedule[i] = paperDailyHours.value;
    }
    document.getElementById('test').innerHTML= typeof paperDailyHours.value;
    // mySchedule should be an array with paperDays index, each of which would have a value of paperDailyHours to represent time available
    
    // Now, call the appropriate algorith:
    if (algorithm == 'greedy') GreedyAlgorithm(mySchedule, myEssay);
    else document.getElementById("error").innerHTML = "Please select at least one method of completion";    

    // Output information here!
}