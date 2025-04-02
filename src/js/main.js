import { getParkData, getParkLinks } from "./parkService.mjs";
import { setHeaderFooter, mainHeader } from "./setHeaderFooter.mjs";


let menuButtonValue = false;
const menubutton = document.getElementById("global-nav-toggle");

menubutton.addEventListener("click", toggleMenu);
function toggleMenu() {
  menuButtonValue = !menuButtonValue;
  let text = document.getElementById("menu-button_text");
  const globalNav = document.getElementById("global-nav");
  const menuButtonIcon = document.getElementById("menu-button-icon");
  
  if (menuButtonValue) {
      globalNav.classList.remove("open");
      menuButtonIcon.classList.remove("hide");
      text.textContent = "MENU";
  } else {
      text.textContent = "X CLOSE";
      globalNav.classList.add("open");
      menuButtonIcon.classList.add("hide");
  }
}
const planVisit = document.getElementById("planVisit");
const planVisit2 = document.getElementById("planVisit2");
const learnExplore = document.getElementById("learnExplore");
const getInvolved = document.getElementById("getInvolved");
let planVisitValue = false;
let planVisit2Value = false;
let learnExploreValue = false;
let getInvolvedValue = false;

planVisit.addEventListener("click", togglePlanVisit);
planVisit2.addEventListener("click", togglePlanVisit2);
learnExplore.addEventListener("click", toggleLearnExplore);
getInvolved.addEventListener("click", toggleGetInvolved);

function togglePlanVisit() {
  planVisitValue = !planVisitValue;
  const planVisitList = document.getElementById("planVisitList");
  let arrow = document.getElementById("planVisitArrow");
  if (planVisitValue) {
      planVisitList.classList.add("open");
      planVisitList.classList.remove("close");
      arrow.style.transform = "rotate(180deg)";
  } else {
      planVisitList.classList.remove("open");
      planVisitList.classList.add("close");
      arrow.style.transform = "rotate(0deg)";
  }
}
function togglePlanVisit2() {
  planVisit2Value = !planVisit2Value;
  const planVisit2List = document.getElementById("planVisit2List");
  let arrow = document.getElementById("planVisit2Arrow");
  if (planVisit2Value) {
      planVisit2List.classList.add("open");
      planVisit2List.classList.remove("close");
      arrow.style.transform = "rotate(180deg)";
  } else {
      planVisit2List.classList.remove("open");
      planVisit2List.classList.add("close");
      arrow.style.transform = "rotate(0deg)";
  }
}

function toggleLearnExplore() {
  learnExploreValue = !learnExploreValue;
  let arrow = document.getElementById("learnExploreArrow");
  const learnExploreList = document.getElementById("learnExploreList");
  if (learnExploreValue) {
      learnExploreList.classList.add("open");
      learnExploreList.classList.remove("close");
      arrow.style.transform = "rotate(180deg)";
  } else {
      learnExploreList.classList.remove("open");
      learnExploreList.classList.add("close");
      arrow.style.transform = "rotate(0deg)";
  }
}

function toggleGetInvolved() {
  getInvolvedValue = !getInvolvedValue;
  const getInvolvedList = document.getElementById("getInvolvedList");
  let arrow = document.getElementById("getInvolvedArrow");
  if (getInvolvedValue) {
      getInvolvedList.classList.add("open");
      getInvolvedList.classList.remove("close");
      arrow.style.transform = "rotate(180deg)";
  } else {
      getInvolvedList.classList.remove("open");
      getInvolvedList.classList.add("close");
      arrow.style.transform = "rotate(0deg)";
  }
}






async function init(){
  const parkData = await getParkData();
  const parkInfoLinks = await getParkLinks();

  mainHeader(parkData);
  // bannerImage(parkData);
  mainHolder(parkInfoLinks);
  // makeFooter(parkData);
  setHeaderFooter(parkData);
}

function mainHolder(data){

  for( let i = 0; i < data.length; i++){
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img class = "card-image" src="${data[i].image}" alt="${data[i].name}">
                    <a href="${data[i].link}"> <h2 class = "card-title">${data[i].name}</h2></a>
                    <p class = "card-description">${data[i].description}</p>`;
    main.appendChild(div);
  }
}



init();





