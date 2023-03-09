//need to put this file in the html and create the output 
const calcButton = document.getElementById("calculate");
calcButton.addEventListener("click", matrix_determinant);

function matrix_determinant(){

    var matrix_values = document.getElementsByName("matrixValue");
    //or if this doesn't work, loop through w/ get ElementsByID
    var num_rows = document.getElementById("userInput").value;
    var A = math.matrix();
    A.resize([num_rows, num_rows]);
    var k = 0;
    for(i = 0; i < num_rows; i++){
        for(j = 0; j < num_rows; j++) {
            A.subset(math.index(i, j), matrix_values[k].value);
            k++;
        }
    }
   
    const determinant = math.det(A);

    const display = document.getElementById("detSolution");
    display.innerText = determinant;

    //need to get this output to the html

    // create matrix object?? or class?
    

}





