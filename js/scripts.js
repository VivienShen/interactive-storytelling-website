


//works
/* var current = null;

function showresponddiv(messagedivid){
    var id = messagedivid.replace("btn-", "s2-"),
        div = document.getElementById(id);

    // hide previous one
    if(current && current != div) {
        current.style.display =  'none';
    }   

    if (div.style.display=="none"){
        div.style.display="inline";
        current = div;
    } 
    else {
        div.style.display="none";
    }
}*/

/* 
function hideAllResponses() {
  var divs = document.getElementsByTagName('div');
  for(var i = divs.length; i-- ;) {
      var div = divs[i];
      if(div.className === 'response') {
          div.style.display = 'none';
      }
  }
}  */

//another way of storing image in array and show on screen
/* var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './img/scene2-1.png';

imgArray[1] = new Image();
imgArray[1].src = './img/scene2-2.png';

imgArray[2] = new Image();
imgArray[2].src = './img/scene2-4.png';

let imgArr;
var current = 0;  */
/* ... more images ... */


/*------------------------------------*/

/* function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}   */


/* //put image in array
var myCollection = new Collection([
    "./img/scene2-1.png",
    "./img/scene2-2.png",
    "./img/scene2-4.png"
  ], "mainImg");
  
  document.getElementById("next_btn").onclick = function() {
    myCollection.next();
  };
  
  document.getElementById("prev_btn").onclick = function() {
    myCollection.prev();
  }
  
  function Collection(urls, imgID) {
    var imgElem = document.getElementById(imgID);
    var index = 0;
  
    this.selectImage = function() {
      imgElem.src = urls[index];
    };
  
    this.next = function() {
      if (++index >= urls.length) {
        index = 0;
      }
  
      this.selectImage();
    };
  
    this.prev = function(element) {
      if (--index < 0) {
        index = urls.length - 1;
      }
  
      this.selectImage();
    };
  
    // initialize
    this.selectImage();
  } */


  //show image in slideshow
/* showSlides();

function createSlides( imgArray ) {
	var len = imgArray.length;
  var container = document.getElementById( "slideshow-container" );
  
  for ( var i = 0; i < len; i++ ) {
  	var slide = document.createElement( "div" );
    slide.className = "mySlides";
    var image = document.createElement( "img" );
    image.src = imgArray[ i ];
    slide.appendChild( image );
    container.appendChild( slide );
  }
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex> slides.length) {slideIndex = 1}
    
    slides[slideIndex-1].style.display = "block";
    

    $("button").click(function() {
        setTimeout(showSlides, 20000);
    });
} */