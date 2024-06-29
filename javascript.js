function setGrid(x, y){
    const container = document.querySelector(".container");


    for(let i=1; i <= x; i++) {

        const colum = document.createElement("div");
        colum.classList.add("colum");

        // div.setAttribute("style", "color: blue; background: red; padding: 10px; flex-wrap: wrap;");

        container.appendChild(colum);


    
    }

    liColum = document.querySelectorAll(".colum");

    liColum.forEach(element => {
        for(let i = 1; i <= y; i++) {
            const line = document.createElement("div");
            line.classList.add("line");
            element.appendChild(line);
        }
    });

    function paint(){
        liLine = document.querySelectorAll(".line");

        liLine.forEach(element => {
            element.addEventListener("mouseover", () => {
                element.setAttribute("style", "background: red;");
            });
        });
    }
    
    paint();


}

setGrid(16, 16);




