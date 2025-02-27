import { getParkData } from "./parkService.mjs";


async function bannerImage() {
    const parkData = getParkData();

    const bannerImage = document.getElementById("hero-banner__image");

    bannerImage.src = parkData.images[0].url;
}

bannerImage();