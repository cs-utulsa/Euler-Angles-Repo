
const determinantBox = document.getElementById("determinantArea");
//const calcButton = document.getElementById("calculate"); //already declared in determinantUI.js
const closeButton = document.getElementById("closeModal");
const closeButton2 = document.getElementById("closeModal2");
const answerBox = document.getElementById("answerBox");
closeButton.addEventListener("click", reset);
calcButton.addEventListener("click", matrix_determinant);
var calcCount = 0;

function matrix_determinant(){
    
    var matrix_values = document.getElementsByName("matrixValue");
    var num_rows = document.getElementById("userInput").value;
    var rows_int = parseInt(num_rows);
    var A = math.matrix();
    A.resize([rows_int, rows_int]);
    var k = 0;
    for(i = 0; i < num_rows; i++){
        for(j = 0; j < num_rows; j++) {
            A.subset(math.index(i, j), matrix_values[k].value);
            k++;
        }
    }
    
    const determinant = math.det(A);
    
    let output = document.createTextNode("Determinant:   ");
    let num = document.createTextNode(determinant);

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

    calcButton.style.display = 'none';

    while(answerBox.firstChild){
        answerBox.removeChild(answerBox.firstChild);
    }
    while(determinantBox.firstChild) {
        determinantBox.removeChild(determinantBox.firstChild);
    }
}





