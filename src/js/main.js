import { getParkData, getParkLinks } from "./parkService.mjs";
import { setHeaderFooter, mainHeader } from "./setHeaderFooter.mjs";

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





