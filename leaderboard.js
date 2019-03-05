/*
 * Author: Jerome Renaux
 * E-mail: jerome.renaux@gmail.com
 */


var Leaderboard = {};

Leaderboard.preload = function(){};

Leaderboard.create = function(){
    var ldb = game.add.bitmapText(game.world.centerX, 80, 'videogame', 'TULEMUSED',64);
    ldb.anchor.setTo(0.5);
    placeSeparators();
    var y_increment = 60;
    console.log(tulemus);
    var osad1=tulemus.split("//");
    game.add.bitmapText(50, 150, 'desyrel', osad1[0], 32);
    game.add.bitmapText(50, 210, 'desyrel', osad1[1], 32);   
    game.add.bitmapText(50, 270, 'desyrel', osad1[2], 32);
    game.add.bitmapText(50, 330, 'desyrel', osad1[3], 32);   
/*    for(j=0; j<(osad1.lenght);j++)
    {
            console.log("osa: "+j+", "+osad1[j]);
            osad=osad1[j].split(": ");
            game.add.bitmapText(50, 150 + (y_increment * j), 'desyrel', osad[0], 32);
            var scoretxt = game.add.bitmapText(0, 150 + (y_increment * j), 'desyrel', osad[1].toString(), 32);
            scoretxt.x = game.world.width - scoretxt.textWidth - 15;
        }*/
    startButton(2);
};