// TODO : comments, organize code

//mänguväli ja mängu osad
var game = new Phaser.Game(gameWidth+menuWidth, numBlocksY*blockSize+blockSize, Phaser.AUTO, document.getElementById('game'));
game.state.add('Menu',Menu);
game.state.add('Game',Game);
game.state.add('Leaderboard',Leaderboard);

game.state.start('Menu');



//valged jooned mänguvälja paremas ja vasakus servas
function placeSeparators(){
    var leftSeparator = game.add.graphics(0, 0);
    leftSeparator.lineStyle(3, 0xffffff, 1);
    leftSeparator.lineTo(0,game.world.height);
    var rightSeparator = game.add.graphics(gameWidth+menuWidth-3, 0);
    rightSeparator.lineStyle(3, 0xffffff, 1);
    rightSeparator.lineTo(0,game.world.height);
}

//algusnupu kuvamine alguses ja parimate kuvamisel
function startButton(pos){ // kui 1 on, siis avakuval, kui 2, siis tulemuste juures
    var y = (pos == 1 ? 400 : 550);
    var button = game.add.button(game.world.centerX, y, 'button', startGame, this, 2, 1, 0);
    button.anchor.setTo(0.5);
}

function startGame(){
    game.state.start('Game');
}

function loadLeaderboard(){
    game.state.start('Leaderboard');
}
