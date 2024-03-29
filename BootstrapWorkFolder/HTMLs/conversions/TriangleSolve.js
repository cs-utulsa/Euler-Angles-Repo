function lawOfCosSides(s1, s2, s3){
    var ratio = (((s3*s3)-(s1*s1)-(s2*s2)) / (-2.0*s1*s2));
    var pi = Math.PI;
    return Math.acos(ratio) * (180.0/pi);
}

function lawOfCos(s1, a3, s2){
    var pi = Math.PI;
    var angle = a3 * (pi/180);
    var side = Math.sqrt( ((s1*s1) + (s2*s2) - (2*s1*s2*Math.cos(angle))) );
    return side;
}

function lawOfSin(s1, a1, a2){
    var pi = Math.PI;
    var angle1 = a1 * (pi/180);
    var angle2 = a2 * (pi/180);
    return (s1 * (Math.sin(angle2)/Math.sin(angle1)));
}

function setOuput(side1, side2, side3, ang1, ang2, ang3){
    document.getElementById("side1").innerText = side1.toFixed(4);
    document.getElementById("side2").innerText = side2.toFixed(4);
    document.getElementById("side3").innerText = side3.toFixed(4);
    document.getElementById("angle1").innerText = ang1.toFixed(4);
    document.getElementById("angle2").innerText = ang2.toFixed(4);
    document.getElementById("angle3").innerText = ang3.toFixed(4);
}

function clearOutput(){
    document.getElementById("side1").innerText = 0;
    document.getElementById("side2").innerText = 0;
    document.getElementById("side3").innerText = 0;
    document.getElementById("angle1").innerText = 0;
    document.getElementById("angle2").innerText = 0;
    document.getElementById("angle3").innerText = 0;
}
function checkDimensions(side1, side2, side3){
    if(side1>side2 || side1>=side3 || side2>side3 || side1+side2<=side3){
        return true;
    }
    else{
        return false;
    }
}

function checkSidesNeg(side1, side2, side3){
    if(side1<=0 || side2<=0 || side3<=0){
        return true;
    }
    else {
        return false;
    }
}

