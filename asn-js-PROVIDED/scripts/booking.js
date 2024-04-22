/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costPerDay;
var dayCounter = 0;
var dailyRate = 35;
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let monButton = document.getElementById("monday");
monButton.addEventListener("click",clickClass);

let tueButton = document.getElementById("tuesday");
tueButton.addEventListener("click",clickClass);

let wedButton = document.getElementById("wednesday");
wedButton.addEventListener("click",clickClass);

let thuButton = document.getElementById("thursday");
thuButton.addEventListener("click",clickClass);

let friButton = document.getElementById("friday");
friButton.addEventListener("click",clickClass);

function clickClass(event){

    if (event.target.classList.contains("clicked")){
        event.target.classList.remove("clicked");
        dayCounter -= 1;
    }else {
        event.target.classList.add("clicked");
        dayCounter += 1;
    }
    recalculateCost();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let resetButton = document.getElementById("clear-button");
resetButton.addEventListener("click",reset);

function reset(){
    let dayArray = document.querySelectorAll('ul > li');
    for (let i = 0; i < dayArray.length; i++){
        dayArray[i].classList.remove("clicked");
        dayCounter = 0;
    }

    if (halfDay.classList.contains("clicked")) {
        halfDay.classList.remove("clicked");
        fullDay.classList.add("clicked");
    }
    recalculateCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfDay = document.getElementById("half");
halfDay.addEventListener("click", dayClass);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

let fullDay = document.getElementById("full");
fullDay.addEventListener("click", dayClass);

function dayClass(event){
    event.target.classList.add("clicked");
    if (event.target == halfDay){
        fullDay.classList.remove("clicked");
        dailyRate = 20;
    } else {
        halfDay.classList.remove("clicked");
        dailyRate = 35;
    }
    recalculateCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculateCost(){
    calCost = document.getElementById("calculated-cost");
    cost = dayCounter * dailyRate;
    calCost.innerHTML = cost;
}

