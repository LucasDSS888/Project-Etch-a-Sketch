const container = document.querySelector(".container");


for(let i=0; i < 16; i++) {

    const colum = document.createElement("div");
    colum.classList.add("colum");

    // div.setAttribute("style", "color: blue; background: red; padding: 10px; flex-wrap: wrap;");

    container.appendChild(colum);


   
}

liColum = document.querySelectorAll(".colum");

console.log(liColum);



liColum.forEach(element => {
    for(let i = 0; i <16; i++) {
        const line = document.createElement("div");
        line.classList.add("line");
        element.appendChild(line);
    }
});