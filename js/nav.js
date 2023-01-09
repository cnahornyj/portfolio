let navigationDesktop = document.querySelector("nav");
const sectionNavMobile = document.querySelector("#section-nav-mobile");
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
    navigationDesktop.style.display = "none";
    sectionNavMobile.style.display = "flex";
  } else {
    /* Navbar desktop */
    navigationDesktop.style.display = "flex";
    sectionNavMobile.style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 895px)");
myFunction(x); //
x.addListener(myFunction);
