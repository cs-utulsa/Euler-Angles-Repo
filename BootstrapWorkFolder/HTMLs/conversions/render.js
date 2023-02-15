
			
			
			
			
			const Xbox = document.getElementById("X-axis");
			const Ybox = document.getElementById("Y-axis");
			const Zbox = document.getElementById("Z-axis");
			
			var UserX = .5, UserY = .5, UserZ = .5; //user input



			
			var UserOrder = "XYZ"; //user input (controlled by buttons)

			var ele = document.getElementsByName('inlineRadioOptions');

			for(i = 0; i < ele.length; i++) {
			  if(ele[i].checked)
				UserOrder = ele[i].value;
			  }
			var userSpeed = .005; //adjust this for rotation speed

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
			renderer.setSize( 400, 400 );
			container = document.getElementById( 'container' );
			container.appendChild(renderer.domElement);
			renderer.render(scene, camera);



			function finalAnimate(time){
				requestAnimationFrame(finalAnimate);
				var rotationSpeed = userSpeed;
				switch(UserOrder){
					
					case("XYZ"):

						if(Math.abs(mesh.rotation.x) < Math.abs(UserX)) {
							(UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) {
							(UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.z) < Math.abs(UserZ)) {  
							(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
						}
						break;

					case("YZX"):

						if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) {
							(UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.z) < Math.abs(UserZ)) {
							(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.x) < Math.abs(UserX)) {  
							(UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
						}
						break;

					case("ZXY"):

						if(Math.abs(mesh.rotation.z) < Math.abs(UserZ)) {
							(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.x) < Math.abs(UserX)) {
							(UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) {  
							(UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
						}
						break;

					case("XZY"):

						if(mesh.rotation.x < Math.abs(UserX)) {
							(UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
						}
						else if(mesh.rotation.z < Math.abs(UserZ)) {
							(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) {  
							(UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
						}
						break;

					case("ZYX"):

						if(Math.abs(mesh.rotation.z) < Math.abs(UserZ)) {
							(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) {
							(UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.x) < Math.abs(UserX)) {  
							(UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
						}
						break;

					case("YXZ"):
						
						if(Math.abs(mesh.rotation.y) < Math.abs(UserY)) {
							(UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.x) < Math.abs(UserX)) {
							(UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.z) < Math.abs(UserZ)) {  
							(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
						}
						break;
					
					default:

				}
				renderer.render(scene, camera);
			}
			finalAnimate();
