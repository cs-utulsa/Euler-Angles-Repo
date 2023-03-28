
const determinantBox = document.getElementById("determinantArea");
const calcButton = document.getElementById("calculate");
calcButton.addEventListener("click", matrix_determinant); 

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

    determinantBox.appendChild(output);
    determinantBox.appendChild(num);

}



function matrix_inverse(){



}





