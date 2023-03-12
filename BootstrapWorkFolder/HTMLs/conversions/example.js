var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

//document.body.append(canvas);

var scene, renderer, mesh;
  
function roundUp(numToRound, multiple)
{
    var value = multiple;
    while(value < numToRound) {
      value = value * multiple;
    }
    return value;
}

function addText(text, fontSize) {
  
  // 2d duty
  context.font = fontSize + "px Arial";
 
  
  metrics = context.measureText(text);
  console.log(metrics);
  
  var textWidth = roundUp(metrics.width+20.0, 2);
  var textHeight = roundUp(fontSize+10.0, 2);
    
  canvas.width = textWidth;
  canvas.height = textHeight;
  
  context.font = "bold " + fontSize + "px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "#ff0000";
  context.fillText(text, textWidth / 2, textHeight / 2);

  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  
  var material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.DoubleSide
    //color: 0xffffff,
    //useScreenCoordinates: false
  });
  
  console.log("textw: " + textWidth, "texth: " + textHeight);
  

  
  mesh = new THREE.Mesh(new THREE.PlaneGeometry(textWidth/60, textHeight/60, 10, 10), material);
      
  mesh.position.y = 5;
  mesh.position.z = 5;
  mesh.position.x = 0;
  
  return mesh;
}


$(document).ready(function() {
  
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({
    alpha: false,
    antialias: true
  });
  
  h = $(window).height();
  w = $(window).width();

  camera = new THREE.PerspectiveCamera(75, parseFloat(w) / parseFloat(h), 0.1, 5000);
  
  
  console.log("w: " + w + " | h: " + h);
  renderer.setSize(w, h);

  $('body').append(renderer.domElement);

  text = addText("it really works!!", 50);
  
  scene.add(text);

  camera.rotation.x = -1.05;
  camera.position.y = 10;
  camera.position.z = 10;
  
  var gridHelper = new THREE.GridHelper( 10, 10, new THREE.Color('red') );
  scene.add( gridHelper );
  
  // start rendering
  requestAnimationFrame(render);
});

// render the whole things up
function render() {
  
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
  
}