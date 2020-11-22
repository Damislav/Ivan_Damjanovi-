//dropdown menu

$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $(".mobile_menu").toggle();
  });
});
$(".menu-toggle-btn").click(function () {
  $(this).toggleClass("open");
});
// ----------------------------------------------
//Get the button to top
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
