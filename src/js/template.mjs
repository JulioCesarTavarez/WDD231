// function mainHolder(data){
//     mainHeader();
//     for( let i = 0; i < data.length; i++){
//       const main = document.querySelector("main");
//       const div = document.createElement("div");
//       div.classList.add("card");
//       div.innerHTML = `<img class = "card-image" src="${data[i].image}" alt="${data[i].name}">
//                       <a href="${data[i].link}"> <h2 class = "card-title">${data[i].name}</h2></a>
//                       <p class = "card-description">${data[i].description}</p>`;
//       main.appendChild(div);
//     }
//   }

// // templates.mjs
// export function alertTemplate(alert) {
//   let alertType = "";
 
//   switch (alert.category) {
//     case "Park Closure":
//       alertType = "closure";
//       break;
//     default:
//       alertType = alert.category.toLowerCase();
//   }
//   return `<li class="alert">
//   <svg class="icon" focusable="false" aria-hidden="true">
//     <use xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use>
//   </svg>
//   <div>
//     <h3 class="alert-${alertType}">${alert.title}</h3>
//     <p>${alert.description}</p>
//   </div></li>`;
// }
