
/*------------------------------------------------Navbar----------------------------------*/

$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $(".menu-toggle").toggleClass("active1")
      $("nav").toggleClass("active1")
    })
  })
  
  /*----------------------------------------------Carousel-----------------------------------*/
  
  var slides = document.querySelectorAll('.slide');
      var btns = document.querySelectorAll('.btn');
      let currentSlide = 1;
  
      // Javascript for image slider manual navigation
      var manualNav = function(manual){
        slides.forEach((slide) => {
          slide.classList.remove('active');
  
          btns.forEach((btn) => {
            btn.classList.remove('active');
          });
        });
  
        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
      }
  
      btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
          manualNav(i);
          currentSlide = i;
        });
      });
  
      // Javascript for image slider autoplay navigation
      var repeat = function(activeClass){
        let active = document.getElementsByClassName('active');
        let i = 1;
  
        var repeater = () => {
          setTimeout(function(){
            [...active].forEach((activeSlide) => {
              activeSlide.classList.remove('active');
            });
  
          slides[i].classList.add('active');
          btns[i].classList.add('active');
          i++;
  
          if(slides.length == i){
            i = 0;
          }
          if(i >= slides.length){
            return;
          }
          repeater();
        }, 3000);
        }
        repeater();
      }
      repeat();
    /*----------------------------------------------Carousel ends-----------------------------------*/

      /*----------------------------------------------Modal starts-----------------------------------*/

        // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Modalform");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//onclick message on submit
function myFunction() {
  alert("Thank you for your support");
}


        /*----------------------------------------------Modal ends-----------------------------------*/


