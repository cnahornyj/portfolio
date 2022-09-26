async function getAchievements() {
  const url = "../assets/achievements.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderAchievements() {
  let achievements = await getAchievements();

  let achArticle = document.querySelector("#achievements");
  // let listOfAchievements = [];

  for (const achievement of achievements) {
    let card = document.createElement("div");
    let image = document.createElement("img");
    let container = document.createElement("div");
    let name = document.createElement("h3");
    let description = document.createElement("p");
    let btns = document.createElement("div");
    let demoBtn = document.createElement("button");
    let codeBtn = document.createElement("button");
    let demoLink = document.createElement("a");
    let codeLink = document.createElement("a");

    achArticle.appendChild(card);
    card.appendChild(image);
    card.appendChild(container);
    container.appendChild(name);
    container.appendChild(description);
    card.appendChild(btns);
    btns.appendChild(demoBtn);
    demoBtn.appendChild(demoLink);
    btns.appendChild(codeBtn);
    codeBtn.appendChild(codeLink);

    image.src = achievement.image;
    name.innerText = achievement.name;
    description.innerText = achievement.description;
    demoLink.setAttribute("href", achievement.demoLink);
    codeLink.setAttribute("href", achievement.codeLink);
    demoLink.setAttribute("target", "_blank");
    codeLink.setAttribute("target", "_blank");
    demoLink.innerText = "▶ DEMO";
    codeLink.innerText = "‹/› CODE SOURCE";

    card.setAttribute("class", "card");
    image.setAttribute("class", "img-achievement");
    description.setAttribute("class", "description_project");
    container.setAttribute("class", "container");
    btns.setAttribute("class", "btnsAchievement");
    demoBtn.classList.add("btnAch", "demo");
    codeBtn.classList.add("btnAch", "code");
  }

  const list = document.querySelector(".list");
  const listContainer = document.querySelector(".list-container");
  const dropdownArrow = document.querySelector(".arrow");
  const listFrameworks = document.querySelectorAll(".item");
  const dropdownSelected = document.querySelector(".selected");
  const filtersSelected = document.querySelector("#filtersSelected");

  function toggleListVisibility(e) {
    if (e.type === "click") {
      list.classList.toggle("open");
      dropdownArrow.classList.toggle("expanded");
      listContainer.setAttribute(
        "aria-expanded",
        list.classList.contains("open")
      );
    }
  }

  dropdownSelected.addEventListener("click", (e) =>
    toggleListVisibility(e)
  );

  // close dropdown list
  function closeList() {
    list.classList.remove("open");
    dropdownArrow.classList.remove("expanded");
    listContainer.setAttribute("aria-expanded", false);
  }

  // create filter in the section of filters
  function createFilter(framework) {
    let filter = document.createElement("span");
    filter.innerHTML = framework;
    filter.setAttribute("class", "filter");
    filtersSelected.appendChild(filter);
  }

  // apply filter on the list of achievements
  function applyFilter(filter) {
    achArticle.innerHTML = "";
    let listOfAchievements = [];

    for (let i = 0; i < achievements.length; i++) {
      for (let j = 0; j < achievements[i].languages.length; j++) {
        if (achievements[i].languages[j] === filter) {
          listOfAchievements.push(achievements[i]);
        }
      }
    }
    console.log(listOfAchievements);
    for (const achievement of listOfAchievements) {
      let card = document.createElement("div");
      let image = document.createElement("img");
      let container = document.createElement("div");
      let name = document.createElement("h3");
      let description = document.createElement("p");
      let btns = document.createElement("div");
      let demoBtn = document.createElement("button");
      let codeBtn = document.createElement("button");
      let demoLink = document.createElement("a");
      let codeLink = document.createElement("a");

      achArticle.appendChild(card);
      card.appendChild(image);
      card.appendChild(container);
      container.appendChild(name);
      container.appendChild(description);
      card.appendChild(btns);
      btns.appendChild(demoBtn);
      demoBtn.appendChild(demoLink);
      btns.appendChild(codeBtn);
      codeBtn.appendChild(codeLink);

      image.src = achievement.image;
      name.innerText = achievement.name;
      description.innerText = achievement.description;
      demoLink.setAttribute("href", achievement.demoLink);
      codeLink.setAttribute("href", achievement.codeLink);
      demoLink.setAttribute("target", "_blank");
      codeLink.setAttribute("target", "_blank");
      demoLink.innerText = "▶ DEMO";
      codeLink.innerText = "‹/› CODE SOURCE";

      card.setAttribute("class", "card");
      image.setAttribute("class", "img-achievement");
      description.setAttribute("class", "description_project");
      container.setAttribute("class", "container");
      btns.setAttribute("class", "btnsAchievement");
      demoBtn.classList.add("btnAch", "demo");
      codeBtn.classList.add("btnAch", "code");
    }

    /*
    let arrOfLanguages = [];
    for (const achievement of listOfAchievements) {
      for (let i = 0; i < listOfAchievements.languages.length; i++) {
        arrOfLanguages.push(listOfAchievements.languages[i]);
      }
    }
    let arrayOfLanguages = [...new Set(arrOfLanguages)];
    let selectFilter = document.querySelector(".list");
    selectFilter.innerHTML = "";
    for (let i = 0; i < arrayOfLanguages.length; i++) {
      let option = document.createElement("li");
      selectFilter.appendChild(option);
      option.innerText = arrayOfLanguages[i];
      option.setAttribute("class", "item");
    }
  */
  }

  // for every item in dropdown list of frameworks pass an event onclick
  for (const framework of listFrameworks) {
    framework.addEventListener("click", () => {
      let filter = framework.innerHTML;
      //console.log(filter);
      closeList();
      createFilter(filter);
      applyFilter(filter);
    });
  }
}

renderAchievements();
