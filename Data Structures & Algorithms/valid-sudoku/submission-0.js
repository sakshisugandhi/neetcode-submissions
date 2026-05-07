class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    traversal = (board, startingRow, endingRow, startingColumn, endingColumn) => {
        let set = new Set();
        for (let i = startingRow; i <= endingRow; i++) {
            for (let j = startingColumn; j <= endingColumn; j++) {
                if (board[i][j] === ".") {
                    continue;
                } else if (set.has(board[i][j])) {
                    return false;
                } else {
                    set.add(board[i][j]);
                }
            }
        }
        return true;
    };
    isValidSudoku(board) {
        // for row
        for (let i = 0; i < 9; i++) {
            let set = new Set();
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") {
                    continue;
                } else if (set.has(board[i][j])) {
                    return false;
                } else {
                    set.add(board[i][j]);
                }
            }
        }
        // for column
        for (let i = 0; i < 9; i++) {
            let set = new Set();
            for (let j = 0; j < 9; j++) {
                if (board[j][i] === ".") {
                    continue;
                } else if (set.has(board[j][i])) {
                    return false;
                } else {
                    set.add(board[j][i]);
                }
            }
        }
        // for 3*3 grid
        for (let startingRow = 0; startingRow < 8; startingRow += 3) {
            let endingRow = startingRow + 2;
            for (let startingColumn = 0; startingColumn < 8; startingColumn += 3) {
                let endingColumn = startingColumn + 2;
                const result = this.traversal(
                    board,
                    startingRow,
                    endingRow,
                    startingColumn,
                    endingColumn,
                );
                if (!result) {
                    return false;
                }
            }
        }
        return true;
    }
}

