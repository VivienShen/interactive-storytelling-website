
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
// var visited2 = false;
// var visited3 = false;

let blink = document.getElementById("blink1");
// let blink2 = document.getElementById("blink2");
// let blink3 = document.getElementById("blink3");


let visited4 = sessionStorage.getItem("arcticVisited");
// var visited2 = sessionStorage.getItem("amazonVisited");
// var visited3 = sessionStorage.getItem("coralVisited");
console.log(visited4);


function placeVisited(){
    
        visited = true;
        sessionStorage.setItem("arcticVisited", visited);
    

}

if(visited4){
    console.log("visited arctic");
    blink.style.background = "#0cdb39bd";
}

function reset(){
    visited = false;
    // visited2 = false;
    // visited3 = false;
    
    sessionStorage.setItem("arcticVisited", visited);
    // sessionStorage.setItem("amazonVisited", visited2);
    // sessionStorage.setItem("coralVisited", visited3);
    // console.log(visited);

    blink.style.background = "#db130cbd";
    // blink2.style.background = "#db130cbd";
    // blink3.style.background = "#db130cbd";
}



// else if(visited2 = "true"){
//     console.log("visited amazon");
//     blink2.style.background = "#0cdb39bd";
// }

// else if(visited3 = "true"){
//     console.log("visited coral");
//     blink3.style.background = "#0cdb39bd";
// }





