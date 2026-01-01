
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
// const menu = document.querySelector("div");
let mnu = []
const btn = document.querySelector("button");
btn.style.display = "";



for (let i=0;i<3;i++) { //added 1st for loop for defining arrays
    let x = document.createElement("a") //already know but insted of in a single var. its on a array 'i'th times
    mnu.push(x) //this pushes the array and adds new info
}
for (let j=0;j<3;j++) { //now this makes the real info in the website appear
    document.body.appendChild(mnu[j]) //adds a element to the visible web on the Jth element of N.
    mnu[j].style.padding="10px";
}

mnu[0].textContent="home";
mnu[1].textContent="contact us";
mnu[2].textContent="about";




let x = document.createElement("p")


btn.textContent="Menu";
// menu.textContent="Home | Class | About";

// menu.style.display = "none";



btn.addEventListener("click", () => {


    // if (menu.style.display === "none") {
    //     menu.style.display = "block";
    // } else{
    //     menu.style.display = "none";
    // }
})