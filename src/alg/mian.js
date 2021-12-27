function gene () {
  let n = 0;
  return () => {
    return ++n;
  }
}
const fn = gene();
console.log(fn());
console.log(fn());
console.log(fn());


function promiseAll(tasks) {
  if (!Array.isArray(tasks)) {
    throw new Error("error input");
  }
  if (tasks.length === 0) {
    return Promise.resolve(undefined);
  }
  let resArr = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    tasks.forEach(
      (task, index) => {
        Promise.resolve(task).then(
          currRes => {
            count ++;
            resArr[index] = currRes;
            if (count === tasks.length) {
              resolve(resArr);
            } 
          }
        ).catch(e => {
          reject(e);
        });
      }
    );
  })
  
}

function randomArr(len) {
  if (isNaN(len) || len <= 0) {
    throw new Error();
  }
  const occu = new Array(20).fill(0);
  const res = [];
  while(res.length < len) {
    const random = Math.floor(Math.random() * 20);
    if (occu[random] === 0) {
      res.push(random);
      occu[random] ++;
    }
  }
  return res;
}

console.log(randomArr(1));

// 1、生成随机形状
// 2、能拖动形状
// 3、能删除形状

// class 
const types = ["circle", "rect", "triangle"];
function generateRandom() {

}


const row = grid.length, col = grid[0].length
let maxIsland = 0
const dfs = (i, j) => {
    //边界条件的判定
    if(i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0) return 0
    //每次遍历过的岛屿（1）都置为0，也就是将岛屿沉默，这样就不会在dfs过程中遍历重复的岛屿
    grid[i][j] = 0
    let cntIsland = 1
    //向四个方向分别dfs并加和（可以用[1, -1, 0, 0]方向数组循环来优雅一点）
    cntIsland += dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
    return cntIsland
}
//开始遍历grid地图，因为遍历过的岛屿都沉没变成海，不会有重复计数
for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
        maxIsland = Math.max(maxIsland, dfs(i, j))
    }
}
return maxIsland