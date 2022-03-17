
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


var visited = false;

var visited = sessionStorage.getItem("favoriteMovie");
console.log(visited);


function placeVisited(){
    
    visited = true;

    sessionStorage.setItem("favoriteMovie", visited);

}

let blink = document.getElementById("blink1");

if(visited = true){
    //console.log("visited");
    blink.style.background = "#0cdb39bd";
}
