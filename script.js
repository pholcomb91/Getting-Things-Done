var currentTime= moment().get('hour');
console.log (currentTime);

setInterval(disableTimeSlot, 1000 * 60 * 60);

/*var today = moment();
//$("#currentDay").text(today.format("MMM Do, YYYY"));
var currentDay= moment().format("MMM Do, YYYY");
document.getElementById("currentDay").innerHTML= currentDay;

var today = moment();
$("#1a").text(today.format("MMM Do, YYYY"));

var now= moment().format("LT");
var isDisabled= false;
if  <= now {
    isDisabled=true;
    console.log(isDisabled); */

/*var tenAm = moment().hour(10);
console.log(tenAm);
$('#10a').text(9a.format());*/

var timeSlot = new Date("August, 31, 2022 08:00:00");
var hour = timeSlot.getHours();
document.getElementById("eightAm").innerHTML = hour + " AM";

var timeSlot = new Date("August, 31, 2022 09:00:00");
var hour = timeSlot.getHours();
document.getElementById("nineAm").innerHTML = hour + " AM";

var timeSlot = new Date("August, 31, 2022 010:00:00");
var hour = timeSlot.getHours();
document.getElementById("tenAm").innerHTML = hour + " AM";

var timeSlot = new Date("August, 31, 2022 11:00:00");
var hour = timeSlot.getHours();
document.getElementById("elevenAm").innerHTML = hour + " AM";

var timeSlot = new Date("August, 31, 2022 12:00:00");
var hour = timeSlot.getHours();
document.getElementById("twelvePm").innerHTML = hour + " PM";

var timeSlot = new Date("August, 31, 2022 1:00:00");
var hour = timeSlot.getHours();
document.getElementById("onePm").innerHTML = hour + " PM";

var timeSlot = new Date("August, 31, 2022 14:00:00");
var hour = timeSlot.getHours();
document.getElementById("twoPm").innerHTML = hour + " PM";

var timeSlot = new Date("August, 31, 2022 15:00:00");
var hour = timeSlot.getHours();
document.getElementById("threePm").innerHTML = hour + " PM";

var timeSlot = new Date("August, 31, 2022 16:00:00");
var hour = timeSlot.getHours();
document.getElementById("fourPm").innerHTML = hour + " PM";

var timeSlot = new Date("August, 31, 2022 17:00:00");
var hour = timeSlot.getHours();
document.getElementById("fivePm").innerHTML = hour + " PM";

function disableTimeSlot () {
    if (hour < currentTime) {
        document.getElementById().classList.add('disabled');
        document.getElementById().classList.add('list-group-item-dark');
    } else if (hour == currentTime) {
        document.getElementById().classList.add('list-group-item-success');
    } else {
        document.getElementById().classList.add('list-group-item-warning');
    }
}