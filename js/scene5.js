// $(window).on('load', function () {
//     $('#loading').hide();
// }) 

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

var teleport = document.getElementById('teleport-icon');

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

    teleport.id = 'teleport-icon';
    teleport.setAttribute( "onClick", "" );
}

if(visited4 == "true"){
    console.log("visited arctic");
    blink.style.background = "#0cdb39bd";
}

if(visited5 == "true"){
    console.log("visited amazon");
    blink2.style.background = "#0cdb39bd";
}

if(visited6 == "true"){
    console.log("visited coral");
    blink3.style.background = "#0cdb39bd";
}


if(visited4 == "true" && visited5 == "true" && visited6 == "true"){
    teleport.id = 'icon-glow';
    console.log("all placed visited")
    teleport.setAttribute( "onClick", "loadPopup(); playEffect('btn-se');" );
}


 //Chapter Divider
var chap1 = document.getElementById("divider1");

if(!(visited4 == "false" && visited5 == "false" && visited6 == "false")){  
    chap1.style.display = "none"; 

    //console.log("place visited");
    
}
else{

}








