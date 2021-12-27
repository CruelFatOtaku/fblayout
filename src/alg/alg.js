var minimumTotal = function(triangle) {
  const dp = [triangle[0]];
  for (let i = 1 ; i < triangle.length; i ++) {
      let curr = [];
      for (let j = 0; j <= i; j ++) {
          if (j === 0) {
            curr.push(dp[i - 1][j] + triangle[i][j]);
          } else if (j === i) {
            curr.push(dp[i - 1][j - 1] + triangle[i][j]);
          } else {
            curr.push(Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]);
          }
      }
      dp.push(curr);
    }
  return Math.min(...dp[dp.length - 1]);
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));