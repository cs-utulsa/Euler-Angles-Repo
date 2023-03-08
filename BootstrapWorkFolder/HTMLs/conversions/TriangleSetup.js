function setup(){
    var comp1 = document.getElementById("Component1");
    var comp2 = document.getElementById("Component2");
    var comp3 = document.getElementById("Component3");
    comp1.value="";
    comp2.value="";
    comp3.value="";
    var ele = document.getElementsByName('inlineRadioOptions');
    function unHide(){
        comp1.hidden="";
        comp2.hidden="";
        comp3.hidden="";
    }
    var theorem;
        for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            theorem = ele[i].value;
        }
    

    switch(theorem){
        case "SSS":
            comp1.placeholder = "Side 1";
            comp2.placeholder = "Side 2";
            comp3.placeholder = "Side 3";
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