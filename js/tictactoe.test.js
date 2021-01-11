var tictactoe = require('./tictactoe');
describe("check horizontal winning", () => {
    it('should win horizontal ', () => {
        var board = [['X', 'X', 'X'], ['-', 'O', '-'], ['X', '-', 'O']];
        expect(tictactoe.isPlayerWinning(board)).toBe(true);
    });
    
});

describe("check vertical winning", () => {
    it('should win vertical', () => {
        var board = [['X', '-', 'O'], ['X', 'O', 'O'], ['X', 'O', 'O']];
        expect(tictactoe.isPlayerWinning(board)).toBe(true);
    })
});

describe("check diagonal winning", () => {
    it('should win primary diagonal', () => {
        var board = [['X', '-', '-'], ['O', 'X', 'O'], ['O', 'O', 'X']];
        expect(tictactoe.isPlayerWinning(board)).toBe(true);
    });

    it('should win secondary diagonal', () => {
        var board =[['X', '-', 'X'], ['O', 'X', '-'], ['X', 'O', 'O']];
        expect(tictactoe.isPlayerWinning(board)).toBe(true);
    });
});

describe("check for a draw", () => {
    it('should be a draw', () => {
        var board = [['X', 'O', 'X'], ['O', 'X', 'O'], ['X', 'O', 'X']];
        expect(tictactoe.isDraw(board)).toBe(true);
    });
});

describe("validation for cell", () => {
    it('valid cell', () => {
        var row = 1;
        expect(tictactoe.inBound(row)).toBe(true);
    });
    it('not valid cell', () => {
        var row = 9;
        expect(tictactoe.inBound(row)).toBe(false);
    })
});