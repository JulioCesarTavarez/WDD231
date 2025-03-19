export async function bannerImage() {
    const parkData = getParkData();

    const bannerImage = document.getElementById("hero-banner__image");

    bannerImage.src = parkData.images[0].url;

}


export function mainHeader(){

  const mainTitle = document.getElementById("mainTitle");
  const div = document.createElement("div");
  div.classList.add("main-header");
  div.innerHTML = `<h1 class = "main-park-name">${parkData.fullName}</h1>
                  <p class = "park-description">${parkData.description}</p>`;

  mainTitle.appendChild(div);
}