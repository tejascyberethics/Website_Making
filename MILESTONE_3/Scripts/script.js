
// Nodes
// Actions
// Visibility
// Events
// Rendering

//
// "use strict";
//
// const nav = document.querySelector("nav");
// const menu = document.querySelector("div");
// const btn = document.querySelector("button");
//
// btn.textContent="Menu";
// menu.textContent="Home | Class | About";
//
// menu.style.display = "none";
//
//
//
// btn.addEventListener("click", () => {
//     if (menu.style.display === "none") {
//         menu.style.display = "block";
//     } else{
//         menu.style.display = "none";
//     }
// })



"use strict";

const nav = document.querySelector("nav");
const menu = document.createElement("div")
// const menu = document.querySelector("div");
let mnu = []
const btn = document.querySelector("button");
btn.style.display = "";
let check = document.querySelector(".check");

check.style.display = "none";

console.log(check.innerText)


for (let i=0;i<3;i++) { //added 1st for loop for defining arrays
    let x = document.createElement("a") //already know but insted of in a single var. its on a array 'i'th times
    mnu.push(x) //this pushes the array and adds new info
}
for (let j=0;j<3;j++) { //now this makes the real info in the website appear
    menu.appendChild(mnu[j]) //adds a element to the visible web on the Jth element of N.
    mnu[j].style.display="block";
    mnu[j].style.padding="2px";
}




if (check.innerText == "home") {
    mnu[0].style.display="none";
    mnu[1].style.display="block";
    mnu[2].style.display="block";

    mnu[1].textContent="contact us";
    mnu[1].href= "./Pages/contact_us.html";

    mnu[2].textContent="about";
    mnu[2].href= "./Pages/about.html";

} else if (check.innerText == "contact") {
    mnu[0].style.display="block";
    mnu[1].style.display="none";
    mnu[2].textContent="about";

    mnu[2].textContent="about";
    mnu[2].href= "./about.html";

    mnu[0].textContent="home";
    mnu[0].href= "../index.html";
} else if (check.innerText == "about") {
    mnu[0].style.display="block";
    mnu[1].style.display="block";
    mnu[2].style.display="none";

    mnu[1].textContent="contact us";
    mnu[1].href= "./contact_us.html";

    mnu[0].textContent="home";
    mnu[0].href= "../index.html";
}



menu.style.display = "none"

nav.appendChild(menu)

let x = document.createElement("p")


btn.textContent="Menu";
// menu.textContent="Home | Class | About";

// menu.style.display = "none";



btn.addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else{
        menu.style.display = "none";
    }

    // if (menu.style.display === "none") {
    //     menu.style.display = "block";
    // } else{
    //     menu.style.display = "none";
    // }
})

