function EulerToQuat() {
    const Xbox = document.getElementById("X-axis");
    const Ybox = document.getElementById("Y-axis");
    const Zbox = document.getElementById("Z-axis");

    // const XYZ = document.getElementById("inlineRadio1");
    // const YZX = document.getElementById("inlineRadio2");
    // const ZXY = document.getElementById("inlineRadio3");
    // const XZY = document.getElementById("inlineRadio4");
    // const ZYX = document.getElementById("inlineRadio5");
    // const YXZ = document.getElementById("inlineRadio6");
    // const ZXZ = document.getElementById("inlineRadio7");
    // const XYX = document.getElementById("inlineRadio8");
    // const YZY = document.getElementById("inlineRadio9");
    // const ZYZ = document.getElementById("inlineRadio10");
    // const XZX = document.getElementById("inlineRadio11");
    // const YXY = document.getElementById("inlineRadio12");

    var x = Xbox.value;
    var y = Ybox.value;
    var z = Zbox.value;
    var order;

    var ele = document.getElementsByName('inlineRadioOptions');
    for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
        order = ele[i].value;
      }

    const Euler = new THREE.Euler( x, y, z, order);
    const Quaternion = new THREE.Quaternion().setFromEuler(Euler);

    const xQuat = document.getElementById("xQuat");
    const yQuat = document.getElementById("yQuat");
    const zQuat = document.getElementById("zQuat");
    const wQuat = document.getElementById("wQuat");
    xQuat.innerText = Quaternion.x.toFixed(4);
    yQuat.innerText = Quaternion.y.toFixed(4);
    zQuat.innerText = Quaternion.z.toFixed(4);
    wQuat.innerText = Quaternion.w.toFixed(4);
  
  }
function sup(){
  document.write("hey");
}