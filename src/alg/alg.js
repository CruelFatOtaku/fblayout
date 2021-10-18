var isValidSudoku = function(board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const colomns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subBoxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  for (let i = 0; i < 9; i ++) {
      for (let j = 0; j < 9; j ++) {
          if (board[i][j] !== ".") {
              let index = board[i][j].charCodeAt() - "0".charCodeAt() - 1;
              rows[i][index] ++;
              colomns[j][index] ++;
              subBoxes[Math.floor(i / 3)][Math.floor(j / 3)][index] ++;
              if (rows[i][index] > 1 || colomns[j][index] > 1 || subBoxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                  return false;
              }
          }
      }
  }
  return true;
};
isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]);