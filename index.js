const container = document.querySelector('#container');

for (let i = 0; i < 282 * 20; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add("square-div");
    container.appendChild(newDiv);
}

// I feel like 25px to 25px sizes are good for boxes for etch a sketch style
// project but I've gotta find a way to fit these boxes in a screen