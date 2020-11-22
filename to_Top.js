// $(".mobile_nav").click(function () {
//   var mm = $(".mobile_menu"),
//     mn = $(".mobile_nav"),
//     a = "active";

//   if (mm.hasClass(a) && mn.hasClass(a)) {
//     mm.removeClass(a).fadeOut(200);
//     mn.removeClass(a);
//     $(".mobile_menu li").each(function () {
//       $(this).removeClass("slide");
//     });
//   } else {
//     mm.addClass(a).fadeIn(200);
//     mn.addClass(a);
//     $(".mobile_menu li").each(function (i) {
//       var t = $(this);
//       setTimeout(function () {
//         t.addClass("slide");
//       }, (i + 1) * 100);
//     });
//   }
// });

// dropdown nav
// let button = document.querySelector(".mobile_nav");
// let dropdown = document.querySelector(".mobile_menu");

// button.addEventListener("click", () => {
//   dropdown.classList.toggle("display");
//   button.classList.toggle();
// });¸

$(document).ready(function () {
  $(".mobile_nav").click(function () {
    $(".mobile_menu").toggle();
  });
});
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
