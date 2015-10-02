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
  

  // shift off the first item one at a time to feed the list items

  var firstItem = titles.shift (function (item) {
    return item.title;
  });
  // console.log (firstItem);
  // console.log (titles);

  var secondItem = titles.shift (function (item) {
    return item.title;
  });
  // console.log (secondItem);
  // console.log (titles);

  var thirdItem = titles.shift (function (item) {
    return item.title;
  });
  // console.log (thirdItem);
  // console.log (titles);  


  // convert to a list
  var answer2item1 = document.querySelector('#itemOneOfThree');
  var textNode = document.createTextNode(firstItem);
  answer2item1.appendChild(textNode);

  var answer2item2 = document.querySelector('#itemTwoOfThree');
  var textNode = document.createTextNode(secondItem);
  answer2item2.appendChild(textNode);

  var answer2item3 = document.querySelector('#itemThreeOfThree');
  var textNode = document.createTextNode(thirdItem);
  answer2item3.appendChild(textNode);






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

  // var poundSign = document.write('&#163');
  // console.log(poundSign);
  // console.log('&#163');

  // convert into a string of text
  var str = '' + poundItem + ' costs ' + 'poundSign' + ' 18';
  // console.log(str);


  // make it show up on the page (querySel#, createTextNode, appendChild)
  var answer3 = document.querySelector('#answer3');
  var textNode = document.createTextNode(str);
  answer3.appendChild(textNode);







// QUESTION #4 SHOW ALL ITEMS MADE OF WOOD

  // lesson learned - filte is return then a statement that if true, keeps the item

  // filter for items made of wood
  var woodItems = items.filter(function (item) {
    return item.materials.indexOf('wood') != -1;
  });
  // console.log(woodItems);

  // mapping a new array which only includes item titles
  var woodItemTitles = woodItems.map (function (item) {
    return item.title;
  });
  console.log(woodItemTitles);






  // convert the array to a list of items
  var q4FirstItem = woodItemTitles.shift (function (item) {
    return item.title;
  });

  var q4SecondItem = woodItemTitles.shift (function (item) {
    return item.title;
  });

  var q4ThirdItem = woodItemTitles.shift (function (item) {
    return item.title;
  });

  var q4FourthItem = woodItemTitles.shift (function (item) {
    return item.title;
  });

  var q4FifthItem = woodItemTitles.shift (function (item) {
    return item.title;
  });






  // show on the screen
  var answer4item1 = document.querySelector('#item_q4_1of5');
  var textNode = document.createTextNode(q4FirstItem);
  answer4item1.appendChild(textNode);

  var answer4item2 = document.querySelector('#item_q4_2of5');
  var textNode = document.createTextNode(q4SecondItem);
  answer4item2.appendChild(textNode);

  var answer4item3 = document.querySelector('#item_q4_3of5');
  var textNode = document.createTextNode(q4ThirdItem);
  answer4item3.appendChild(textNode);

  var answer4item4 = document.querySelector('#item_q4_4of5');
  var textNode = document.createTextNode(q4FourthItem);
  answer4item4.appendChild(textNode);

  var answer4item5 = document.querySelector('#item_q4_5of5');
  var textNode = document.createTextNode(q4FifthItem);
  answer4item5.appendChild(textNode);


  // make it show up on the page (querySel#, createTextNode, appendChild)
  // var answer4 = document.querySelector('#answer4');
  // var textNode = document.createTextNode(listOfWoodItems);
  // answer4.appendChild(textNode);






// QUESTION #5 SHOW ALL ITEMS MADE OF WOOD

// console.log("Which items are made of eight or more materials? Display the name, number of items and the items it is made of.");

  // filter for iteam made of eight or more materials
  var eightMaterialItems = items.filter(function (item) {
    return item.materials.length >7;
  });
  // console.log(eightMaterialItems);

  // map to a new array that is only name, number of items and items included
  var eightMaterialList = eightMaterialItems.map (function (item) {
    return item.title + ' ' + item.materials.length + ' ' + item.materials;
  });
  // console.log(eightMaterialList);

  // convert this new array into a string of text
  var str = eightMaterialList + '';
  var stringOfEightMaterialItems = str.split(',').join(' ');
  // console.log(stringOfEightMaterialItems);

  // make it show up on the page (querySel#, createTextNode, appendChild)
  var answer5 = document.querySelector('#answer5');
  var textNode = document.createTextNode(stringOfEightMaterialItems);
  answer5.appendChild(textNode);








// QUESTION #6 SHOW ALL ITEMS MADE OF WOOD
// go back and figure out more systematic way to find collective

// console.log("Answer: 18 were made by their sellers");

// filter for an array of items made by seller 
// who_made = i_did

var selfMadeItems = items.filter(function(item) {
  return item.who_made != "someone_else" && item.who_made != "collective";
});
// console.log(selfMadeItems);
// console.log(selfMadeItems.length);

// display as a phrase
var str= selfMadeItems.length + ' were made by their sellers';
// console.log(str);

// make it show up on the page (querySel#, createTextNode, appendChild)
  var answer6 = document.querySelector('#answer6');
  var textNode = document.createTextNode(str);
  answer6.appendChild(textNode);






})();
