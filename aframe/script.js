if (navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)) {  
  document.documentElement.className += " safari";
}


//-------------- old loop 

// const elems = document.getElementsByv("insert");

// const images = ['img/config.png','img/onpic.png','img/plantplastic.png','img/prepillowcreature.png'];

// for (var c in images) {
//   for (var i = 0; i < elems.length; i++) {
//     elems[i].src = images[c];
//  }
// }

//-----------------------


// var targetArea = document.getElementsByClassName("scene");

//-------------------------

var array1 = ['img/pinkpatch.png','img/pinkpatch.png','img/chairshark.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/chairshark.png','img/chairshark.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/pinkpatch.png','img/sponge3.gif','img/sponge3.gif'];


var array2 = ['img/plob1.gif','img/plob1.gif','img/plob1.gif','img/plob1.gif','img/plob1.gif','img/purplepatch.png','img/metaltape.png','img/mintwashu.png','img/pinkbowlsid.png','img/bubblerock.png','img/claybowl.png','img/claybowl.png','img/plob1.gif','img/chairshark.png','img/purplepatch.png','img/rock1.png'];

var array3 = ['img/bowlsponge.png','img/bowlsponge.png','img/bowlsponge.png','img/spong5.gif','img/spong5.gif','img/spong5.gif','img/spong5.gif','img/spong4.gif','img/spong4.gif','img/spong4.gif','img/spong4.gif','img/spong4.gif','img/spong4.gif','img/spong4.gif','img/spong10.gif','img/weightcol.png','img/weightcol.png','img/weightcol.png','img/spong10.gif','img/bowlsponge.png','img/sponge4.gif','img/sponge4.gif','img/sponge4.gif','img/spongerock.png','img/spongerock.png','img/weightcol.png'];

var array4 = ['img/beigbowl.png','img/beigbowl.png','img/beigbowl.png','img/beigbowl.png','img/beigbowl.png','img/beigbowl.png','img/typealoe.png','img/googly2.gif','img/opurple.png','img/typealoe.png','img/typealoe.png','img/weightcol.png','img/opurple.png','img/opurple.png','img/beblm.png','img/opurple.png','img/opurple.png','img/opurple.png','img/opurple.png','img/plantplastic.png','img/plantplastic.png']

var array5 = ['img/typbroommm.png','img/typbroommm.png','img/typbroommm.png','img/typbroommm.png','img/typbroommm.png','img/posters.png','img/typbroommm.png','img/typbroommm.png','img/typbroommm.png','img/purplerock.png','img/purplerock.png','img/purplerock.png','img/sponges.png','img/sponges.png','img/cephskin.png']

function createthingy(array){
  
  main = document.createElement('div');
  main.className = "main";
  containerdiv = document.createElement('div');
  containerdiv.className = "scene";
  plant = document.createElement('div');
  plant.className = "plant";
  for (var c in array) {  
    var div = document.createElement('div');
    div.className = "img";
    containerdiv.appendChild(div)
    var div2 = document.createElement('div');
    div2.className = "img__content";
    var myImage = new Image();
    myImage.src = array[c]
    div2.appendChild(myImage)
    div.appendChild(div2)
    plant.appendChild(div);
    containerdiv.appendChild(plant);
    main.appendChild(containerdiv)
    document.body.appendChild(main)
    
  }
}

const arrayoptions = [array1, array2, array3, array4, array5]


const insertarry = () => {
   return Math.floor(Math.random() * Math.floor(arrayoptions.length));
}

//by having arrayoptions.length, it means that we can continually fluxuate the number of arrays passing through array options, without having to update the values in this function. 

createthingy(arrayoptions[insertarry()])

//this is where we pass the random arry chosen in the arrayoptions function, into the consructorofthe3dthingy function createthingy











