/* A project, is a collection of problems; right?
/ And you've gotta solve at least ONE programming problem daily; right?
Dissect shit, it'll make your life easier. */

const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resizeBtn');

createGrid(16);

function changeColor(square) {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "red";
    })
}

function createGrid(size) {
    let squareDims = `${size}px`;
    let gridWidth = `${size * size}px`;
    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.toggle('square-div');
        newDiv.style.cssText = `width: ${squareDims}; height: ${squareDims}`;
        container.style.width = gridWidth;
        container.append(newDiv);
    }
    const squareDivs = document.querySelectorAll('.square-div');

    squareDivs.forEach(changeColor);
}

resizeBtn.addEventListener('click', () => {
    let gridSize = Number(prompt("Enter grid size (e.g. 16 for a 16x16 grid)"));
    if (gridSize > 100) {
        alert("Grids of size 100x100 and higher would be way too hard on the computer.")
    }
    else {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        createGrid(gridSize);
    }
})


// To change the size of the grid; 
// change the i in the loop, width of the container and square-div width and height
