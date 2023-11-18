window.onload = clearGrid();
let brushColor = "black";
function makeGrid(size){
    const area = document.querySelector("#grid");
    area.innerHTML = "";
    for(let i=1; i<=size; i+=1){
        const colDiv = document.createElement("div");
        colDiv.classList.add("column");
        for(let j=1; j<=size; j+=1){
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row");
            rowDiv.style.border = "1px solid whitesmoke";
            // rowDiv.textContent = `${i}, ${j}`;
            // rowDiv.addEventListener("mouseenter", ()=>rowDiv.style["backgroundColor"]=brushColor);
            ['mouseenter','touchmove', 'touchstart'].forEach( evt =>
                rowDiv.addEventListener(evt, ()=>rowDiv.style["backgroundColor"]=brushColor)
                );
            colDiv.appendChild(rowDiv);
        }
        area.appendChild(colDiv);
    }
}

function clearGrid(){
    const area = document.querySelector("#grid");
    area.innerHTML = "";
    makeGrid(16)
}

const red = document.querySelector("#red");
red.addEventListener("click", ()=>brushColor="red");
const blue = document.querySelector("#blue");
blue.addEventListener("click", ()=>brushColor="blue");
const green = document.querySelector("#green");
green.addEventListener("click", ()=>brushColor="green");
const black = document.querySelector("#black");
black.addEventListener("click", ()=>brushColor="black");
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", ()=>brushColor="white");

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);
const size16 = document.querySelector("#size16");
const size32 = document.querySelector("#size32");
const size64 = document.querySelector("#size64");
size16.addEventListener("click", ()=>makeGrid(16));
size32.addEventListener("click", ()=>makeGrid(32));
size64.addEventListener("click", ()=>makeGrid(64));