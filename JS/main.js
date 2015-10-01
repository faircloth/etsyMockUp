// IIFE = Immediately Invoked Function Expression
// run the code immediately to make sure code is properly scoped
(function () {

  // console.log("Hello!"); to confirm I had access
  // confirm access to items array from other js file


  // write out the steps logically first
  // create variables, give them a value and pass them along to the next step


// QUESTION #1 CALC THE AVG PRICE

  // SERIES OF STEPS TO EXECUTE
  // new array (map) get access to only the prices
  // sum up the prices (reduce)
  // calculate the avg = sum / number (array.length)
  // convert to two decimal places (.toFixed)
  // make it a string (str)
  // make it show up on the page (querySel#, createTextNode, appendChild)

  
  // new array (map) get access to only the prices
  var prices = items.map( function (item) {
    return item.price;
  });
  // use console.log to show the new array
  // console.log (prices);


  // sum up the prices (reduce)
  var totalPrice = prices.reduce ( function (prev, next) {
      return prev + next;
  });
  // console.log (totalPrice);


  // calculate the avg = sum / number (array.length)
  var avgPrice = totalPrice / prices.length;
  // console.log (avgPrice);

  
  // convert to two decimal places (.toFixed)
  var converted = avgPrice.toFixed(2);
  // console.log(converted);


  // make it a string (str)
  var str = 'The average price is $' + converted;
  // console.log(str);


  // make it show up on the page (querySel#, createTextNode, appendChild)
  var answer1 = document.querySelector('#answer1');
  var textNode = document.createTextNode(str);
  answer1.appendChild(textNode);

// QUESTION #2 SHOW ITEMS IN A PRICE RANGE (14-18)

  // SERIES OF STEPS TO EXECUTE
  // create a new array of filtered items based on price




  // create a new array of filtered items based on price
  var itemsInRange = items.filter(function(item) {
    return item.price >= 10 && item.price <= 14;
  });
  console.log(itemsInRange);






})();
