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
    description.setAttribute("class", "resume");
    container.setAttribute("class", "container");
    btns.setAttribute("class", "btns");
    demoBtn.classList.add("btn-ach", "demo");
    codeBtn.classList.add("btn-ach", "code");
  }
}

renderAchievements();

async function renderLanguages() {
  let filters = await getAchievements();
  let arrOfLanguages = [];

  for (const filter of filters) {
    for (let i = 0; i < filter.languages.length; i++) {
      arrOfLanguages.push(filter.languages[i]);
    }
  }
  let arrayOfLanguages = [...new Set(arrOfLanguages)];

  console.log(arrayOfLanguages);

  let selectFilter = document.querySelector("#opt-languages");

  for(let i = 0; i < arrayOfLanguages.length; i++) {
    let option = document.createElement("li");
    selectFilter.appendChild(option);
    option.innerText = arrayOfLanguages[i];
  }
}

renderLanguages();
