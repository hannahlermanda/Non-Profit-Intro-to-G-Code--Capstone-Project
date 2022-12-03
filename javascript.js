// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//navbar
const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("mouseleave", toggleNavbarVisibility);

//slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//dark-light mode
function myFunctionLight() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//Number validation
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
    document.getElementById("numb").style.border = "thick solid red";

  } else {
    text = "Input OK";
    document.getElementById("numb").style.border = "thick solid green";

  }
  document.getElementById("demo").innerHTML = text;
}


//sign-up form validation
//name
function validateFormName() {
  // Get the value of the input field with id="name"
  let x = document.getElementById("name").value;
  // If name is empty
  let text;
  if (x == "") {
    text = "Name must be filled out";
    document.getElementById("name").style.border = "thick solid red";
  } else {
    text = "Name OK";
    document.getElementById("name").style.border = "thick solid green";
  }
  document.getElementById("nameVali").innerHTML = text;
}
//email
function validateFormEmail() {
  // Get the value of the input field with id="email"
  let x = document.getElementById("email").value;
  // If email is empty
  let text;
  if (x == "") {
    text = "Email must be filled out";
    document.getElementById("email").style.border = "thick solid red";
  } else {
    text = "Email OK";
    document.getElementById("email").style.border = "thick solid green";
  }
  document.getElementById("emailVali").innerHTML = text;
}

//age
function myFunctionAge() {
  // Get the value of the input field with id="Age"
  let x = document.getElementById("Age").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 100) {
    text = "Age not valid";
    document.getElementById("Age").style.border = "thick solid red";
  } else {
    text = "Age OK";
    document.getElementById("Age").style.border = "thick solid green";
  }
  document.getElementById("ageVali").innerHTML = text;
}