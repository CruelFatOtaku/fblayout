
function getSum(nums, pos, sum, v) {
  if (sum < 0) {
    return;
  }
  if (sum == 0) {
    console.log(v);
  }
  for(let i = pos; i < nums.length; i ++) {
    v.push(nums[i]);
    getSum(nums, i + 1, sum - nums[i], v);
    v.pop();
  }
}

getSum([1,2,3,4,5,6], 0, 7, []);


