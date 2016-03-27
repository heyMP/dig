module.exports = function() {
	var container = document.getElementById("threejs-example");
	var width = container.offsetWidth;
	var height = container.offsetHeight;
	var aspect = width / height;

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize(width, height);
	renderer.setClearColor( 0xffffff, 0);
	container.appendChild(renderer.domElement);

	var geometry = new THREE.BoxGeometry(1,1,1, 7,7,7);
	var material = new THREE.MeshBasicMaterial({
	  wireframe: true,
	  wireframeLinewidth: 2.5,
	  color: 0x000000
	});

	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 3

	function render() {
	  requestAnimationFrame(render);

	  cube.rotation.x += 0.01;
	  cube.rotation.y += 0.01;

	  renderer.render(scene, camera);
	}

	render();
};
