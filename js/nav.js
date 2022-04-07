$(document).ready(function () {
    lock();
    console.log("active");
    audioStatus();
});


function lock() {
    var pointerEv = "none";
    var txtColor = "lightGrey";
    if (localStorage.getItem("ch0-lock") != 1){
        
        document.getElementById("chapter0").style.pointerEvents = pointerEv;
        document.getElementById("chapter0").style.color = txtColor;
        localStorage.setItem("ch0-pointerEv", pointerEv);
        localStorage.setItem("ch0-color", txtColor);
        
    }
    if (localStorage.getItem("ch1-lock") != 1){
        
        document.getElementById("chapter1").style.pointerEvents = pointerEv;
        document.getElementById("chapter1").style.color = txtColor;
        localStorage.setItem("ch1-pointerEv", pointerEv);
        localStorage.setItem("ch1-color", txtColor);
        
    }
    if (localStorage.getItem("ch2-lock") != 1){
        
        document.getElementById("chapter2").style.pointerEvents = pointerEv;
        document.getElementById("chapter2").style.color = txtColor;
        localStorage.setItem("ch2-pointerEv", pointerEv);
        localStorage.setItem("ch2-color", txtColor);
    }
    if (localStorage.getItem("ch3-lock") != 1){
        
        document.getElementById("chapter3").style.pointerEvents = pointerEv;
        document.getElementById("chapter3").style.color = txtColor;
        localStorage.setItem("ch3-pointerEv", pointerEv);
        localStorage.setItem("ch3-color", txtColor);
    }
    if (localStorage.getItem("ch4-lock") != 1){
        
        document.getElementById("chapter4").style.pointerEvents = pointerEv;
        document.getElementById("chapter4").style.color = txtColor;
        localStorage.setItem("ch4-pointerEv", pointerEv);
        localStorage.setItem("ch4-color", txtColor);
    }
    if (localStorage.getItem("ch5-lock") != 1){
        
        document.getElementById("chapter5").style.pointerEvents = pointerEv;
        document.getElementById("chapter5").style.color = txtColor;
        localStorage.setItem("ch5-pointerEv", pointerEv);
        localStorage.setItem("ch5-color", txtColor);
    }
}


function audioStatus() {
    if (localStorage.getItem("sound") == false) {
        console.log("sound is off");
        document.getElementById("on").style.display = "none";
        document.getElementById("off").style.display = "inline";
        soundOff();
        /* document.getElementById("bg-music").muted = true;
        document.getElementById("zoomBtn-se").muted = true;
        document.getElementById("zoom-se").muted = true;
        document.getElementById("city-se").muted = true; 
        document.getElementById("pickup-se").muted = true;  
        document.getElementById("wind-se").muted = true;  
        document.getElementById("camera-se").muted = true;
        document.getElementById("water-se").muted = true;
        document.getElementById("forest-se").muted = true;
        document.getElementById("phone-se").muted = true;
        document.getElementById("add-se").muted = true; 
        document.getElementById("btn-se").muted = true; 
        document.getElementById("lab-se").muted = true;
        document.getElementById("crowd-music").muted = true;
        document.getElementById("chant-music").muted = true;  */
        
    } else if (localStorage.getItem("sound") == true) {
        console.log("sound is on");
        document.getElementById("off").style.display = "none"; 
        document.getElementById("on").style.display = "inline";
        soundOn();
        /* document.getElementById("bg-music").muted = false;
        document.getElementById("zoomBtn-se").muted = false;
        document.getElementById("zoom-se").muted = false;
        document.getElementById("city-se").muted = false; 
        document.getElementById("pickup-se").muted = false;  
        document.getElementById("wind-se").muted = false;  
        document.getElementById("camera-se").muted = false;
        document.getElementById("water-se").muted = false;
        document.getElementById("forest-se").muted = false;
        document.getElementById("phone-se").muted = false;
        document.getElementById("add-se").muted = false; 
        document.getElementById("btn-se").muted = false; 
        document.getElementById("lab-se").muted = false;
        document.getElementById("crowd-music").muted = false;
        document.getElementById("chant-music").muted = false;
         */
    }
}