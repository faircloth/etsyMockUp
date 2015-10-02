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
  // map to a new array that only includes title
  // split and join into one long string
  // make it show up on the page (querySel#, createTextNode, appendChild)


  // create a new array of filtered items based on price
  var itemsInRange = items.filter(function(item) {
    return item.price > 14 && item.price < 18;
  });
  // console.log(itemsInRange);


  // map to a new array that only includes title
  var titles = itemsInRange.map(function(item){
    return item.title;
  });
  // console.log(titles);
  

  // split and join into one long string
  var str = '' + titles + '';
  var stringOfThree = str.split(',').join(' ');
  // console.log(stringOfThree);

  // make it show up on the page (querySel#, createTextNode, appendChild)
  var answer2 = document.querySelector('#answer2');
  var textNode = document.createTextNode(stringOfThree);
  answer2.appendChild(textNode);


// QUESTION #3 SHOW ITEM WITH BRITISH POUND CURRENCY CHARACTER

  // SERIES OF STEPS TO EXECUTE
  // filter for items with a currency code equal to British pound
  // treat it like an array bc it is - make new array (map) with title only
  // convert into a string of text
  // make it show up on the page (querySel#, createTextNode, appendChild)


  // filter for items with a currency code equal to British pound
  var poundItems = items.filter(function(item) {
    return item.currency_code != "USD";
  });
  // console.log(poundItems);


  // treat it like an array bc it is - make new array (map) with title only
  var poundItem = poundItems.map(function(item) {
    return item.title;
  });
  // console.log(poundItem);

  
// COME BACK TO THIS FOR THE BRITISH POUND SITUATION

  // convert into a string of text
  var str = '' + poundItem + ' costs 18';
  // console.log(str);


  // make it show up on the page (querySel#, createTextNode, appendChild)
  var answer3 = document.querySelector('#answer3');
  var textNode = document.createTextNode(str);
  answer3.appendChild(textNode);


// QUESTION #4 SHOW ALL ITEMS MADE OF WOOD

  // filter for items made of wood
  var woodItems = items.filter(function (item) {
    return item.materials.indexOf('wood') != -1;
  });
  console.log(woodItems);

  // mapping a new array which only includes item titles
  var woodItemTitles = woodItems.map (function (item) {
    return item.title;
  });
  console.log(woodItemTitles);

  // 


})();
