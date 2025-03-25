import { getParkDataCanyon, getVisitorCenterData, getAlertsData, getActivities } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
async function init() {
    const parkData = await getParkDataCanyon();
    setHeaderFooter(parkData);
    
}

init();

async function buildAlerts() {
    const alerts = await getAlertsData();
    let ul = document.querySelector("#alerts-section ul");
    for (let i = 0; i < alerts.length; i++) {
        let li = document.createElement("li");
        let use = "";
        let svg = "";
        let h3 = document.createElement("h3");

        if(alerts[i].category == "Caution"){
            h3.classList.add("alert-caution-h3");
            use = '<use  xlink:href="/images/sprite.symbol.svg#alert"></use>';
            svg = '<svg class="icon, alert-caution" role="presentation" focusable="false">' + use + '</svg>';
        }
        else if(alerts[i].category == "Park Closure"){
            h3.classList.add("alert-closure-h3");
            use = '<use" xlink:href="/images/sprite.symbol.svg#plus-sign"></use>';
            svg = '<svg class="icon, alert-closure" role="presentation" focusable="false">' + use + '</svg>';
        }
        else if(alerts[i].category == "Information"){
            h3.classList.add("alert-information-h3");
            use = '<use  xlink:href="/images/sprite.symbol.svg#info"></use>';
            svg = '<svg class="icon, alert-information" role="presentation" focusable="false">' + use + '</svg>';
        }
        
        li.innerHTML= svg;
        li.classList.add("alert-li");
        let div = document.createElement("div");
        let p = document.createElement("p");
        // let h3 = document.createElement("h3");
        h3.textContent = alerts[i].title;
        p.textContent = alerts[i].description;
        div.appendChild(h3);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    }
}
buildAlerts();

async function buildVisitorCenter() {
    let ul = document.getElementById("visitor-section-details");
    ul.classList.add("visitor-center-ul");

    const visiterCenter = await getVisitorCenterData()
    for (let i = 0; i < visiterCenter.length; i++) {
        let li = document.createElement("li");
        li.classList.add("visitor-center-li");

        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.classList.add("visitor-center-h3");
        h3.textContent = visiterCenter[i].name;
        let p = document.createElement("p");
        p.textContent = visiterCenter[i].description;

        div.appendChild(h3);
        div.appendChild(p);

        li.appendChild(div);
        ul.appendChild(li);

    }


    let ul_activities = document.getElementById("activities-ul");
    ul_activities.classList.add("activities-ul");
    console.log(visiterCenter);
    const activities = await getActivities();
    for(let i = 0; i < activities.length; i++){
        let li = document.createElement("li");
        li.classList.add("activities-li");
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.textContent = activities[i].name;

        div.appendChild(p);

        li.appendChild(div);
        ul_activities.appendChild(li);
    }


}

buildVisitorCenter();