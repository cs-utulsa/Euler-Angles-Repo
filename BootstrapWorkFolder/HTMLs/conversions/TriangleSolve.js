var side1; 
var side2; 
var side3; 
var ang1; 
var ang2; 
var ang3;
var theorem;
var ele = document.getElementsByName('inlineRadioOptions');

    for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
        theorem = ele[i].value;
      }
    
switch(theorem){
    case "SSS":
        

        break;

    case "SAS":


        break;

    case "ASA":


        break;
    
    case "AAS":



        break;
}