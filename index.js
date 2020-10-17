var jsgam=window.jsgam.default;

//Basic game configuration
var config={
  width:960, //Must be the same the image backgrounds
  height:540, //Must be the same the image backgrounds
  container:'JSGAM',
  //muteSound:true, //Optional, start the game without sounds
  //autoResize:false, //Optional, doesn't resize the game when the browser window changes
  //fitToContainer: true, //Optional, fits the game in its container. Useful if you want to insert the game into a part of your website.
  files:[
    //Add the path to the atlas JSONs files, the fonts and the JSON generated with the JSGAM Editor
    'data/imgs/spritesheet.json',
    'data/imgs/ui.json',
    'data/cutscenes/cutscenes.json',
    'data/backgrounds/backgrounds.json',
    'data/fonts/courgette.fnt',
    'data/fonts/courgette-regular-blue.fnt',
    'data/fonts/courgette-regular-green.fnt',
    'data/game.min.json'
  ]
};

new jsgam(config); //This command makes all the magic
