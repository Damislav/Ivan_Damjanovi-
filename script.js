// making slider go brm brm -------------

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// end of slide ---------------

// slide 2
let slideContainer = 1;
GetshowSlides(slideContainer);

function GetplusSlides(arg) {
  GetshowSlides((slideContainer += arg));
}

function GetcurrentSlide(arg) {
  GetshowSlides((slideContainer = arg));
}

function GetshowSlides(arg) {
  let i;
  let slides = document.getElementsByClassName("mySlides-2");
  let dots = document.getElementsByClassName("dot-2");
  if (arg > slides.length) {
    slideContainer = 1;
  }
  if (arg < 1) {
    slideContainer = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-2", "");
  }
  slides[slideContainer - 1].style.display = "block";
  dots[slideContainer - 1].className += " active-2";
}
//  end of slide 2

//  aos

AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true, // appear only once
});

 
