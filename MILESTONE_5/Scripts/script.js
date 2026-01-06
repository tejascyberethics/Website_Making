// // "use strict";
// //
// // let x = document.createElement("button");
// // let box2 = document.createElement("div")
// // // box2.style.x="100px"
// // // box2.style.top="50px"
// // // box2.style.left="50px"
// // // box2.style.width = "50px";
// // // box2.style.height = "50px";
// // // box2.style.backgroundColor="red"
// // // box2.style.color = "red";
// // // box2.style.fontSize = "50px";
// // // box2.style.fontWeight = "bold";
// // // box2.style.color = "green";
// // // box2.style.fontSize = "50px";
// // // box2.style.fontWeight = "bold";
// // // box2.style.color = "red";
// // // box2.style.fontSize = "50px";
// // // box2.style.fontWeight = "bold";
// // // box2.style.color = "green";
// //
// // document.body.append(box2);
// //
// // x.innerHTML = "CLICK";
// // document.body.appendChild(x);
// // // x.onclick = () => {
// // //
// // // }
// //
// // x.addEventListener('click', function() {
// //     gsap.from(".box",{
// //         // transformOrigin: "50% 50%",
// //         backgroundColor: "red",
// //         opacity: 1,
// //         // y :500,
// //         x: 100,
// //         duration:1
// //     })
// // })
// //
//
//
// x = document.createElement('div')
// x.innerText = 'Hello World!'
// document.body.appendChild(x)
//
// x.style.opacity = '0'
//
// gsap.to(x, {
//     opacity: '1',
//     x:100,
//     duration: 2,
//     // rotateY: 20,
//     // rotateX: 30,
//     ease: 'easeInOut',
//     // gsap: 0.1,
// })
//

const nav = document.querySelector('nav');
const button = document.querySelector('.btn');
const menu = document.querySelector('.menu');

const attributes = document.querySelectorAll('a');

const CONSTRUCTION = document.querySelector('.CONSTRUCTION')

let menuItems = []

let w = document.getElementById('home');
menuItems.push(w)
let x = document.getElementById('about');
menuItems.push(x)
let y = document.getElementById('contact');
menuItems.push(y)
let z = document.getElementById('academy');
menuItems.push(z)

console.log(menuItems);

// STATE (single source of truth)
let menuOpen = false;

// INITIAL DOM SYNC
menu.style.display = 'none';

// EVENT → STATE → DOM
button.addEventListener('click', () => {
    menuOpen = !menuOpen; // toggle state

    if (menuOpen) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
    console.log(menuOpen);
});





// const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM"
// for (let i = 0; i < ; i++) {
//     // i wanna make a effect, that when i hover on a text. it looks like a glitch like. cryptography effect. for a second. with like this transition on hover -> hello to @el5o to @$j(@ to (E(!O to hello
// }



// menuOpen = false;
// if (menu.style.display === 'none') {
//     menuOpen = true;
// }else{
//     menuOpen = false;
// }
//
// button.addEventListener('click', function(){
//     if (menuOpen) {
//         menu.style.display = 'block';
//     }else{
//         menu.style.display = 'none';
//     }
// })













// button.addEventListener('click', function(){
//     menuItems.forEach(menuItem => {
//         if (menuItem.style.display === 'none'){
//             menuItem.style.display = 'block';
//         } else{
//             menuItem.style.display = 'none';
//         }
//     })
// })



// button.addEventListener('click', function(){
    // if(menu.style.display === 'none'){
    //     menu.style.display = 'flex';
    // }else{
    //     menu.style.display = 'none';
    // }

// })

// [a#home, a#about, a#contact, a#academy] DEFINED IN A ARRAY!