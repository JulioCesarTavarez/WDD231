import { getParkData } from "./parkService.mjs";


async function bannerImage() {
    const parkData = getParkData();

    const bannerImage = document.getElementById("hero-banner__image");

    bannerImage.src = parkData.images[0].url;
}

bannerImage();

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

async  function populateMain(data) {
    const card = document.querySelector("head> title").textContent = 
    document.querySelector("head > title").textContent = data.fullName;
    // set the banner image
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    // use the template function above to set the rest of the park specific info in the header
    document.querySelector(".hero-banner__content").innerHTML =
      parkInfoTemplate(data);
}

populateMain();

