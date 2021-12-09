const swup = new Swup();

    let thumb = slider.querySelector('.thumb');

    thumb.onmousedown = function(event) {
      event.preventDefault(); // prevent selection start (browser action)

      let shiftY = event.clientY - thumb.getBoundingClientRect().top;
      // shiftY not needed, the thumb moves only horizontally

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newTop = event.clientY - shiftY - slider.getBoundingClientRect().top;

        // the pointer is out of slider => lock the thumb within the bounaries
        if (newTop < 0) {
            newTop = 0;
        }
        let bottomEdge = slider.offsetHeight - thumb.offsetHeight;
        if (newTop > bottomEdge) {
            newTop = bottomEdge;
        }

        thumb.style.top = newTop + 'px';

        console.log(newTop);

        if((newTop) == 75){
           
            var a = document.getElementById('drag'); 
            a.href = "/drag2.html"
        }
            
    
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

    thumb.ondragstart = function() {
      return false;
    };


    //make button appear after specefc time
    window.onload = function () {
        setTimeout(appeardiv,5000);
    }

    function appeardiv() {
        document.getElementById('drag').style.display= "block";
    }