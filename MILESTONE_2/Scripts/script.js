// Object.assign(document.body.style,{ //for css styling of body
//     color:'red', //txt color red
//     cursor:'pointer', //cursor at any clickable item will be a pointer aka default curson for systems
//     backgroundImage:"url(./images/BG_IMG.png)", // adds bg img
//     backgroundRepeat: 'no-repeat', //ENSURES THAT THE BG DOES NOT REPEAT TO COVER THE WHOLE SCREEN
//     backgroundPosition: 'center', // ENSURES THAT THE BACKGROUND POSTION IS ON CENTER.
//     backgroundSize: 'cover' // ENSURES THE BACKGROUND IMAGE COVERS THE ENTIRE ELEMENT'S AREA, SCALING AND CROPPING AS NECESSARY TO FILL THE SPACE WITHOUT STRETCHING THE IMAGE.
//     // backgroundPositionX: '50%', // BACKGROUD X POS
//     backgroundPositionY: '5%', // BACKGROUD Y POS
// })
//

let x = document.createElement("h1") // creates a DOM element and stores a reference in x
document.body.appendChild(x)// attaches x to the DOM so it becomes visible and managed by the browser. now it is physical
x.innerHTML="X" // edits the text INNER HTML. MEANING IT EDITS THE TXT TO OUR DESIRED OUTPUT TO THE PHYSICAL ELEMENT

// for (let n = 0; n < 5; n++) {    // just see the syntax of for loop
//     let n = document.createElement("span") // again the previous one
//     document.body.appendChild(n) // again
//     document.body.appendChild(document.createElement("br")) //this is intersting. insted of assigning a value of x and then making a DOM and then making appended to the html. it makes a element named <br> on the DOM, then instantly it adds to the thing
//     for (let j = 0; j < 5; j++) {
//         n.innerHTML = j
//         // j++
//     }
// }

let n = []; // made arrays
for (let i=0;i<5;i++) { //added 1st for loop for defining arrays
    n[i] = document.createElement("p") //already know but insted of in a single var. its on a array 'i'th times
    n.push(n[i]) //this pushes the array and adds new info
}
for (let j=0;j<5;j++) { //now this makes the real info in the website appear
    document.body.appendChild(n[j]) //adds a element to the visible web on the Jth element of N.
    n[j].innerHTML=`TXT ${j}` //just defines some txt
}
console.log(n)



//if one txt of the cloned DOM is created. and its edited. it makes the text same for all
// What was confusing before is now clear: loops don’t store values, they only repeat actions. When I kept updating innerHTML inside a loop, I wasn’t creating multiple outputs — I was overwriting the same DOM element again and again, so only the last value survived. DOM elements are meant for display, not for holding sequences of data. That’s where arrays come in: arrays store multiple values (x[n]), and loops are used to fill those arrays. Once the data exists in an array, the DOM’s job is only to render it. Separating storage (arrays) from presentation (DOM) makes the logic predictable and removes the “illogical” behavior I was seeing.
//to append arrays we use (array_name.push(smth))