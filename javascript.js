function setGrid(x){
    const container = document.querySelector(".container");


    for(let i=1; i <= x; i++) {

        const line = document.createElement("div");
        line.classList.add("line");

        // div.setAttribute("style", "color: blue; background: red; padding: 10px; flex-wrap: wrap;");

        container.appendChild(line);
    }

    liLine = document.querySelectorAll(".line");

    liLine.forEach(element => {
        for(let i = 1; i <= x; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            element.appendChild(square);
        }
    });

    function paint(){
        liSquare = document.querySelectorAll(".square");
        liSquare.forEach(element => {
            element.addEventListener("mouseover", () => {
                element.setAttribute("style", "background: red;");
            });
        });
    }
    paint();
}

setGrid(4);

function newGrid() {
    let x = prompt('Set new grid: ');
    setGrid(x);
}

function delGrid() {
    liLine.forEach(element => {
        element.remove();
    });
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    delGrid();
    newGrid();
})