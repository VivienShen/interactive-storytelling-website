const swup = new Swup();

    let thumb = slider.querySelector('.thumb');

    //let path = document.getElementById('path');

    thumb.onmousedown = function(event) {
      event.preventDefault(); // prevent selection start (browser action)

      let shiftY = event.clientY - thumb.getBoundingClientRect().top;  

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newTop = event.clientY - shiftY - slider.getBoundingClientRect().top;

        // the pointer is out of slider => lock the thumb within the boundaries
        if (newTop < 0) {
            newTop = 0;
        }
        let bottomEdge = slider.offsetHeight - thumb.offsetHeight;
        if (newTop > bottomEdge) {
            newTop = bottomEdge;
        }

        thumb.style.top = newTop + 'px';

        path.style.height = newTop + 'px';

        console.log(newTop);
        

      }

      function onMouseUp() {

        let shiftY = event.clientY - thumb.getBoundingClientRect().top;  
        let newTop = event.clientY - shiftY - slider.getBoundingClientRect().top;
        const a = document.getElementById('drag'); 

        if((newTop) < 70){
          
          thumb.style.top = 0 + 'px';
          path.style.height = 0 + 'px';
        }
        else{
          a.href = "drag2.html";
          a.onclick = "return false;";
        }
    
      
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);

      }

    };

    thumb.ondragstart = function() {
      return false;
    };


    //make button appear after specefc time
    window.onload = function () {
        setTimeout(appeardiv, 3000);
    }

    function appeardiv() {
        document.getElementById('transition-btn').style.display= "block";
    }

