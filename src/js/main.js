import { getParkData } from "./parkService.mjs";


async function bannerImage() {
    const parkData = getParkData();

    const bannerImage = document.getElementById("hero-banner__image");

    bannerImage.src = parkData.images[0].url;
}

const parkData = await getParkData();

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: parkData.images[2].url,
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: parkData.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: parkData.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];

function mainHeader(){
  bannerImage();
  const mainTitle = document.getElementById("mainTitle");
  const div = document.createElement("div");
  div.classList.add("main-header");
  div.innerHTML = `<h1 class = "main-park-name">${parkData.fullName}</h1>
                  <p class = "park-description">${parkData.description}</p>`;

  mainTitle.appendChild(div);
}

function mainHolder(data){
  mainHeader();
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

mainHolder(parkInfoLinks);

function makeFooter(){
  const footer = document.querySelector("footer");
  let contact = document.createElement("h3");
  contact.classList.add("contact");
  contact.textContent = "Contact info";
  footer.appendChild(contact);

  let postalCode = parkData.addresses[1].postalCode;
  let city = parkData.addresses[1].city;
  let stateCode = parkData.addresses[1].stateCode;
  let line1 =  parkData.addresses[1].line1;
  let phone = parkData.contacts.phoneNumbers[0].phoneNumber;

  let div1 = document.createElement("div");
  div1.innerHTML = `<h3>Mailing Address</h3>
                    <p>${line1}</p>
                    <p>${city} ${stateCode} ${postalCode}</p>`;
  let div2 = document.createElement("div");
  div2.innerHTML = `<h3>Phone</h3>
                    <p> ${phone}</p>`;

  footer.appendChild(div1);
  footer.appendChild(div2);


}

makeFooter();





