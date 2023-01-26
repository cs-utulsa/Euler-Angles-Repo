
			var UserX = .5, UserY = .5, UserZ = -.5; //user input
			var UserOrder = "XYZ"; //user input (controlled by buttons)
			var userSpeed = .01; //adjust this for rotation speed

			const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
			const scene = new THREE.Scene();

			camera.position.x = .75;
			camera.position.y = .75;
			camera.position.z = .75;
			camera.lookAt(scene.position);


			const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
			const material = new THREE.MeshNormalMaterial();

			const mesh = new THREE.Mesh( geometry, material );
			scene.add( mesh );


			const axesHelper = new THREE.AxesHelper( 5 ); 
			scene.add( axesHelper );

			const renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

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

						if(mesh.rotation.x < .5) {
							(UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
						}
						else if(mesh.rotation.z < .5) {
							(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.y) < .5) {  
							(UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
						}
						break;

					case("ZYX"):

						if(Math.abs(mesh.rotation.z) < .5) {
							(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.y) < .5) {
							(UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.x) < .5) {  
							(UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
						}
						break;

					case("YXZ"):
						
						if(Math.abs(mesh.rotation.y) < .5) {
							(UserY < 0) ? mesh.rotation.y -= rotationSpeed : mesh.rotation.y += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.x) < .5) {
							(UserX < 0) ? mesh.rotation.x -= rotationSpeed : mesh.rotation.x += rotationSpeed;
						}
						else if(Math.abs(mesh.rotation.z) < .5) {  
							(UserZ < 0) ? mesh.rotation.z -= rotationSpeed : mesh.rotation.z += rotationSpeed;
						}
						break;
				}
				renderer.render(scene, camera);
			}
			finalAnimate();