function checkAnglesNeg(ang1, ang2, ang3){
    if(ang1<=0 || ang2<=0 || ang3<=0){
        return true;
    }
    else {
        return false;
    }
}
function roundUp(numToRound, multiple)
{
    var value = multiple;
    while(value < numToRound) {
      value = value * multiple;
    }
    return value;
}
function solve(){
    var side1= 0.0; 
    var side2 = 0.0; 
    var side3 = 0.0; 
    var ang1; 
    var ang2; 
    var ang3;
    var theorem;
    var comp1 = document.getElementById("Component1");
    var comp2 = document.getElementById("Component2");
    var comp3 = document.getElementById("Component3");
    var ele = document.getElementsByName('inlineRadioOptions');
        for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            theorem = ele[i].value;
        }
    var error = document.getElementById("errorLabel");
    var firstAngle;
    var secondAngle;
    var thirdAngle;
    var firstSide;
    var secondSide;
    var thirdSide;

    switch(theorem){
        case "SSS":
            side1 = parseFloat(comp1.value);
            side2 = parseFloat(comp2.value);
            side3 = parseFloat(comp3.value);
            ang3 = lawOfCosSides(side1, side2, side3);
            ang2 = lawOfCosSides(side1, side3, side2);
            ang1 = 180.0 - ang2 - ang3;
            if(checkDimensions(side1, side2, side3)){
                error.hidden="";
                clearOutput();
            }
            else{
                error.hidden="hidden";
                setOuput(side1, side2, side3, ang1, ang2, ang3);
            }
            break;

        case "SAS":

            firstSide = parseFloat(comp1.value);
            firstAngle = parseFloat(comp2.value);
            secondSide = parseFloat(comp3.value);
            thirdSide = lawOfCos(firstSide, firstAngle, secondSide);
            secondAngle = lawOfCosSides(firstSide, secondSide, thirdSide);
            thirdAngle = 180.0 - firstAngle - secondAngle;

            if(firstAngle<secondAngle && firstAngle<thirdAngle){
                ang1 = firstAngle;
                if(secondAngle<thirdAngle){
                    ang2 = secondAngle;
                    ang3 = thirdAngle;
                }
                else{
                    ang3 = secondAngle;
                    ang2 = thirdAngle;
                }
            }

            else if(secondAngle<firstAngle && secondAngle<thirdAngle){
                ang1 = secondAngle;
                if(firstAngle<thirdAngle){
                    ang2 = firstAngle;
                    ang3 = thirdAngle;
                }
                else{
                    ang3 = firstAngle;
                    ang2 = thirdAngle;
                }
            }

            else{
                ang1 = thirdAngle;
                if(firstAngle<secondAngle){
                    ang2 = firstAngle;
                    ang3 = secondAngle;
                }
                else{
                    ang3 = firstAngle;
                    ang2 = secondAngle;
                }
            }
            //sides
            if(firstSide<secondSide && firstSide<thirdSide){
                side1 = firstSide;
                if(secondSide<thirdSide){
                    side2 = secondSide;
                    side3 = thirdSide;
                }
                else{
                    side3 = secondSide;
                    side2 = thirdSide;
                }
            }

            else if(secondSide<firstSide && secondSide<thirdSide){
                side1 = secondSide;
                if(firstSide<thirdSide){
                    side2 = firstSide;
                    side3 = thirdSide;
                }
                else{
                    side3 = firstSide;
                    side2 = thirdSide;
                }
            }

            else{
                side1 = thirdSide;
                if(firstSide<secondSide){
                    side2 = firstSide;
                    side3 = secondSide;
                }
                else{
                    side3 = firstSide;
                    side2 = secondSide;
                }
            }



            if(checkDimensions(side1, side2, side3) || checkAnglesNeg(ang1, ang2, ang3) || checkSidesNeg(side1, side2, side3)){
                error.hidden="";
                clearOutput();
            }
            else{
                error.hidden="hidden";
                setOuput(side1, side2, side3, ang1, ang2, ang3);
            }
            break;

        case "ASA":
            firstAngle = parseFloat(comp1.value);
            firstSide = parseFloat(comp2.value);
            secondAngle = parseFloat(comp3.value);
            thirdAngle = 180.0 - firstAngle - secondAngle;
            secondSide = lawOfSin(firstSide, thirdAngle, firstAngle);
            thirdSide = lawOfSin(firstSide, thirdAngle, secondAngle);
            if(firstAngle<secondAngle && firstAngle<thirdAngle){
                ang1 = firstAngle;
                if(secondAngle<thirdAngle){
                    ang2 = secondAngle;
                    ang3 = thirdAngle;
                }
                else{
                    ang3 = secondAngle;
                    ang2 = thirdAngle;
                }
            }

            else if(secondAngle<firstAngle && secondAngle<thirdAngle){
                ang1 = secondAngle;
                if(firstAngle<thirdAngle){
                    ang2 = firstAngle;
                    ang3 = thirdAngle;
                }
                else{
                    ang3 = firstAngle;
                    ang2 = thirdAngle;
                }
            }

            else{
                ang1 = thirdAngle;
                if(firstAngle<secondAngle){
                    ang2 = firstAngle;
                    ang3 = secondAngle;
                }
                else{
                    ang3 = firstAngle;
                    ang2 = secondAngle;
                }
            }
            //sides
            if(firstSide<secondSide && firstSide<thirdSide){
                side1 = firstSide;
                if(secondSide<thirdSide){
                    side2 = secondSide;
                    side3 = thirdSide;
                }
                else{
                    side3 = secondSide;
                    side2 = thirdSide;
                }
            }

            else if(secondSide<firstSide && secondSide<thirdSide){
                side1 = secondSide;
                if(firstSide<thirdSide){
                    side2 = firstSide;
                    side3 = thirdSide;
                }
                else{
                    side3 = firstSide;
                    side2 = thirdSide;
                }
            }

            else{
                side1 = thirdSide;
                if(firstSide<secondSide){
                    side2 = firstSide;
                    side3 = secondSide;
                }
                else{
                    side3 = firstSide;
                    side2 = secondSide;
                }
            }



            if(checkDimensions(side1, side2, side3)){
                error.hidden="";
                clearOutput();
            }
            else if(checkAnglesNeg(ang1, ang2, ang3)){
                error.hidden="";
                clearOutput();
            }
            else if(checkSidesNeg(side1, side2, side3)){
                error.hidden="";
                clearOutput();
            }
            else{
                error.hidden="hidden";
                setOuput(side1, side2, side3, ang1, ang2, ang3);
            }
            break;
        
        case "AAS":
            firstAngle = parseFloat(comp1.value);
            secondAngle = parseFloat(comp2.value);
            firstSide = parseFloat(comp3.value);
            thirdAngle = 180.0 - firstAngle - secondAngle;
            secondSide = lawOfSin(firstSide, firstAngle, secondAngle);
            thirdSide = lawOfSin(firstSide, firstAngle, thirdAngle);
            if(firstAngle<secondAngle && firstAngle<thirdAngle){
                ang1 = firstAngle;
                if(secondAngle<thirdAngle){
                    ang2 = secondAngle;
                    ang3 = thirdAngle;
                }
                else{
                    ang3 = secondAngle;
                    ang2 = thirdAngle;
                }
            }

            else if(secondAngle<firstAngle && secondAngle<thirdAngle){
                ang1 = secondAngle;
                if(firstAngle<thirdAngle){
                    ang2 = firstAngle;
                    ang3 = thirdAngle;
                }
                else{
                    ang3 = firstAngle;
                    ang2 = thirdAngle;
                }
            }

            else{
                ang1 = thirdAngle;
                if(firstAngle<secondAngle){
                    ang2 = firstAngle;
                    ang3 = secondAngle;
                }
                else{
                    ang3 = firstAngle;
                    ang2 = secondAngle;
                }
            }
            //sides
            if(firstSide<secondSide && firstSide<thirdSide){
                side1 = firstSide;
                if(secondSide<thirdSide){
                    side2 = secondSide;
                    side3 = thirdSide;
                }
                else{
                    side3 = secondSide;
                    side2 = thirdSide;
                }
            }

            else if(secondSide<firstSide && secondSide<thirdSide){
                side1 = secondSide;
                if(firstSide<thirdSide){
                    side2 = firstSide;
                    side3 = thirdSide;
                }
                else{
                    side3 = firstSide;
                    side2 = thirdSide;
                }
            }

            else{
                side1 = thirdSide;
                if(firstSide<secondSide){
                    side2 = firstSide;
                    side3 = secondSide;
                }
                else{
                    side3 = firstSide;
                    side2 = secondSide;
                }
            }
            

            if(checkDimensions(side1, side2, side3) || checkAnglesNeg(ang1, ang2, ang3) || checkSidesNeg(side1, side2, side3)){
                error.hidden="";
                clearOutput();
            }
            else{
                error.hidden="hidden";
                setOuput(side1, side2, side3, ang1, ang2, ang3);
            }
            break;
    }
    var ang1Dim = ang1;
    var ang2Dim = ang2;
    var ang3Dim = ang3;
    var side1Dim = side1;
    var side2Dim = side2;
    var side3Dim = side3;

    while(side1Dim > 3.0 || side2Dim > 3.0 || side3Dim > 3.0){
        side1Dim = side1Dim / 10.0;
        side2Dim = side2Dim / 10.0;
        side3Dim = side3Dim / 10.0;
    }

    // document.write(side1Dim + " " + side2Dim + " " + side3Dim);
    const renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setSize( 800, 800 );
    var a = new THREE.Vector3( 0, 0, 0 );
    var b = new THREE.Vector3( side1Dim, 0, 0 );
    var newAngle = 90.0-ang2Dim;
    var c;
    if(ang3==90.0){
        c = new THREE.Vector3( side1Dim, side2Dim, 0 );
    }
    else {
        c = new THREE.Vector3( side1Dim-lawOfSin(side2Dim,90.0,newAngle), lawOfSin(side2Dim,90.0,ang3Dim), 0);
    }
    // document.write(b.x + " " + b.y + " " + b.z);
    container = document.getElementById( 'RenderContainer' );
    container.appendChild(renderer.domElement);
    renderer.autoClear = true;
    renderer.autoClearColor = 'black';
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1000);
    camera.position.z = 1;
    const triangleGeometry = new THREE.Geometry();
    triangleGeometry.vertices.push(a);
    triangleGeometry.vertices.push(b);
    triangleGeometry.vertices.push(c);
    triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));

    const triangleMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000FF,
    side: THREE.DoubleSide
    });

    const triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
    scene.add(triangleMesh);
    renderer.render(scene, camera);

}

