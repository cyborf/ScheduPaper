/* 
* This is the main Javascript file for ScheduPaper. This file stores the app's algorithm and displays
* calculated information. 
* Dan-Ha Le, Ananya Sayani, Zaina Saleem, Miriam Rairick
*/


function makeSchedule() {
    // Possibility: Maybe when the user click on the link we could have the results be displayed on a different HTML page?

    // Getting information from the form
    let paperName = document.querySelector("#paperName");

    let paperLength = document.querySelector("#paperLength");
    let paperDays = document.querySelector("#paperDays");
    let paperDailyHours = document.querySelector("#paperDailyHours");
    let paperPace = document.querySelector("#paperPace");

    // Algorithm here!

    let totalHours = paperDailyHours.value * paperDays.value;
    let totalHoursRequired = Math.round(paperLength.value / paperPace.value);

    // Calculate the hours for each part of the essay:

    let introHours = Math.round(totalHoursRequired / 5);
    let bodyHours = Math.round(totalHoursRequired * 3 / 5);
    let conclusionHours = totalHoursrequired - introHours - bodyHours;


    // Assigning the hours (Turbo done):

    // Creating the array schedule:
    let schedule = new Array();
    for (let i = 0; i < paperDays.value; i++) {
        schedule[i] = paperDailyHours.value;
    }

    //Assigning the hours (hard):
    /*
     *
     * Restrictions:
     * - Conclusion must be done before last day
     * - Introduction starts on the first day
     * -
     */

    message.innerHTML = totalHoursRequired;


    // Output information here!
}