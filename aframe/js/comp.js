AFRAME.registerComponent('json-image-loader', {
  init: function () {
    var verses = [ 'thingies/beblm.png',
                    'thingies/beige.png',
                    'thingies/bluewatering.png',
                    'thingies/claybowl.png',
                     'thingies/compost.png',
                     'thingies/cephskin.png',
                     'thingies/onpic.png',
                     'thingies/opurple.png'
                   ];

      var sceneEl = document.querySelector('a-scene');

      var els = sceneEl.querySelectorAll('a-obj-model');


      for (var i = 0; i < els.length; i++) {
        // for (var j = 0; j < els.length; j++) {
        var random= Math.floor(Math.random() * 8) + 0;
        var thingies = verses[random];
        els[i].setAttribute('material', {src:thingies});
        els[i].setAttribute('material', {transparent:true});
        // console.log(els[i]);
      }
    // }

      // sceneEl.querySelector('a-box').setAttribute('material', {src:gurl});
      // sceneEl.querySelector('a-box').setAttribute('material', {transparent:true});
    }
});
