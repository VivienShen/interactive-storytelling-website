// $(window).on('load', function () {
//     $('#loading').hide();
// }) 

let visited = false;
let visited2 = false;
let visited3 = false;

let blink = document.getElementById("blink1");
let blink2 = document.getElementById("blink2");
let blink3 = document.getElementById("blink3");

let pin1 = document.getElementById("pin1");
let pin2 = document.getElementById("pin2");
let pin3 = document.getElementById("pin3");


var visited4 = sessionStorage.getItem("arcticVisited");
var visited5 = sessionStorage.getItem("amazonVisited");
var visited6 = sessionStorage.getItem("coralVisited");

console.log(visited, visited2, visited3);
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

var teleport = document.getElementById('teleport-icon');


if(visited4 == "true"){
    console.log("visited arctic");
    blink.style.background = "#0f45dbdc";
    blink.style.animation = "none";
    pin1.className = "map-pin1 pin";

    blink.setAttribute("animation", "");
}

if(visited5 == "true"){
    console.log("visited amazon");
    blink2.style.background = "#0f45dbdc";
    blink2.style.animation = "none";
    pin2.className = "map-pin2 pin";
}

if(visited6 == "true"){
    console.log("visited coral");
    blink3.style.background = "#0f45dbdc";
    blink3.style.animation = "none";
    pin3.className = "map-pin3 pin";
}


if(visited4 == "true" && visited5 == "true" && visited6 == "true"){
    teleport.id = 'icon-glow3';
    console.log("all placed visited")
    teleport.setAttribute( "onClick", "loadPopup(); playEffect('btn-se');" );
}


 //Chapter Divider
var chap1 = document.getElementById("divider1");

if((visited == "false" && visited2 == "false" && visited3 == "false")){  
    chap1.style.display = "block"; 
    console.log("no place visited");
    
}

if ((visited4 == "true" || visited5 == "true" || visited6 == "true")){
    chap1.style.display = "none"; 
    console.log("at least 1 place visited visited");
}








