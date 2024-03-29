



//DEPRECIATED



function EulerToQuat(){
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

    const Euler = new THREE.Euler(x, y, z, order);
    const Quaternion = new THREE.Quaternion().setFromEuler(Euler);

    const xQuat = document.getElementById("xQuat");
    const yQuat = document.getElementById("yQuat");
    const zQuat = document.getElementById("zQuat");
    const wQuat = document.getElementById("wQuat");
    const displayMatrix = document.getElementById("rotTab1");


    xQuat.innerText = Quaternion.x.toFixed(4);
    yQuat.innerText = Quaternion.y.toFixed(4);
    zQuat.innerText = Quaternion.z.toFixed(4);
    wQuat.innerText = Quaternion.w.toFixed(4);

    //Rotation matrix (Tait-Bryan)
    const rotationMatrix = new Array(3);

    //for programming ease
    const cosX = Math.cos(x);
    const sinX = Math.sin(x);

    const cosY = Math.cos(y);
    const sinY = Math.sin(y);
    
    const cosZ = Math.cos(z);
    const sinZ = Math.sin(z);

    for (var i = 0, row; row = displayMatrix.rows[i+1]; i++) { //displaying the values
      for (var j = 0, col; col = row.cells[j]; j++) {
        col.innerText = rotationMatrix[i][j].toFixed(4);
      }  
   }
  }