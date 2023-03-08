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
        
        function setOuput(){
            document.getElementById("side1").innerText = side1.toFixed(4);
            document.getElementById("side2").innerText = side2.toFixed(4);
            document.getElementById("side3").innerText = side3.toFixed(4);
            document.getElementById("angle1").innerText = ang1.toFixed(4);
            document.getElementById("angle2").innerText = ang2.toFixed(4);
            document.getElementById("angle3").innerText = ang3.toFixed(4);
        }
        
    switch(theorem){
        case "SSS":
            side1 = parseFloat(comp1.value);
            side2 = parseFloat(comp2.value);
            side3 = parseFloat(comp3.value);
            ang3 = lawOfCosSides(side1, side2, side3);
            ang2 = lawOfCosSides(side1, side3, side2);
            ang1 = 180.0 - ang2 - ang3;
            setOuput();
            break;

        case "SAS":
            side1 = parseFloat(comp1.value);
            ang3 = parseFloat(comp2.value);
            side2 = parseFloat(comp3.value);
            side3 = lawOfCos(side1, ang3, side2);
            ang2 = lawOfCosSides(side1, side3, side2);
            ang1 = 180.0 - ang2 - ang3;
            setOuput();
            break;

        case "ASA":
            ang2 = parseFloat(comp1.value);
            side1 = parseFloat(comp2.value);
            ang3 = parseFloat(comp3.value);
            ang1 = 180.0 - ang2 - ang3;
            side2 = lawOfSin(side1, ang1, ang2);
            side3 = lawOfSin(side1, ang1, ang3);
            setOuput();
            break;
        
        case "AAS":
            ang1 = parseFloat(comp1.value);
            ang2 = parseFloat(comp2.value);
            side1 = parseFloat(comp3.value);
            ang3 = 180.0 - ang1 - ang2;
            side2 = lawOfSin(side1, ang1, ang2);
            side3 = lawOfSin(side1, ang1, ang3);
            setOuput();
            break;
    }
}