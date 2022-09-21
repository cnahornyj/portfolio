let navigation = document.querySelector("nav");

function myFunction(x) {
  if (x.matches) {
    navigation.innerHTML = "";
    navigation.setAttribute("id","responsible-navigation");
    navigation.innerHTML += `
    <span>
    Clara<br />
    NAHORNYJ
    </span>
    <img src="assets/img/menu-icon.svg" alt="" class="menu-icon" />`
    // <ul>
    //   <li><a href="index.html">ACCUEIL</li>
    //   <li><a href="aboutme.html">A PROPOS</a></li>
    //   <li><a href="achievements.html">RÉALISATIONS</a></li>
    //   <li><a href="contactme.html">CONTACTEZ MOI</a></li>
    // </ul>;
  } else {
    navigation.removeAttribute("id");
    navigation.innerHTML = "";
    navigation.innerHTML += ` <ul>
     <li>
       Clara<br />
       NAHORNYJ
     </li>
     <li class="push">ACCUEIL</li>
     <li><a href="aboutme.html">A PROPOS</a></li>
     <li><a href="achievements.html">RÉALISATIONS</a></li>
     <li><a href="contactme.html">CONTACTEZ MOI</a></li>
   </ul>`;
  }
}

var x = window.matchMedia("(max-width: 895px)");
myFunction(x); //
x.addListener(myFunction);

// let selectDestination = document.querySelector("#select-destination");

// selectDestination.addEventListener("click", (e) => {
//     console.log("Cliqué !");
// })
