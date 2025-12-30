const button = document.querySelector('button'); // it takes a button from html

const input1 = document.querySelector('.input1'); // it takes inputs
const input2 = document.querySelector('.input2'); // this also
const result = document.querySelector('.result');  // records the result


input1.addEventListener('change', (event) => {
    // change fires when the input loses focus by computer AND its value changed
})
input2.addEventListener('change', (event) => {
    // change fires when the input loses focus by computer AND its value changed
})

// for calculation, parseInt acts as a str to int as long as the input is an integer.
button.addEventListener('click', function() {
    const ans = parseInt(input1.value) + parseInt(input2.value); //adding them
    console.log(ans); //outputting the value
    result.innerText =`The Answer Is = ${ans}` // innerText means a element's in editing to the text

})

