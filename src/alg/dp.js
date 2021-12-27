var chalkReplacer = function(chalk, k) {
    let total = chalk.reduce(
        (total, num) => {
            return total + num;
        }
    )
    console.log(total)
    let mode = k % total;
    console.log(mode);
    for (let i = 0; i < chalk.length; i ++) {
        if (mode < chalk[i]) {
            return i;
        } else {
            mode -= chalk[i];
        }
    }
    return 0;
};

let res = chalkReplacer([3,4,1,2]
    ,25)
    console.log(res)