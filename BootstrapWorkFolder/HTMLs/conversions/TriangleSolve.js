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
            side1 = parseFloat(comp1.value);
            ang3 = parseFloat(comp2.value);
            side2 = parseFloat(comp3.value);
            side3 = lawOfCos(side1, ang3, side2);
            ang2 = lawOfCosSides(side1, side3, side2);
            ang1 = 180.0 - ang2 - ang3;
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
            ang2 = parseFloat(comp1.value);
            side1 = parseFloat(comp2.value);
            ang3 = parseFloat(comp3.value);
            ang1 = 180.0 - ang2 - ang3;
            side2 = lawOfSin(side1, ang1, ang2);
            side3 = lawOfSin(side1, ang1, ang3);
            if(checkDimensions(side1, side2, side3) || checkAnglesNeg(ang1, ang2, ang3) || checkSidesNeg(side1, side2, side3)){
                error.hidden="";
                clearOutput();
            }
            else{
                error.hidden="hidden";
                setOuput(side1, side2, side3, ang1, ang2, ang3);
            }
            break;
        
        case "AAS":
            ang1 = parseFloat(comp1.value);
            ang2 = parseFloat(comp2.value);
            side1 = parseFloat(comp3.value);
            ang3 = 180.0 - ang1 - ang2;
            side2 = lawOfSin(side1, ang1, ang2);
            side3 = lawOfSin(side1, ang1, ang3);
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
}

function setup(){
    var comp1 = document.getElementById("Component1");
    var comp2 = document.getElementById("Component2");
    var comp3 = document.getElementById("Component3");
    var solve = document.getElementById("solve");
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
            unHide();
            break;

        case "SAS":
            comp1.placeholder = "Side 1";
            comp2.placeholder = "Angle 3";
            comp3.placeholder = "Side 2";
            unHide();
            break;

        case "ASA":
            comp1.placeholder = "Angle 2";
            comp2.placeholder = "Side 1";
            comp3.placeholder = "Angle 3";
            unHide();
            break;
        
        case "AAS":
            comp1.placeholder = "Angle 1";
            comp2.placeholder = "Angle 2";
            comp3.placeholder = "Side 1";
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
    comp1.hidden="hidden";
    comp2.hidden="hidden";
    comp3.hidden="hidden";
    comp1.value = "";
    comp2.value = "";
    comp3.value = "";
    var error = document.getElementById("errorLabel");
    error.hidden = "hidden";
    clearOutput();
}