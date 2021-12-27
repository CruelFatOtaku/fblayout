function coinChange (coins,amount){
	let dp = new Array(amount + 1).fill(Infinity);
	dp[0] = 0
	// let path = [];
	for(let i = 1; i <= amount; i++){
		for(let j = 0; j < coins.length; j++){
			let n = i - coins[j];
			if(n >= 0){
				if(dp[n]+1  < dp[i]){
					dp[i] = dp[n] + 1;
					// path[i] = coins[j];
				}
			}
		}
	}
	
	// let sum = path[amount];
	// let res = [sum];
	// amount = amount - sum;
	// while(amount > 0){
		// sum = path[amount];
		// res.push(sum);
		// amount = amount - sum;
	// }
	
	
	console.log(dp[amount]);
}

coinChange([1,5,10,25], 37);
coinChange([3, 5], 11);
