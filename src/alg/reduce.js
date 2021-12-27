var minMoves = function(nums) {
  let min = Math.min(...nums);
  return nums.reduce(
      (sum, item) => {
        console.log(sum);
          return sum + (item - min);
      },
      0
  )
};
let res = minMoves([1,2,3]);
console.log(res);