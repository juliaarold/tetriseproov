/*
 * Author: Jerome Renaux
 * E-mail: jerome.renaux@gmail.com
 */


var Menu = {};

Menu.preload = function(){
    // kasutatavad fondid
    game.load.bitmapFont('gameover', 'assets/fonts/gameover.png', 'assets/fonts/gameover.fnt');
    game.load.bitmapFont('videogame', 'assets/fonts/videogame.png', 'assets/fonts/videogame.fnt'); // ttf-formaadist konverditud kasutades: http://kvazars.com/littera/
    game.load.bitmapFont('desyrel', 'assets/fonts/desyrel.png', 'assets/fonts/desyrel.xml');
    game.load.spritesheet('button', 'assets/start.png', 201, 71);
    game.load.audio('music','assets/sound/tetris.mp3'); // laetakse muusika
};

Menu.create = function(){
    var welcome = game.add.bitmapText(game.world.centerX, 100, 'gameover', 'TERE',64);
    welcome.anchor.setTo(0.5);
    placeSeparators();
    startButton(1);
    document.getElementById('keys').style.display = "flex";
    document.getElementById('cup').style.display = "block";
};

Menu.shutdown = function(){
    document.getElementById('keys').style.display = "none";
    document.getElementById('cup').style.display = "none";
};

// laetakse klahvide koodid
Menu.keyMaps = {
    13 : "ENTER",
    32 : "SPACEBAR",
    37 : "LEFT",
    38 : "UP",
    39 : "RIGHT",
    40 : "DOWN"
};

// vaikimise klahvid
Menu.defaultKeys = {
    rotateleft : "W",
    rotateright : "X",
    pause : "SPACEBAR",
    moveleft : "LEFT",
    moveright : "RIGHT",
    movedown : "DOWN"
};

// kui valitakse uus klahv, siis asendatakse olemasolev
Menu.updateKey = function(evt,id) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    // kui kasutatakse tähte
    var charStr = (charCode <= 40) ? this.keyMaps[charCode] : String.fromCharCode(charCode);
    // kui valitakse mõni klahv, mis on defineerimata
    if(typeof charStr === 'undefined'){
        charStr = this.defaultKeys[id];
    }
    document.getElementById(id).value = charStr;
};