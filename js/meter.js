///// POPULARITY METER AND QUIZ/////

//initialize score variable
var score = 0;

//show popularity meter on page load
$(document).ready(function () {
    scoreFunction();
});
function scoreFunction(){
    if (localStorage.getItem("currScore") >= 0){
        score = localStorage.getItem("currScore");
        document.getElementById("popularity-meter").value = score;
    }
}

//When the correct answer is clicked
var plus = document.getElementsByClassName("plus-btn");
var plusFunction = function()
{
    //only do so if there is data stored previously in local storage
    if (localStorage.getItem("currScore") >= 0){
        //get local storage value and store in variable score
        score = localStorage.getItem("currScore");
    }

    if(score == 50){
        document.querySelector(".plus-btn").setAttribute("disabled", "disabled")
    }else{
        document.querySelector(".plus-btn").removeAttribute("disabled");
        document.querySelector(".plus-btn").classList.remove("disabled");
    }
    
    //point increment by 5
    for(let i = 0; i < 5; i++){
        score++;
    }

    //setting increment input value
    document.getElementById("popularity-meter").value = score;

    //un-disable minus button only if score is greater than 0, to prevent negative score 
    if(score > 0){
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
    }

    //store score in local storage
    localStorage.setItem("currScore", score);
    console.log("score is: " + score);
}
for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', plusFunction, false);
}

//When the wrong answer is clicked
var minus = document.getElementsByClassName("minus-btn");
var minusFunction = function()
{
    console.log("minus button is clicked");
    //disable minus button if score is less than 5
    if(score <= 5){
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }else {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
    }
    //get local storage value and store in variable score
    score = localStorage.getItem("currScore");

    //point increment by 5
    // for(let i = 0; i < 5; i++){
    //     score--;
    // }

    //reflect score on the meter bar
    document.getElementById("popularity-meter").value = score;

    //store score in local storage
    localStorage.setItem("currScore", score);
    console.log("score is: " + score);
}
for (var i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', minusFunction, false);
}


//When correct capture is taken from camera
var camera = document.getElementById("cam");
var polarBear = document.getElementById("big-pb");
var coral1 = document.getElementById("coral1");
var coral2 = document.getElementById("coral2");
var coral3 = document.getElementById("coral3");
var fire = document.getElementById("fire");

let isCaptured = false;