function setup(){
    var comp1 = document.getElementById("Component1");
    var comp2 = document.getElementById("Component2");
    var comp3 = document.getElementById("Component3");
    var solve = document.getElementById("solve");
    var theoremLabel = document.getElementById("theoremLabel");
    var ele = document.getElementsByName('inlineRadioOptions');
    var select = document.getElementById("select");
    var reset = document.getElementById("reset");
    var option1 = document.getElementById("inlineRadio1");
    var option2 = document.getElementById("inlineRadio2");
    var option3 = document.getElementById("inlineRadio3");
    var option4 = document.getElementById("inlineRadio4");
    var SSS = document.getElementById("SSS");
    var SAS = document.getElementById("SAS");
    var ASA = document.getElementById("ASA");
    var AAS = document.getElementById("AAS");
    select.hidden="hidden";
    option1.hidden="hidden";
    option2.hidden="hidden";
    option3.hidden="hidden";
    option4.hidden="hidden";
    SSS.hidden="hidden";
    SAS.hidden="hidden";
    ASA.hidden="hidden";
    AAS.hidden="hidden";
    reset.hidden="";
    function unHide(){
        comp1.hidden="";
        comp2.hidden="";
        comp3.hidden="";
        solve.hidden="";
        theoremLabel.hidden="";
    }
    var theorem;
        for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            theorem = ele[i].value;
        }
    

    switch(theorem){
        case "SSS":
            comp1.placeholder = "Shortest side";
            comp2.placeholder = "Middle side";
            comp3.placeholder = "Longest side";
            theoremLabel.innerText = "Side-Side-Side Theorem";
            unHide();
            break;

        case "SAS":
            comp1.placeholder = "Side";
            comp2.placeholder = "Angle";
            comp3.placeholder = "Side";
            theoremLabel.innerText = "Side-Angle-Side Theorem";
            unHide();
            break;

        case "ASA":
            comp1.placeholder = "Angle";
            comp2.placeholder = "Side";
            comp3.placeholder = "Angle";
            theoremLabel.innerText = "Angle-Side-Angle Theorem";
            unHide();
            break;
        
        case "AAS":
            comp1.placeholder = "Angle";
            comp2.placeholder = "Angle";
            comp3.placeholder = "Side";
            theoremLabel.innerText = "Angle-Angle-Side Theorem";
            unHide();
            break;
    }
}

