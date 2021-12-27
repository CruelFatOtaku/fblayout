/**
*
* NOTE: Feel free to add any extra member variables/functions you like.
*/
class RangeList {

  constructor() {
    this._baseData = [];
  }

  /**
    * Adds a range to the list
    * @param {Array<number>} range - Array of two integers that specify
    beginning and end of range.
  */
  add(range) {
    // just ignore empty range
    if (range[0] >= range[1]) return;
    this._baseData.push(range);
		if (this._baseData.length < 2) {
			return;
		}
    // calculate ranges
		this._baseData.sort((a, b) => a[0] - b[0]);
		let curr = this._baseData[0];
		const res = [];
		for (let range of this._baseData) {
			if (curr[1] >= range[0]) {
				curr[1] = Math.max(curr[1], range[1]);// Merge overlapping ranges
			} else {
				res.push(curr);// store current
				curr = range;// next range
			}
		}
		res.push(curr);
		this._baseData = res;
  }

  /**
    * Removes a range from the list
    * @param {Array<number>} range - Array of two integers that specify
    beginning and end of range.
  */
  remove(range) {
    // just ignore empty range
    if (range[0] >= range[1]) return;
    const res = [];
    // calculate ranges
		this._baseData.sort((a, b) => a[0] - b[0]);
    for (let tempRange of this._baseData) {
      // skip if not overlapping
      if (range[0] >= tempRange[1] || range[1] <= tempRange[0]) {
        res.push(tempRange);
        continue;
      }
      if (range[0] > tempRange[0]) {
        res.push([tempRange[0], range[0]]);
      }
      if (range[1] < tempRange[1]) {
        res.push([range[1], tempRange[1]]);
      }
    }
    this._baseData = res;
  }

  /**
  * Prints out the list of ranges in the range list
  */
  print() {
    let res = [];
    this._baseData.forEach(range => {
      res.push(`[${range[0]}, ${range[1]})`);
    });
    console.log(res.join(" "));
  } 
}
// Example run
const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)