AFRAME.registerComponent('json-image-loader', {
  init: function () {
    var verses = [  'img/01.jpg',
                    // 'img/02.jpg',
                    // 'img/03.png',
                    // 'img/04.png',
                    'img/05.png',
                    'img/06.jpg'
                   ];

      var sceneEl = document.querySelector('a-scene');

      var els = sceneEl.querySelectorAll('a-obj-model');


      for (var i = 0; i < els.length; i++) {
        // for (var j = 0; j < els.length; j++) {
        var random= Math.floor(Math.random() * 3) + 0;
        var thingies = verses[random];
        els[i].setAttribute('material', {src:thingies});
        els[i].setAttribute('material', {transparent:true});
        console.log(els[i]);
      }
    // }

      // sceneEl.querySelector('a-box').setAttribute('material', {src:gurl});
      // sceneEl.querySelector('a-box').setAttribute('material', {transparent:true});
    }
});
