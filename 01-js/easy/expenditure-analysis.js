/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

/*

What I learnt? 
  * How to work with a JSON like we do in a MAP in Java 
  * key will be used in .get in JAVA, whereas here it will be like getting it from Array. 

*/

function calculateTotalSpentByCategory(transactions) {
  var result = [];//Map in Java
  var interimResult = {};
  for(var i=0;i<transactions.length;i++){
    var category = {};
    //Get current category value from Result
    var currTxn = transactions[i];
    var currPrice = currTxn.price;
    if(interimResult[currTxn.category]){
      currPrice = currPrice + interimResult[currTxn.category];
    }
      interimResult[currTxn.category] = currPrice;
    
  }
  // return [];
  // for(var i=0;i<interimResult.length;i++){
  // for(var i : interimResult){
  //   result.push(i);
  // }
  for(var key in interimResult){    
    var resultObj = {};
    resultObj.category = key;
    resultObj.totalSpent = interimResult[key];
    result.push(resultObj);
  }
  // console.log(result);
  return result;
}

//Test inputs 
// var transactions = [
//   { itemName: "Rent", category: "Housing", price: 1200.00, timestamp: "2023-12-01T08:00:00" },
//   { itemName: "Groceries", category: "Food", price: 200.50, timestamp: "2023-12-03T12:30:00" },
//   { itemName: "Utilities", category: "Bills", price: 150.00, timestamp: "2023-12-05T15:45:00" },
//   { itemName: "Internet", category: "Bills", price: 60.00, timestamp: "2023-12-10T10:00:00" },
//   { itemName: "Gas", category: "Transportation", price: 40.00, timestamp: "2023-12-15T14:00:00" }
// ];

//calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
