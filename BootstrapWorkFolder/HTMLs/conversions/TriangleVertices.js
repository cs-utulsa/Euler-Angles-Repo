
    const calcButton = document.getElementById("VetButton");
    calcButton.addEventListener("click",setup);


function setup(){
    let V1x = parseFloat(document.getElementById("V1xAxisInput").value);
    let V1y = parseFloat(document.getElementById("V1yAxisInput").value);
    let V2x = parseFloat(document.getElementById("V2xAxisInput").value);
    let V2y = parseFloat(document.getElementById("V2yAxisInput").value);
    let V3x = parseFloat(document.getElementById("V3xAxisInput").value);
    let V3y = parseFloat(document.getElementById("V3yAxisInput").value);

    let sidea = Sidea(V1x,V1y,V2x,V2y,V3x,V3y);
    let sideb = Sideb(V1x,V1y,V2x,V2y,V3x,V3y);
    let sidec = Sidec(V1x,V1y,V2x,V2y,V3x,V3y);
    const angAlpha =  angleAlpha(V1x,V1y,V2x,V2y,V3x,V3y);
    const angleBet = angleBetta(V1x,V1y,V2x,V2y,V3x,V3y);
    const angleGa = angleGamma(V1x,V1y,V2x,V2y,V3x,V3y);
    const per = perimeter(sidea,sideb,sidec);
    const Area = area(V1x,V1y,V2x,V2y,V3x,V3y);

    

    setOuput(sidea,sideb,sidec,angAlpha,angleBet,angleGa,per,Area);
   
}

function Sidea(V1x,V1y,V2x,V2y,V3x,V3y){
    return((Math.sqrt(((V3x-V2x)*(V3x-V2x))+((V3y-V2y)*(V3y-V2y)))).toFixed(2));
}
function Sideb(V1x,V1y,V2x,V2y,V3x,V3y){
    return((Math.sqrt((((V3x-V1x)*(V3x-V1x))+((V3y-V1y)*(V3y-V1y))))).toFixed(2));
}
function Sidec(V1x,V1y,V2x,V2y,V3x,V3y){
    return((Math.sqrt(((V2x-V1x)*(V2x-V1x))+((V2y-V1y)*(V2y-V1y)))).toFixed(2));    
}

function perimeter(a,b,c) {
    let A = parseFloat(a);
    let B = parseFloat(b);
    let C = parseFloat(c);

    let sum = A + B + C;
         
    return(sum.toFixed(2));
}
function angleAlpha(V1x,V1y,V2x,V2y,V3x,V3y){
    const abx = (V2x - V1x);
    const aby = (V2y - V1y);
    const acx = (V3x - V1x);
    const acy = (V3y - V1y);
    const AbAc = ((abx * acx)+(aby*acy));
    const AB = Math.sqrt((Math.pow(abx,2))+(Math.pow(aby,2)));
    const AC = Math.sqrt((Math.pow(acx,2))+(Math.pow(acy,2)));

    return(((57.2957795)*(Math.acos(AbAc/(AB*AC)))).toFixed(2));
}
function angleGamma(V1x,V1y,V2x,V2y,V3x,V3y){
    const cax = (V1x -V3x);
    const cay = (V1y -V3y);
    const cbx = (V2x -V3x);
    const cby = (V2y -V3y);
    const cacb = ((cax*cbx)+(cay*cby));
    const CA = Math.sqrt((Math.pow(cax,2))+(Math.pow(cay,2)));
    const CB = Math.sqrt((Math.pow(cbx,2))+(Math.pow(cby,2)));

    return(((57.2957795)*(Math.acos(cacb/(CA*CB)))).toFixed(2));
}
function angleBetta(V1x,V1y,V2x,V2y,V3x,V3y){

    const bax = (V1x -V2x);
    const bay = (V1y -V2y);
    const bcx = (V3x -V2x);
    const bcy = (V3y -V2y);
    const babc = ((bax*bcx)+(bay*bcy));
    const BA = Math.sqrt((Math.pow(bax,2))+(Math.pow(bay,2)));
    const BC = Math.sqrt((Math.pow(bcx,2))+(Math.pow(bcy,2)));

    return(((57.2957795)*(Math.acos(babc/(BA*BC)))).toFixed(2));    

}
function area(V1x,V1y,V2x,V2y,V3x,V3y){
    return((Math.abs((0.5)*(((V1x-V3x)*(V2y-V3y))-((V1y-V3y)*(V2x-V3x))))).toFixed(0));
}

function  setOuput(sidea,sideb,sidec,angAlpha,angleBet,angleGa,per,Area){
    
    

    document.getElementById("Sidea").innerText = sidea;
    document.getElementById("Sideb").innerText = sideb;
    document.getElementById("Sidec").innerText = sidec;
    document.getElementById("Angle1").innerText = angAlpha;
    document.getElementById("Angle2").innerText = angleBet;
    document.getElementById("Angle3").innerText = angleGa;
    document.getElementById("Perimeter").innerText = per;
    document.getElementById("Area").innerText = Area;
}



