// select the elements that get acted on

const heading = document.querySelector('h1');
const btn = document.querySelector('#generate');
const body = document.querySelector('body');

//write change color change function

const Change = () => {
    // generate random number into a function
    const random = () => Math.floor(Math.random() * 255 + 1);
    // run function for each number in rgb value
    const generated = `rgb(${random()}, ${random()}, ${random()})`;
    // change text of heading to the color being generated
    heading.innerHTML = generated;
    // change background color of the body to the generated rgb value
    body.style.backgroundColor = generated;
}

//make changes to both heading and background color

btn.addEventListener('click', Change)