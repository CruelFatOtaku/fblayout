// Problem Set below:
// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100,201)

class RangeList {

  constructor() {
    this.baseData = []
  }

  /**
    * Adds a range to the list
    * @param {Array<number>} range - Array of two integers that specify
    beginning and end of range.
  */
  add(range) {
		this.baseData.push(range)
		if (this.baseData.length < 2) {
			return this.baseData;
		}
		this.baseData.sort((a, b) => a[0] - b[0]);
		let curr = this.baseData[0];// 取默认值为第一个区间
		let result = [];

		for (let interval of this.baseData) {
			if (curr[1] >= interval[0]) {// 判断区间是否重复
				curr[1] = Math.max(curr[1], interval[1]);// 重复取最大的
			} else {
				result.push(curr);// 不重复就存起来
				curr = interval;// 将当前不重复结果存起来 与下一个交换
			}
		}
		result.push(curr);
		this.baseData=result;
  }

  /**
    * Removes a range from the list
    * @param {Array<number>} range - Array of two integers that specify
    beginning and end of range.
  */
  remove(range) {

  }

  /**
  * Prints out the list of ranges in the range list
  */
  print() {
  // TODO: implement this
		console.log(this.baseData)
	return this.baseData
  } 
}
// Example run
const rl = new RangeList();
rl.add([1, 5]);

// Should display: [1, 5)
rl.add([10, 20]);

// rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
// rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
// rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
// rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
// rl.print();
// Should display: [1, 8) [10, 21)
// rl.remove([10, 10]);
// rl.print();
// Should display: [1, 8) [10, 21)
// rl.remove([10, 11]);
// rl.print();
// Should display: [1, 8) [11, 21)
// rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
// rl.remove([3, 19]);
// rl.print();
// Should display: [1, 3) [19, 21)