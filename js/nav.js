$(document).ready(function () {
    lock();
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