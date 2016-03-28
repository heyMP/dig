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
