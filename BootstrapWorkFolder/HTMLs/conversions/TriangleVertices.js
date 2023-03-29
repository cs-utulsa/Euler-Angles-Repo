function setup(){
    const V1x = document.getElementById("V1xAxisInput");
    const V1y = document.getElementById("V1yAxisInput");
    const V2x = document.getElementById("V2xAxisInput");
    const V2y = document.getElementById("V2yAxisInput");
    const V3x = document.getElementById("V3xAxisInput");
    const V3y = document.getElementById("V3yAxisInput");

    var sidea = Sidea(V1x,V1y,V2x,V2y,V3x,V3y);
    var sideb = Sideb(V1x,V1y,V2x,V2y,V3x,V3y);
    var sidec = Sidec(V1x,V1y,V2x,V2y,V3x,V3y);
    var angAlpha =  angleAlpha(V1x,V1y,V2x,V2y,V3x,V3y);
    var angleBet = angleBetta(V1x,V1y,V2x,V2y,V3x,V3y);
    var angleGa = angleGamma(V1x,V1y,V2x,V2y,V3x,V3y);
    var per = perimeter(sidea,sideb,sidec);
    var Area = area(V1x,V1y,V2x,V2y,V3x,V3y);

    

    setOuput(sidea,sideb,sidec,angAlpha,angleBet,angleGa,per,Area);
   
}

function Sidea(V1x,V1y,V2x,V2y,V3x,V3y){
    return(math.sqrt(((V3x-V2x)*(V3x-V2x))+((V3y-V2y)*(V3y-V2y))));
}
function Sideb(V1x,V1y,V2x,V2y,V3x,V3y){
    return(math.sqrt(((V3x-V1x)*(V3x-V1x))+((V3y-V1y)*(V3y-V1y))));
}
function Sidec(V1x,V1y,V2x,V2y,V3x,V3y){
    return( math.sqrt(((V2x-V1x)*(V2x-V1x))+((V2y-V1y)*(V2y-V1y))));    
}

function perimeter(a,b,c) {
    return(a + b+ c);
}
function angleAlpha(V1x,V1y,V2x,V2y,V3x,V3y){
    var abx = (V2x - V1x);
    var aby = (V2y - V1y);
    var acx = (V3x - V1x);
    var acy = (V3y - V1y);
    var AbAc = ((abx * acx)+(aby*acy));
    var AB = math.sqrt((math.pow(abx,2))+(math.pow(aby,2)));
    var AC = math.sqrt((math.pow(acx,2))+(math.pow(acy,2)));

    return(math.acos(AbAc/(AB*AC)));
}
function angleGamma(V1x,V1y,V2x,V2y,V3x,V3y){
    var cax = (V1x -V3x);
    var cay = (V1y -V3y);
    var cbx = (V2x -V3x);
    var cby = (V2y -V3y);
    var cacb = ((cax*cbx)+(cay*cby));
    var CA = math.sqrt((math.pow(cax,2))+(math.pow(cay,2)));
    var CB = math.sqrt((math.pow(cbx,2))+(math.pow(cby,2)));

    return(math.acos(cacb/(CA*CB)));
}
function angleBetta(V1x,V1y,V2x,V2y,V3x,V3y){

    var bax = (V1x -V2x);
    var bay = (V1y -V2y);
    var bcx = (V3x -V2x);
    var bcy = (V3y -V2y);
    var babc = ((bax*bcx)+(bay*bcy));
    var BA = math.sqrt((math.pow(bax,2))+(math.pow(bay,2)));
    var BC = math.sqrt((math.pow(bcx,2))+(math.pow(bcy,2)));

    return(math.acos(babc/(BA*BC)));    

}
function area(V1x,V1y,V2x,V2y,V3x,V3y){
    return(math.abs(1/2(((V1x-V3x)*(V2y-V3y))-((V1y-V3y)*(V2x-V3x)))));
}

function  setOuput(sidea,sideb,sidec,angAlpha,angleBet,angleGa,per,Area){
    document.getElementById("Sidea").innerText = sidea.toFixed(4);
    document.getElementById("Sideb").innerText = sideb.toFixed(4);
    document.getElementById("Sidec").innerText = sidec.toFixed(4);
    document.getElementById("Angle1").innerText = angAlpha.toFixed(4);
    document.getElementById("Angle2").innerText = angleBet.toFixed(4);
    document.getElementById("Angle3").innerText = angleGa.toFixed(4);
    document.getElementById("Perimeter").innerText = per.toFixed(4);
    document.getElementById("Area").innerText = Area.toFixed(4);
}



