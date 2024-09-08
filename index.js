/* A project, is a collection of problems; right?
/ And you've gotta solve at least ONE programming problem daily; right?
Dissect shit, it'll make your life easier. */

const container = document.querySelector('#container');



for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square-div');
    container.append(newDiv);
}

const squareDivs = document.querySelectorAll('.square-div');

squareDivs.forEach(changeColor);

function changeColor(square) {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "red";
    })
}
// 16 different containers within one container?