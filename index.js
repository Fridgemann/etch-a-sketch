/* A project, is a collection of problems; right?
/ And you've gotta solve at least ONE programming problem daily; right?
Dissect shit, it'll make your life easier. */

const container = document.querySelector('#container');



for (let i = 0; i < 625; i++) {
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


// To change the size of the grid; 
// change the i in the loop, width of the container and square-div width and height
