(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var viewportUnitsRepaint = require('./viewportUnitsRepaint.js');
var threejs_example = require('./threejs_example.js');
var typed = require('./typed.js');

(function ($) {
  'use strict';

  // MenuToggle
  if (typeof Drupal != 'undefined') {
    Drupal.behaviors.repaintSlickbanner = {
      attach: function (context, settings) {
        viewportUnitsRepaint($('.slickheader__title'));
      }
    };
  }
  else {
    $(document).ready(function() {
      // threejs_example();
      typed();
    });
  }

})(jQuery);

},{"./threejs_example.js":2,"./typed.js":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
module.exports = function() {

	$('*[data-typed]').each(function() {
		var strings = [];
		var element = $(this);

		element.find('*[data-typed-text]').each(function() {
			var text = $(this).html();
			$(this).remove();
			strings.push(text);
		});

		element.typed({
			strings: strings,
			typeSpeed: 50,
			startDelay: 2000,
			contentType: 'html' // or 'text'
		});

		console.log(strings);
  });
};

},{}]},{},[1]);
