
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
document.querySelector(".plus-btn").addEventListener("click", function()
{
    //only do so if there is data stored previously in local storage
    if (localStorage.getItem("currScore") >= 0){
        //get local storage value and store in variable score
        score = localStorage.getItem("currScore");
    }

    if(score == 95){
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
        document.querySelector(".minus-btn2").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
        document.querySelector(".minus-btn2").classList.remove("disabled");
    }

    //store score in local storage
    localStorage.setItem("currScore", score);
    console.log(score);
})
 
//When the wrong answer is clicked
document.querySelector(".minus-btn").addEventListener("click", function()
{
    //disable minus button if score is less than 5
    if(score <= 5){
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }else {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn2").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
        document.querySelector(".minus-btn2").classList.remove("disabled");
    }
    //get local storage value and store in variable score
    score = localStorage.getItem("currScore");

    //point increment by 5
    for(let i = 0; i < 5; i++){
        score--;
    }

    //reflect score on the meter bar
    document.getElementById("popularity-meter").value = score;

    //store score in local storage
    localStorage.setItem("currScore", score);
    console.log(score);
})


//When the wrong answer is clicked, same code for all minus buttons
document.querySelector(".minus-btn2").addEventListener("click", function()
{
    if(score <= 5){
        document.querySelector(".minus-btn2").setAttribute("disabled", "disabled")
    }else {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn2").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
        document.querySelector(".minus-btn2").classList.remove("disabled");
    }
    //getting value of input
    score = localStorage.getItem("currScore");

    //point increment by 5
    for(let i = 0; i < 5; i++){
        score--;
    }

    //reflect score on the meter bar
    document.getElementById("popularity-meter").value = score;

    //store score in local storage
    localStorage.setItem("currScore", score);
    console.log(score);
})


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
    console.log(IdStore);
}
storeSceneId();

//show or hide the div when answer button 1 is clicked
var currentIndex = 0
var next = document.getElementById("nextBtn");
next.addEventListener("click", function(i) {               

    if (currentIndex < IdStore.length-1) {
        console.log('next'); 
        currentIndex += 1;
        console.log(currentIndex);
        var divId = IdStore[currentIndex];
    
        console.log(divId, currentIndex);
        document.getElementById(divId).style.display = "block";
        var prevIndex = currentIndex - 1;
        console.log(prevIndex);
        if (prevIndex >= 0) {
            var preId = IdStore[prevIndex];
            document.getElementById(preId).style.display = "none";
        }
        
    }
})

//show or hide the div when answer button 2 is clicked
var currentIndex = 0
var next = document.getElementById("nextBtn2");
next.addEventListener("click", function(i) {               

    if (currentIndex < IdStore.length-1) {
        console.log('next'); 
        currentIndex += 1;
        console.log(currentIndex);
        var divId = IdStore[currentIndex];
    
        console.log(divId, currentIndex);
        document.getElementById(divId).style.display = "block";
        var prevIndex = currentIndex - 1;
        console.log(prevIndex);
        if (prevIndex >= 0) {
            var preId = IdStore[prevIndex];
            document.getElementById(preId).style.display = "none";
        }
        
    }
})

//show or hide the div when answer button 3 is clicked
var currentIndex = 0
var next = document.getElementById("nextBtn3");
next.addEventListener("click", function(i) {               

    if (currentIndex < IdStore.length-1) {
        console.log('next'); 
        currentIndex += 1;
        console.log(currentIndex);
        var divId = IdStore[currentIndex];
    
        console.log(divId, currentIndex);
        document.getElementById(divId).style.display = "block";
        var prevIndex = currentIndex - 1;
        console.log(prevIndex);
        if (prevIndex >= 0) {
            var preId = IdStore[prevIndex];
            document.getElementById(preId).style.display = "none";
        }
        
    }
})