function camClicked(){
    camera.style.transform = "scale(0.45, 0.45)";

    //Check if camera overlaps object
            
    var rect2 = camera.getBoundingClientRect();

    if(polarBear != null){
        var rect1 = polarBear.getBoundingClientRect();

        if (!
            (rect1.top > rect2.bottom ||
            rect1.right < rect2.left ||
            rect1.bottom < rect2.top ||
            rect1.left > rect2.right))
        {
            isCaptured = true;
            console.log("overlapping");
            document.getElementById("game-txt").innerHTML = "Captured";
            for(let i = 0; i < 5; i++){
                score++;
            }
            //setting increment input value
            document.getElementById("popularity-meter").value = score;
    
            //store score in local storage
            localStorage.setItem("currScore", score);
            console.log("score is: " + score);
                
        }else{
            isCaptured = false;
            document.getElementById("game-txt").innerHTML = "Not Captured";
        }
    }

    if(coral1 != null && coral2!= null && coral3 != null){
        var rect3 = coral1.getBoundingClientRect();
        var rect4 = coral2.getBoundingClientRect();
        var rect5 = coral3.getBoundingClientRect();

        if (!(rect3.top > rect2.bottom ||
                rect3.right < rect2.left ||
                rect3.bottom < rect2.top ||
                rect3.left > rect2.right)
    
            ||!(rect4.top > rect2.bottom ||
                rect4.right < rect2.left ||
                rect4.bottom < rect2.top ||
                rect4.left > rect2.right)
    
            ||!(rect5.top > rect2.bottom ||
                rect5.right < rect2.left ||
                rect5.bottom < rect2.top ||
                rect5.left > rect2.right)
        ){
            isCaptured = true;
            console.log("overlapping");
            document.getElementById("game-txt").innerHTML = "Captured";
            for(let i = 0; i < 5; i++){
                score++;
            }
            //setting increment input value
            document.getElementById("popularity-meter").value = score;
    
            //store score in local storage
            localStorage.setItem("currScore", score);
            console.log("score is: " + score);
                
        }else{
            isCaptured = false;
            document.getElementById("game-txt").innerHTML = "Not Captured";
        }

        //console.log(rect3);
    }
    
    if(fire != null){
        var rect6 = fire.getBoundingClientRect();

        if (!
            (rect6.top > rect2.bottom ||
            rect6.right < rect2.left ||
            rect6.bottom < rect2.top ||
            rect6.left > rect2.right))
        {
            isCaptured = true;
            console.log("overlapping");
            document.getElementById("game-txt").innerHTML = "Captured";
            for(let i = 0; i < 5; i++){
                score++;
            }
            //setting increment input value
            document.getElementById("popularity-meter").value = score;
    
            //store score in local storage
            localStorage.setItem("currScore", score);
            console.log("score is: " + score);
                
        }else{
            isCaptured = false;
            document.getElementById("game-txt").innerHTML = "Not Captured";
        }
    }

    console.log(isCaptured);

    // TAKE SCREENSHOT

    //create new element for screenshot
    var imageTaken = document.createElement("newImg");

    imageTaken.setAttribute('id','newImg');
    imageTaken.setAttribute('class','output');

    var currentDiv = document.getElementById("parent-cam"); 
    currentDiv.insertBefore(imageTaken, currentDiv.cam); 

    // Use the html2canvas function to take a screenshot and append it to the output div

    html2canvas(document.body, {
        x: window.scrollX + rect2.left,
        y: window.scrollY + rect2.top,
        width: rect2.width,
        height: rect2.height,
                
    }).then(canvas => {
        document.getElementById('newImg').appendChild(canvas);
    });

    camera.setAttribute('onmousedown','');

    //remove image after 3 seconds
    setTimeout(appeardiv, 3000);

    function appeardiv() {
        //remove image and restore camera functionality
        imageTaken.remove();
        camera.setAttribute('onmousedown','camClicked()');
    }
            
};
        

/////////SWITCH QUIZ QUESTIONS////////////
//same code from next button, but removed timer to apply to quiz buttons.
//Note: put "scene" in className of each quiz questions div
//Note: put "nextBtn" follow by an increment number in id of each answer buttons

//store the question divs of the specified className into an array
var IdStore = new Array();
function storeSceneId(){
    var className = document.getElementsByClassName('scene');
    var classNameCount = className.length;
    
    for(var j = 0; j < classNameCount; j++){
        IdStore.push(className[j].id);
    }
    console.log("IDs stored in local storage: " + IdStore);
}
storeSceneId();

//show or hide the div when answer button 1 is clicked
var currentIndex = 0
var next = document.getElementsByClassName("btn");

var myFunction = function() {               

    if (currentIndex < IdStore.length-1) {
        console.log('next'); 
        currentIndex += 1;
        console.log("currentIndex is: " + currentIndex);
        var divId = IdStore[currentIndex];
    
        console.log("divId and currentIndex: " + divId, currentIndex);
        document.getElementById(divId).style.display = "block";
        var prevIndex = currentIndex - 1;
        console.log("prevIndex is: " + prevIndex);
        if (prevIndex >= 0) {
            var preId = IdStore[prevIndex];
            document.getElementById(preId).style.display = "none";
        }
        
    }
}

for (var i = 0; i < next.length; i++) {
    next[i].addEventListener('click', myFunction, false);
}

document.getElementById("bg-music").volume = 0.05;

//Retrieving changed name from local storage
var inputVal = localStorage.getItem("newName");
console.log(inputVal);

var all = document.querySelectorAll('p');

all.forEach(x => x.innerHTML = x.innerHTML.replace(/Aeryn/gi, inputVal));