function GreedyAlgorithm(essay, schedule){
    // essay is the [1, 3, 1] ratio, schedule is [1, 1, 1,...]

    // The following code assigns each index of assign to an array that shows how many hours to each part:

    
    let data = new Array();
    let pointer = 0;
    for (let i=0; i<schedule.length; i++) {
        let division = [0, 0, 0];
        if (pointer >=3) break;
        while (schedule[i]> 0) {
            // Int
            if (schedule[i] >= essay[pointer]) {
                let assign = essay[pointer];
                schedule[i] = schedule[i] - essay[pointer];
                division[pointer] = assign;
                pointer=pointer+1;
            }
            else {
                let assign = schedule[i];
                division[pointer] = assign;
                essay[pointer] = essay[pointer] - assign;
                schedule[i] = 0;
            }
        }
        data.push(division);

    }

    // Prints the HTML list:
    let myResults = document.getElementById('results');
    let counter = 1;
    data.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = 
        `Day ${counter}: 
                  Introduction (${item[0]} hour)
                  Body (${item[1]} hour)
                  Conclusion (${item[2]} hour) `;
        // li.innerText = "Day".concat(" ", counter);
        counter = counter + 1;
        myResults.appendChild(li);
       
    })




}

function clean() {

}

function makeSchedule() {
    let name = document.querySelector("#paperName");
    let length = document.querySelector("#paperLength");
    let days = document.querySelector("#paperDays");
    let dailyHours = document.querySelector("#paperDailyHours");
    let pace = document.querySelector("#paperPace");

    essayHours = length.value/pace.value;
    totalHours = days.value*dailyHours.value;
    if (essayHours > totalHours) document.getElementById('error').innerHTML="This project is not feasible.";

    // Setting up the essay:
    myEssay =  [1, 3, 1];
    for (let i = 0; i<3; i++) {
        myEssay[i] = essayHours/5*myEssay[i];
    }

    // Setting up the schedule:
    mySchedule = new Array(days.value);
    for (let i = 0; i<days.value; i++) {
        mySchedule[i] = dailyHours.value;

    }

    GreedyAlgorithm(myEssay, mySchedule);


}