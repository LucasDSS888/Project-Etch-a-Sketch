let rgb = false;
let dark = false;


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

    function paint_black(){
        liSquare = document.querySelectorAll(".square");
        liSquare.forEach(element => {
            let opt = 0.1;
            element.addEventListener("mouseover", () => {
                if(dark){
                    element.setAttribute("style", `background: black; opacity: ${opt};`);
                    opt += 0.1;
                }else{
                    element.setAttribute("style", "background: black;");
                }
            });
        });
    }

    function paint_rgb(){

        liSquare = document.querySelectorAll(".square");
        liSquare.forEach(element => {
            let red = 255;
            let green = 0;
            let blue = 0;
            let opt = 0.1;
            element.addEventListener("mouseover", () => {
                function randomInteger(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                  }
                let red = randomInteger(0, 255);
                let green = randomInteger(0, 255);
                let blue = randomInteger(0, 255);

                if(dark){
                    element.setAttribute("style", `background: rgb(${red}, ${green}, ${blue}); opacity: ${opt};`);
                    opt += 0.1;
                }else{
                    element.setAttribute("style", `background: rgb(${red}, ${green}, ${blue});`);
                }
            });
        });
    }


    if(rgb){
        paint_rgb();
    }else{
        paint_black();
    }

    
    // paint_black();
    // paint_rgb(); 
    // paint_darkeningEffect();
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

const btn_rgb = document.querySelector('.btn_rgb');
const span_rgb = document.querySelector('.btn_rgb span');
btn_rgb.addEventListener('click', () => {
    
    liLine = document.querySelectorAll(".line");

    delGrid();
    

    if(document.querySelector('.btn_rgb span').innerText == 'OFF'){
        span_rgb.textContent = 'ON';
        rgb = true;
    }else{
        span_rgb.textContent = 'OFF';
        rgb = false
    }

    setGrid(liLine.length);
})

const btn_sha = document.querySelector('.btn_sha');
const span_sha = document.querySelector('.btn_sha span');
btn_sha.addEventListener('click', () => {
    
    liLine = document.querySelectorAll(".line");

    delGrid();
    

    if(document.querySelector('.btn_sha span').innerText == 'OFF'){
        span_sha.textContent = 'ON';
        dark = true;
    }else{
        span_sha.textContent = 'OFF';
        dark = false
    }

    setGrid(liLine.length);
})

