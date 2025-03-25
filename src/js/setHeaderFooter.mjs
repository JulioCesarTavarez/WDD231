async function bannerImage(parkData) {


  const bannerImage = document.getElementById("hero-banner__image");

  bannerImage.src = parkData.images[0].url;

}

export async function mainHeader(parkData){
  bannerImage(parkData);
  const mainTitle = document.getElementById("mainTitle");
  const div = document.createElement("div");
  div.classList.add("main-header");
  div.innerHTML = `<h1 class = "main-park-name">${parkData.fullName}</h1>
                  <p class = "park-description">${parkData.description}</p>`;

  mainTitle.appendChild(div);
}


async function makeFooter(parkData){
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

export async function setHeaderFooter(parkData) {
  // mainHeader(parkData);
  makeFooter(parkData);
  bannerImage(parkData);
}

