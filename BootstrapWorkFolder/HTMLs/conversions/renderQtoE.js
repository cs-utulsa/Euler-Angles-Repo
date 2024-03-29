

//For Quaternion to Euler angles and their rotation




var userSpeed = .005; //adjust this for rotation speed
var isFinished = false; //triggers animation stopping 


//input boxes
const Xbox = document.getElementById("xAxisInput");
const Ybox = document.getElementById("yAxisInput");
const Zbox = document.getElementById("zAxisInput");
const Wbox = document.getElementById("wAxisInput");
const ele = document.getElementsByName('QinlineRadioOptions');

var calcButton = document.getElementById("btn2");
var UserOrder = ""; //user input (controlled by buttons)

for(i = 0; i < ele.length; i++) {
  if(ele[i].checked)
    UserOrder = ele[i].value;
  }

var UserX = 0, UserY = 0, UserZ = 0, UserW = 0;//user input

//prerendering business

const camera = new THREE.PerspectiveCamera(45, 400 / 400, 1, 1000);
const scene = new THREE.Scene();
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;
camera.lookAt(scene.position);

const loader = new THREE.TextureLoader();

const textureCube =  loader.load('cubeSide.png');

const geometry = new THREE.BoxGeometry( 0.4, 0.4, 0.4 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureCube } );

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const axesHelper = new THREE.AxesHelper( 5 ); 
scene.add( axesHelper );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( 800, 800 );
container = document.getElementById( "RenderContainer1" );
container.appendChild(renderer.domElement);


//button event listener to restart the animation
calcButton.addEventListener("click", function rerun(){
    mesh.rotation.x = 0;
    mesh.rotation.y = 0;
    mesh.rotation.z = 0;
    UserX = Xbox.value, UserY = Ybox.value, UserZ = Zbox.value, UserW = Wbox.value;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
          UserOrder = ele[i].value;	
    }
    isFinished = false;
    QuatToEuler();
    finalAnimate();
});



