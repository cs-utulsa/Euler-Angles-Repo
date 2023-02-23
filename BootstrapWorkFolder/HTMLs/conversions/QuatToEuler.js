function EulerToQuat(){
    const Xbox = document.getElementById("X-axis");
    const Ybox = document.getElementById("Y-axis");
    const Zbox = document.getElementById("Z-axis");
    const Wbox = document.getElementById("wAxisInput");

    var x = Xbox.value;
    var y = Ybox.value;
    var z = Zbox.value;
    var w = Wbox.value;
    
    var order;

    var ele = document.getElementsByName('inlineRadioOptions');

    for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
        order = ele[i].value;
      }

    const Quaternion = new THREE.Quaternion(x, y, z, order);
    const Euler = new THREE.Euler().setFromQuaternion(Quaternion);

    const xEul = document.getElementById("Xeul");
    const yEul = document.getElementById("Yeul");
    const zEul = document.getElementById("Zeul");


    xEul.innerText = Euler.x.toFixed(4);
    yEul.innerText = Euler.y.toFixed(4);
    zEul.innerText = Euler.z.toFixed(4);
}