var currentTime= moment().get('hour');
console.log (currentTime);
//All variables are labeled and compared using military time.
var toDo9= document.getElementById("toDo-9");
var toDo10= document.getElementById("toDo-10");
var toDo11= document.getElementById("toDo-11");
var toDo12= document.getElementById("toDo-12");
var toDo13= document.getElementById("toDo-13");
var toDo14= document.getElementById("toDo-14");
var toDo15= document.getElementById("toDo-15");
var toDo16= document.getElementById("toDo-16");
var toDo17= document.getElementById("toDo-17");

//This is the current date
var today = moment();
$("#1a").text(today.format('MMMM Do YYYY'));

//Entry Point. 
//These are what save the Tasks in local storage.
function saveToLocal9 () {
    
    if (toDo9 !== "") {
        localStorage.setItem("task-9", toDo9.innerHTML.toString());
    } else {
        return;
    }

}
function saveToLocal10 () {
    
    if (toDo10 !== "") {
        localStorage.setItem("task-10", toDo10.innerHTML.toString());
    } else {
        return;
    }
}

function saveToLocal11 () {
    
    if (toDo11 !== "") {
        localStorage.setItem("task-11", toDo11.innerHTML.toString());
    } else {
        return;
    }
}

function saveToLocal12 () {
    
    if (toDo12 !== "") {
        localStorage.setItem("task-12", toDo12.innerHTML.toString());
    } else {
        return;
    }
}

function saveToLocal13 () {
    
    if (toDo13 !== "") {
        localStorage.setItem("task-13", toDo13.innerHTML.toString());
    } else {
        return;
    }
}

function saveToLocal14 () {
    
    if (toDo14 !== "") {
        localStorage.setItem("task-14", toDo14.innerHTML.toString());
    } else {
        return;
    }
}

function saveToLocal15 () {
    
    if (toDo15 !== "") {
        localStorage.setItem("task-15", toDo15.innerHTML.toString());
    } else {
        return;
    }
}

function saveToLocal16 () {
    
    if (toDo16 !== "") {
        localStorage.setItem("task-16", toDo16.innerHTML.toString());
    } else {
        return;
    }
}

function saveToLocal17 () {
    
    if (toDo17 !== "") {
        localStorage.setItem("task-17", toDo17.innerHTML.toString());
    } else {
        return;
    }
}

//This colors the time slots according to past, present, and future.
$(".list-group-horizontal li:nth-child(2)").each(function() {
    var time= $(this).attr("id").split("-")[1];
    if (time < currentTime){ 
        $(this.parentNode).children().addClass("list-group-item-secondary ");
    } else if (time == currentTime) {
        $(this.parentNode).children().addClass("list-group-item-warning");
    } else {
        $(this.parentNode).children().addClass("list-group-item-success");
    }
}) 

//The Following repopulates the tasks upon Initiation.
function renderLastToDo () {
    

    var lastToDo = localStorage.getItem("task-9");
        if (lastToDo !== null) {
            toDo9.innerHTML= lastToDo;
            console.log("&", toDo9.innerHTML)
        } else {
            toDo9.innerHTML = "Nothing to do here.";
        }
        
    var lastToDo = localStorage.getItem("task-10");
        if (lastToDo !== null) {
         toDo10.innerHTML = lastToDo;
        
        } else {
            toDo10.innerHTML = "Nothing to do here.";
        }
    var lastToDo = localStorage.getItem("task-11");
        if (lastToDo !== null) {
         toDo11.innerHTML = lastToDo;
        
        } else {
            toDo11.innerHTML = "Nothing to do here.";
        }
    var lastToDo = localStorage.getItem("task-12");
        if (lastToDo !== null) {
         toDo12.innerHTML = lastToDo;
        
        } else {
            toDo12.innerHTML = "Nothing to do here.";
        }
    var lastToDo = localStorage.getItem("task-13");
        if (lastToDo !== null) {
         toDo13.innerHTML = lastToDo;
        
        } else {
            toDo13.innerHTML = "Nothing to do here.";
        }
    var lastToDo = localStorage.getItem("task-14");
        if (lastToDo !== null) {
         toDo14.innerHTML = lastToDo;
        
        } else {
            toDo14.innerHTML = "Nothing to do here.";
        }
    var lastToDo = localStorage.getItem("task-15");
        if (lastToDo !== null) {
         toDo15.innerHTML = lastToDo;
        
        } else {
            toDo15.innerHTML = "Nothing to do here.";
        }
    var lastToDo = localStorage.getItem("task-16");
        if (lastToDo !== null) {
         toDo16.innerHTML = lastToDo;
        
        } else {
            toDo16.innerHTML = "Nothing to do here.";
        }
    var lastToDo = localStorage.getItem("task-17");
        if (lastToDo !== null) {
         toDo17.innerHTML = lastToDo;
        
        } else {
            toDo17.innerHTML = "Nothing to do here.";
        }
}
function init (){
    renderLastToDo();
}

init ();