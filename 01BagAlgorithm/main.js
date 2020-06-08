// 学习01背包问题，使用动态规划，配重价格和重量在下面两个数组中一一对应，
var weightArr = [1,1,2,4,12]; // 重量
var valArr = [1,2,2,10,4]; // 价格


/**
 * 获取最佳方案，采用bottom up方法
 * @param {*} cap 背包容量
 * @param {*} maxPickNum 最多拿几个
 */
function getBaetSolution(cap,maxPickNum) {
	// 初始化完整DP表
	var dp = new Array(maxPickNum +1);
	for (var i =0; i < dp.length; i++) {
		dp[i] = new Array(cap+ 1);
	}
	// 最多拿数组中前 i 个时的最佳方案
	for(var i = 0; i <= maxPickNum; i++) {
		// 最多拿i个时 + 最多装 j kg 时的最佳方案
		for (var j= 0; j <= cap; j++) {
			if(i== 0|| j==0){
				// 边界情况
				dp[i][j] = 0;
			}else if(j - weightArr[i-1]< 0) {
             	// 腾出第i个物品的重量后，发现放不下，只能继承之前的结果
				dp[i][j]= dp[i-1][j];
			} else {
				// 择优选取
				dp[i][j] = Math.max(
					dp[i -1][j], // 不拿第i个
					dp[i-1][j - weightArr[i-1]] +  valArr[i-1] // 选择拿第i个，注意数组需要偏移1
				);
			}
		}
	}
	
	
	for (var i =0; i < dp.length; i++) {
    console.log(dp[i]);
	}

}

getBaetSolution(8, 5);
