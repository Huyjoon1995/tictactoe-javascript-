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
