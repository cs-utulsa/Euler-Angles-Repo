//UI part
const inverseArea = document.getElementById("inverseArea");
const goButton = document.getElementById("goButton");

goButton.addEventListener("click", makeGrid);

function makeGrid() {
    var size = document.getElementById("userInput").value;

    while(inverseArea.firstChild){
        inverseArea.removeChild(inverseArea.firstChild);
    }

    if(size < 2 || size > 10) {
        inverseArea.innerHTML = "Please Enter A Valid Size.";
    } else {
        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                let node = document.createElement("input");
                node.setAttribute("name", "matrixValue");
                node.setAttribute("type", "text");
                node.setAttribute("id", "in" + i + "_" + j);
                node.setAttribute("size", 4);
                inverseArea.appendChild(node);
            }
            inverseArea.appendChild(document.createElement("br"));
    
        }
        
    }
}

//Calculations

const calcButton = document.getElementById("calculate");
const closeButton = document.getElementById("closeModal");
const answerBox = document.getElementById("answerBox");
closeButton.addEventListener("click", reset);
calcButton.addEventListener("click", matrix_inverse);
var calcCount = 0;

function matrix_inverse(){
    
    var matrix_values = document.getElementsByName("matrixValue");
    var num_rows = document.getElementById("userInput").value;
    var rows_int = parseInt(num_rows);
    const m = new THREE.Matrix4();

    m.fromArray(Array.from(matrix_values));

    const inverse = m.invert();
    
    let output = document.createTextNode("Inverse:   ");
    let num = document.createTextNode(inverse);

    if(calcCount > 0) {
        while(answerBox.firstChild){
            answerBox.removeChild(answerBox.firstChild);
        }
    }

    answerBox.appendChild(output);
    answerBox.appendChild(num);

    calcCount++;


}

function reset() {
    calcCount = 0;

    while(answerBox.firstChild){
        answerBox.removeChild(answerBox.firstChild);
    }
}