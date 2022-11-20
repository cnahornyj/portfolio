let navigation = document.querySelector("nav");
const responsiveNav = document.querySelector("#responsibleNav");
const image = document.querySelector("#icon-menu");
const list = document.querySelector("nav:nth-child(2)");

function toggleListVisibility(e) {
  if (e.type === "click") {
    list.classList.toggle("navOpen");
  }
}

image.addEventListener("click", (e) => toggleListVisibility(e));

function closeList() {
  list.classList.remove("navOpen");
}

function myFunction(x) {
  if (x.matches) {
    /* Navbar responsive */
    navigation.style.display = "none";
    responsiveNav.style.display = "flex";
  } else {
    /* Navbar desktop */
    navigation.style.display = "flex";
    responsiveNav.style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 895px)");
myFunction(x); //
x.addListener(myFunction);