//button event listener to populate the rotation matrix and quaternion
function QuatToEuler(){
    const Quaternion = new THREE.Quaternion(UserX, UserY, UserZ, UserW);
    const Euler = new THREE.Euler().setFromQuaternion(Quaternion, UserOrder);
    const xEul = document.getElementById("Xeul").innerText = Euler.x.toFixed(4);
    const yEul = document.getElementById("Yeul").innerText = Euler.y.toFixed(4);  
    const zEul = document.getElementById("Zeul").innerText = Euler.z.toFixed(4);
    const displayMatrix = document.getElementById("rotTab2");
    const rotationMatrix = new Array(3);

    //for programming ease
    const cosX = Math.cos(Euler.x);
    const sinX = Math.sin(Euler.x);

    const cosY = Math.cos(Euler.y);
    const sinY = Math.sin(Euler.y);
    
    const cosZ = Math.cos(Euler.z);
    const sinZ = Math.sin(Euler.z);

    if(UserOrder == 'XZY'){

        rotationMatrix[0] = new Array(cosZ * cosY, -1 * sinZ, cosZ*sinY);
        rotationMatrix[1] = new Array(sinX*sinY + cosX*cosY*sinZ, cosX*cosZ, cosX*cosZ*cosY - cosY*sinX);
        rotationMatrix[2] = new Array(cosY*sinX*sinZ - cosX*sinY, cosZ*sinX, cosX*cosY + sinX*sinZ*sinY);
  
      }else if(UserOrder== 'XYZ'){
  
        rotationMatrix[0] = new Array(cosY*cosZ, -1*cosY*cosZ, sinY);
        rotationMatrix[1] = new Array(cosX*sinZ + cosZ*sinX*sinY, cosX*cosZ - sinX*sinY*sinZ, -1*cosY*sinX);
        rotationMatrix[2] = new Array(sinX*sinZ - cosX*cosZ*sinY, cosZ*sinX + cosX*sinY*sinZ, cosX*cosY);
  
      }else if(UserOrder == 'YXZ'){
        
        rotationMatrix[0] = new Array(cosY*cosZ + sinY*sinX*sinZ, cosZ*sinY*sinX - cosY*sinZ, cosX*sinY);
        rotationMatrix[1] = new Array(cosX*sinZ, cosX*cosZ, -1*sinX);
        rotationMatrix[2] = new Array(cosY*sinX*sinZ - cosZ*sinY, cosY*sinZ*sinX + sinY*sinZ, cosY*cosX);
  
      }else if(UserOrder == 'YZX'){
  
        rotationMatrix[0] = new Array(cosY*cosZ, sinY*sinX - cosY*cosX*sinZ, cosX*sinY + cosY*sinZ*sinX);
        rotationMatrix[1] = new Array(sinZ, cosZ*cosX, -1*cosZ*sinX);
        rotationMatrix[2] = new Array(-1*cosZ*sinY, cosY*sinX + cosX*sinY*sinZ, cosY*cosX - sinY*sinZ*sinX);
  
      }else if(UserOrder == 'ZYX'){
  
        rotationMatrix[0] = new Array(cosZ*cosY, cosZ*sinY*sinX - cosX*sinZ, sinZ*sinX + cosZ*cosX*sinY);
        rotationMatrix[1] = new Array(cosY*sinZ, cosZ*cosX + sinZ*sinY*sinX, cosX*sinZ*sinY - cosZ*sinX);
        rotationMatrix[2] = new Array(-1*sinY, cosY*sinX, cosY*cosX);
  
      }else if(UserOrder == 'ZXY'){
  
        rotationMatrix[0] = new Array(cosZ*cosY - sinZ*sinX*sinY, -1*cosX*sinZ, cosZ*sinY + cosY*sinZ*sinX);
        rotationMatrix[1] = new Array(cosY*sinZ + cosZ*sinX*sinY, cosZ*cosX, sinZ*sinY - cosZ*cosY*sinX);
        rotationMatrix[2] = new Array(-1*cosX*sinY, sinX, cosX*cosY);
  
      }

    for (var i = 0, row; row = displayMatrix.rows[i+1]; i++) { //displaying the values
      for (var j = 0, col; col = row.cells[j]; j++) {
        col.innerText = rotationMatrix[i][j].toFixed(4);
      }  
   }

}

 renderer.render(scene, camera);

 //this function applies and renders the specified rotation
 function finalAnimate(time){ 
    requestAnimationFrame(finalAnimate);
    var rotationSpeed = userSpeed;
    if(!isFinished){
        switch(UserOrder){
            case("XYZ"):
                if(Math.abs(mesh.rotation.x) < Math.abs(UserX)) (UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
                else if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) (UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
                else if(Math.abs(mesh.rotation.z) < Math.abs(UserZ)) (UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
                break;
            case("YZX"):
                if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) (UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
                else if(Math.abs(mesh.rotation.z) < Math.abs(UserZ)) (UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
                else if(Math.abs(mesh.rotation.x) < Math.abs(UserX)) (UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
                break;
            case("ZXY"):
                if(Math.abs(mesh.rotation.z) < Math.abs(UserZ)) (UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
                else if(Math.abs(mesh.rotation.x) < Math.abs(UserX)) (UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
                else if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) (UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
                break;
            case("XZY"):
                if(Math.abs(mesh.rotation.x) < Math.abs(UserX)) (UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
                else if(Math.abs(mesh.rotation.z) < Math.abs(UserZ)) (UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
                else if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) (UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
                break;
            case("ZYX"):
                if(Math.abs(mesh.rotation.z) < Math.abs(UserZ))(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
                else if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) (UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
                else if(Math.abs(mesh.rotation.x) < Math.abs(UserX)) (UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
                break;
            case("YXZ"):
                if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) (UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
                else if(Math.abs(mesh.rotation.x) < Math.abs(UserX))(UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
                else if(Math.abs(mesh.rotation.z) < Math.abs(UserZ))(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
                break;
            default:
                isFinished = true;

        }
    }
    renderer.render(scene, camera);
}
finalAnimate();
