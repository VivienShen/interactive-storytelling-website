
function toggleMapElements(icon, btn) {
    let txt = icon;
    let txt2 = btn;
    console.log(txt);
    var x = document.getElementById(txt);
    var y = document.getElementById(txt2);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

let visited = false;
let visited2 = false;
let visited3 = false;

let blink = document.getElementById("blink1");
let blink2 = document.getElementById("blink2");
let blink3 = document.getElementById("blink3");


var visited4 = sessionStorage.getItem("arcticVisited");
var visited5 = sessionStorage.getItem("amazonVisited");
var visited6 = sessionStorage.getItem("coralVisited");
console.log(visited4, visited5, visited6);


function placeVisited(place, name){
    if(place == "visited" && name == "arcticVisited"){
        visited = true;
        sessionStorage.setItem("arcticVisited", visited);
    }
    else if(place == "visited2" && name == "amazonVisited"){
        visited2 = true;
        sessionStorage.setItem("amazonVisited", visited2);
    }
    else if(place == "visited3" && name == "coralVisited"){
        visited3 = true;
        sessionStorage.setItem("coralVisited", visited3);
    }

}


function reset(){
    visited = false;
    visited2 = false;
    visited3 = false;
    
    sessionStorage.setItem("arcticVisited", visited);
    sessionStorage.setItem("amazonVisited", visited2);
    sessionStorage.setItem("coralVisited", visited3);
    // console.log(visited);

    blink.style.background = "#db130cbd";
    blink2.style.background = "#db130cbd";
    blink3.style.background = "#db130cbd";
}

if(visited4 == "true"){
    console.log("visited arctic");
    blink.style.background = "#0cdb39bd";
}

else if(visited5 == "true"){
    console.log("visited amazon");
    blink2.style.background = "#0cdb39bd";
}

else if(visited6 == "true"){
    console.log("visited coral");
    blink3.style.background = "#0cdb39bd";
}





