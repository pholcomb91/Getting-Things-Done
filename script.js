var currentTime= moment().get('hour');
console.log (currentTime);

var toDo9= document.getElementById("toDo-9");
var toDo10= document.getElementById("toDo-10");


/*var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var currentDay= moment().format("MMM Do, YYYY");
document.getElementById("currentDay").innerHTML= currentDay;*/

var today = moment();
$("#1a").text(today.format('MMMM Do YYYY'));

//Entry Point
function saveToLocal9 () {
    
    if (toDo9 !== "") {
        localStorage.setItem("task-9", toDo9.innerHTML.toString());
        console.log(toDo9.innerHTML.toString());
    } else {
        return;
    }
    
    console.log(toDo9);
    //localStorage.setItem();
}
function saveToLocal10 () {
    
    if (toDo10 !== "null") {
        localStorage.setItem("task-10", toDo10.innerHTML.toString());
    } else {
        return;
    }
    
    console.log(toDo10);
    //localStorage.setItem();
}


function saveToLocal10 () {
    var toDo10= document.getElementById("toDo10").innerText;
    //event=toDo10.addEventListener('click', setLocal());
    //function setLocal () {}
        console.log(toDo10);
    
    //var specificToDo= (event.target.toDo);
    //localStorage.toDo
    
    //localStorage.setItem();
}

//for (var i= 9; i<= 18; i ++) {}
$(".list-group-horizontal li:nth-child(2)").each(function() {
    var time= $(this).attr("id").split("-")[1];
    if (time < currentTime){ 
        $(this.parentNode).children().addClass("list-group-item-secondary");
    } else if (time == currentTime) {
        $(this.parentNode).children().addClass("list-group-item-warning");
    } else {
        $(this.parentNode).children().addClass("list-group-item-success");
    }
}) 


/*var now= moment().format("LT");
var isDisabled= false;
if  <= now {
    isDisabled=true;
    console.log(isDisabled); */

/*var tenAm = moment().hour(10);
console.log(tenAm);
$('#10a').text(9a.format());

var timeSlot = new Date("August, 31, 2022 08:00:00");
var hour = timeSlot.getHours();
document.getElementById("eightAm").innerHTML = hour + ":00";

var timeSlot = new Date("August, 31, 2022 09:00:00");
var hour = timeSlot.getHours();
document.getElementById("nineAm").innerHTML = hour + ":00";

var timeSlot = new Date("August, 31, 2022 010:00:00");
var hour = timeSlot.getHours();
document.getElementById("tenAm").innerHTML = hour + ":00";

var timeSlot = new Date("August, 31, 2022 11:00:00");
var hour = timeSlot.getHours();
document.getElementById("elevenAm").innerHTML = hour + ":00";

var timeSlot = new Date("August, 31, 2022 12:00:00");
var hour = timeSlot.getHours();
document.getElementById("twelvePm").innerHTML = hour + ":00";

var timeSlot = new Date("August, 31, 2022 13:00:00");
var hour = timeSlot.getHours();
document.getElementById("onePm").innerHTML = hour + ":00";

var timeSlot = new Date("August, 31, 2022 14:00:00");
var hour = timeSlot.getHours();
document.getElementById("twoPm").innerHTML = hour + ":00";

var timeSlot = new Date("August, 31, 2022 15:00:00");
var hour = timeSlot.getHours();
document.getElementById("threePm").innerHTML = hour + ":00";

var timeSlot = new Date("August, 31, 2022 16:00:00");
var hour = timeSlot.getHours();
document.getElementById("fourPm").innerHTML = hour + ":00";

var timeSlot = new Date("August, 31, 2022 17:00:00");
var hour = timeSlot.getHours();
document.getElementById("fivePm").innerHTML = hour + ":00";

setInterval(function disableTimeSlot () {
    if (hour < currentTime) {
        document.getElementById().classList.add('disabled');
        document.getElementById().classList.add('list-group-item-dark');
    } else if (hour == currentTime) {
        document.getElementById().classList.add('list-group-item-success');
    } else {
        document.getElementById().classList.add('list-group-item-warning');
    }
}, 1000*60);*/

//setInterval(disableTimeSlot, 1000 * 60);

function renderLastToDo () {
    //toDo9.innerHTML = localStorage.getItem("task-9");

    var lastToDo = localStorage.getItem("task-9");
        if (lastToDo !== null) {
            toDo9.innerHTML= lastToDo;
        } else {
            toDo9.innerHTML = "Nothing to do here.";
        }
        
    var lastToDo = localStorage.getItem("task-10");
        console.log("nothing stored here yet");
        if (lastToDo !== "undefined") {
         toDo9.innerHTML = lastToDo;
        
        } else {
            toDo9.innerHTML = "New Task";
        }

}
function init (){
    renderLastToDo();
    console.log("Init Running");
}

init ();