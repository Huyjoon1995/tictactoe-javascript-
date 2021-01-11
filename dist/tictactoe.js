const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
module.exports = {};
var player = 1;
var lastMovedBy = 'X';
var tictactoe = function() {
    var board = [];
    initBoard(board);
    console.log("Welcome! Here is your board.");
    displayBoard(board);
    playGame(board);
}

var playGame = function(board) {
    rl.question(`Player${player} (${lastMovedBy} where would you like to move?)`, function(input) {
        input = input.trim();
        var array = input.split(' ');
        var row = parseInt(array[0]);
        var column = parseInt(array[1]);
        if(inBound(row) && inBound(column)) {
            player === 1 ? board[row][column] = 'X' : board[row][column] = 'O';
            displayBoard(board);
            if(isDraw(board)) {
                console.log("DRAW!!");
                return rl.close();
            }
            if(isPlayerWinning(board)) {
                console.log(`Player${player} WINS!!`);
                return rl.close();
            }
        }
        player < 2 ? player++ : player--;
        player === 1 ? lastMovedBy = 'X' : lastMovedBy = 'O';
        playGame(board);
    });
}

module.exports.isPlayerWinning = function(board) {
    return (board[0][0] === lastMovedBy && board[0][1] === lastMovedBy && board[0][2] === lastMovedBy) ||
    (board[1][0] === lastMovedBy && board[1][1] === lastMovedBy && board[1][2] === lastMovedBy) ||
    (board[2][0] === lastMovedBy && board[2][1] === lastMovedBy && board[2][2] === lastMovedBy) ||
    (board[0][0] === lastMovedBy && board[1][0] === lastMovedBy && board[2][0] === lastMovedBy) ||
    (board[0][1] === lastMovedBy && board[1][1] === lastMovedBy && board[2][1] === lastMovedBy) ||
    (board[0][2] === lastMovedBy && board[1][2] === lastMovedBy && board[2][2] === lastMovedBy) ||
    (board[0][0] === lastMovedBy && board[1][1] === lastMovedBy && board[2][2] === lastMovedBy) ||
    (board[2][0] === lastMovedBy && board[1][1] === lastMovedBy && board[0][2] === lastMovedBy) 
}

module.exports.isDraw = function(board) {
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            if(board[i][j] === '-') {
                return false;
            }
        }
    }
    return true;
}

module.exports.inBound = function(index) {
    return index >= 0 && index < 3;
}

var initBoard = function(board) {
    for(var i = 0; i < 3; i++) {
        board[i] = [];
        for(var j = 0; j < 3; j++) {
            board[i][j] = '-';
        }
    }
}

var displayBoard = function(board) {
    for(var i = 0; i < 3; i++) {
        var array = board[i];
        console.log(array.join(","));
    }
}

