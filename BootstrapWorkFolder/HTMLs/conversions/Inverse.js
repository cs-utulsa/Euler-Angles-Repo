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
    var A = math.matrix();
    A.resize([rows_int, rows_int]);
    var k = 0;
    for(i = 0; i < num_rows; i++){
        for(j = 0; j < num_rows; j++) {
            A.subset(math.index(i, j), matrix_values[k].value);
            k++;
        }
    }

    //check det first
    const determinant = math.det(A);
    let output, num;
    if(determinant == 0){
        output = document.createTextNode("Inverse does not exist.  ");
        num = document.createTextNode("Determinant = 0.");


        if(calcCount > 0) {
            while(answerBox.firstChild){
                answerBox.removeChild(answerBox.firstChild);
            }
        }
    
        answerBox.appendChild(output);
        answerBox.appendChild(num);
    
        calcCount++;

    } else {
        output = document.createTextNode("Inverse:   ");
        let invertedMatrix = math.inv(A);


        if(calcCount > 0) {
            while(answerBox.firstChild){
                answerBox.removeChild(answerBox.firstChild);
            }
        }
    
        answerBox.appendChild(output);
        answerBox.appendChild(document.createElement("br"));

        for(i = 0; i < num_rows; i++) {
            let node1 = document.createElement("output");
            node1.innerText = "[ ";
            answerBox.appendChild(node1);
            for(let j = 0; j < num_rows; j++) {
                let node = document.createElement("output");
                node.setAttribute("name", "matrixValue");
                node.setAttribute("type", "textbox");
                node.setAttribute("id", "in" + i + "_" + j);
                node.innerText = invertedMatrix.subset(math.index(i,j)).toFixed(2);
                answerBox.appendChild(node);
                if(j != num_rows-1){
                    let node_space = document.createElement("output");
                    node_space.innerText = '\xa0\xa0\xa0';
                    answerBox.appendChild(node_space);
                }
    
            }
            let node2 = document.createElement("output");
            node2.innerText = "]";
            answerBox.appendChild(node2);
            answerBox.appendChild(document.createElement("br"));
    
        } 


    
        calcCount++;
    

    }

}



function reset() {
    calcCount = 0;

    while(answerBox.firstChild){
        answerBox.removeChild(answerBox.firstChild);
    }
}