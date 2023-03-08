const determinantArea = document.getElementById("determinantArea");
const goButton = document.getElementById("goButton");

goButton.addEventListener("click", makeGrid);

function makeGrid() {
    var size = document.getElementById("userInput").value;

    while(determinantArea.firstChild){
        determinantArea.removeChild(determinantArea.firstChild);
    }

    if(size < 2 || size > 10) {
        determinantArea.innerHTML = "Please Enter A Valid Size.";
    } else {
        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                let node = document.createElement("input");
                node.setAttribute("type", "text");
                node.setAttribute("id", "in" + i + "_" + j);
                node.setAttribute("size", 4);
                determinantArea.appendChild(node);
            }
            determinantArea.appendChild(document.createElement("br"));
    
        }
    }
}