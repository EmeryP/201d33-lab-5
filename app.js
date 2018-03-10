'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:
  
"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  // add the numbers
  var sumOfTwoNums = a + b;
  // concatenate the string
  var sumString = 'The sum of ' + a + ' and ' + b + ' is ' + sumOfTwoNums + '.';
  // return an array
  return [sumOfTwoNums, sumString];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
// multiply nums
  var productOfNums = a * b;
  //concatenate strings
  var exactString = 'The product of ' + a + ' and ' + b + ' is ' + productOfNums + '.';
  //return array
  return[productOfNums, exactString];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
//sum of 3 arguements 
  var sumAB = sum(a, b)[0]; //pass a, b into sum func above, access only position 0 of the array, store in var AB.
  var sumABC = sum(sumAB, c)[0]; //pass AB, c into sum func above, access only position 0 of array, store in var AB. 
  console.log(sumABC);
  var multiplyAB = multiply(a, b)[0]; // pass a, b into multiply func above, access value at position 0, store in varAB
  var multiplyABC = multiply(multiplyAB, c)[0]; //pass AB, c into multiply func above, access value at position 0, store in var ABC
  console.log(multiplyABC);

  //concatenated strings
  var thirdString = a + ' and ' + b + ' and ' + c + ' sum to ' + sumABC + '.'; //concatenate sum strings
  console.log(thirdString);
  var fourthString = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + multiplyABC + '.'; //concatenate multiplication strings
  console.log(fourthString);

  return[sumABC, multiplyABC, thirdString, fourthString];

//return array, first element, sum of a, b, c
//retun array, second element, product of a, b, c
//return array, 3rd & 4th element, string of
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line, create array

function sumArray(testArray) { //eslint-disable-line, create func named sumArray, pass testArray into it
//extract elements from testArray
  var runSum = 0; //setting running sum to 0, creating placeholder var so math func can be used

  for (var i = 0; i < testArray.length; i++) { //using for loop to iterate through array, start at pos 0, iterate at pace of plus 1 each time through and continue through the entire length of the array

    runSum = sum(testArray[i], runSum)[0]; //updates runSum to equal first value in array(2) + 0, loop will continue until end of array, this line creates a loop that continues on forever because runSum will always be the updated value of the sum of the prior two numbers.
    console.log(runSum);
  }

  //concatenate string
  var stringArray = testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' was passed in as an array of numbers, and ' + runSum + ' is their sum.';
  console.log(stringArray);

  //add values of test array
  return[runSum, stringArray];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray) { //eslint-disable-line


  // return[runProduct, runProductString];
}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.