function reset(){
    var reset = document.getElementById("reset");
    reset.hidden="hidden";
    var select = document.getElementById("select");
    select.hidden="";
    var solve = document.getElementById("solve");
    var comp1 = document.getElementById("Component1");
    var comp2 = document.getElementById("Component2");
    var comp3 = document.getElementById("Component3");
    var theoremLabel = document.getElementById("theoremLabel");
    var option1 = document.getElementById("inlineRadio1");
    var option2 = document.getElementById("inlineRadio2");
    var option3 = document.getElementById("inlineRadio3");
    var option4 = document.getElementById("inlineRadio4");
    var SSS = document.getElementById("SSS");
    var SAS = document.getElementById("SAS");
    var ASA = document.getElementById("ASA");
    var AAS = document.getElementById("AAS");

    option1.hidden="";
    option2.hidden="";
    option3.hidden="";
    option4.hidden="";
    SSS.hidden="";
    SAS.hidden="";
    ASA.hidden="";
    AAS.hidden="";
    option1.innerHTML="";
    solve.hidden = "hidden";
    comp1.hidden = "hidden";
    comp2.hidden = "hidden";
    comp3.hidden = "hidden";
    theoremLabel.hidden = "";
    theoremLabel.innerText = "Select Theorem";
    comp1.value = "";
    comp2.value = "";
    comp3.value = "";
    var error = document.getElementById("errorLabel");
    error.hidden = "hidden";
    clearOutput();
}


