//* Solution using Brute Force approach */

function maxProfit(prices) {
  // set maxProfit to zero, this helps for edge case that says return zero when no profit is made
  let maxProfit = 0;

  // we start the buying price at index 0 to get the prices[0]
  for (let buyPrice = 0; buyPrice < prices.length; buy++) {
    // start sell price with buyPrice + 1 to make sure we aren't going back on the days
    // and to skip repeated calculations
    for (let sell = buyPrice + 1; sell < prices.length; sell++) {
      let profit = prices[sellPrice] - prices[buyPrice];

      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}

/* 
***Complexity analysis***
- Time complexity: O(n^2). where n is the length of the prices array
- Space complexity: O(1). only two variables were created. maxProfit and profit
*/

// ---------------------------------------------------------------------------------------

/* A better Approach using One For Loop; */

function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let sell = 1; sell < prices.length; sell++) {
    let sellPrice = prices[sell];
    let profit = sellPrice - minPrice;

    maxProfit = Math.max(maxProfit, profit);

    if (sellPrice < minPrice) minPrice = sellPrice;
  }
  return maxProfit;
}

/* Complexity analysis***
- Time complexity: O(n) where n is the length of the prices array
- Space complexity: O(1). only two variables were created. maxProfit and profit
*/
