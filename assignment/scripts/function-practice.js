console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log('----------------------------------------------------------');


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}

// Remember to call the function to test
console.log('Test- this should print out "Hello <passed in argument>!":');
console.log('(5 tests below)');
console.log(`Test for Felix:  `, helloName('Felix'));
console.log(`Test for Toki:  `, helloName('Toki'));
console.log(`Test for Raven:  `, helloName('Raven'));
console.log(`Test for Whiskers:  `, helloName('Whiskers'));
console.log('Test for Commander Wisdom:  ', helloName('Commander Wisdom'));
console.log('----------------------------------------------------------');

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  if ((typeof firstNumber) === "number" && (typeof secondNumber) === "number") {
    return firstNumber + secondNumber;
  } else {
    return 'Error: Both of your arguments must be numbers!!';
  }
}
//Run tests:
console.log('Running tests for addNumbers:');
console.log('(For each test, addNumbers is called with the following arguments in order,')
console.log('   so 3+5 is called by addNumbers(3, 5)');
console.log('----------------------------------------------------------');
//one number bigger tests
console.log('One number bigger than other tests:');
console.log('Test- checking 3+5, should print 8:  ', addNumbers(3, 5));
console.log('Test- checking 7+2, should print 9:  ', addNumbers(7, 2));
console.log('----------------------------------------------------------');
//both zero tests
console.log('Both zero test, both same number test');
console.log('Test- checking 0+0, should print 0:  ', addNumbers(0, 0));
console.log('Test- checking 5+5, should print 10:  ', addNumbers(5, 5));
console.log('----------------------------------------------------------');
//one number or both numbers negative (and final result negative)
console.log('One number or both numbers negative (and if final result is negative) test:');
console.log('Test- checking -6+5, should print -1:  ', addNumbers(-6, 5));
console.log('Test- checking 7+-3, should print 4:  ', addNumbers(7, -3));
console.log('Test- checking -19+19, should print 0:  ', addNumbers(-19, 19));
console.log('Test- checking -2+-13, should print -15:  ', addNumbers(-2, -13));
console.log('----------------------------------------------------------');
//one or both numbers not a number
console.log('One or both arguments not a number, should return error message:');
console.log(`Test- checking /'beet/'+1, should print error message:  `, addNumbers('beet', 1));
console.log(`Test- checking 42+'kumquat', should print error message:  `, addNumbers('42', 'kumquat'));
console.log(`Test- checking 'waldo' + 'banquet', should print error message:  `, addNumbers('waldo', 'banquet'));
console.log('----------------------------------------------------------');

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  if ((typeof num1) === "number" && (typeof num2) === "number" && (typeof num3) === "number") {
    return num1 * num2 * num3;
  } else {
    return 'Error: All three of your arguments must be numbers!!';
  }
}

//Run tests:
console.log('Running tests for multiplyThree:');
console.log('(For each test, multiplyThree is called with the following arguments in order)')
console.log('   so 3*5*2 is called by multiplyThree(3, 5, 2)');
console.log('----------------------------------------------------------');
//one number bigger tests
console.log('One number bigger than other tests:');
console.log('Test- checking 3*5*2, should print 30:  ', multiplyThree(3, 5, 2));
console.log('Test- checking 7*2*2, should print 28:  ', multiplyThree(7, 2, 2));
console.log('----------------------------------------------------------');
//all three numbers zero & all three equal to 1 test
console.log('All zero test, all equal to one test');
console.log('Test- checking 0*0*0, should print 0:  ', multiplyThree(0, 0, 0));
console.log('Test- checking 1*1*1, should print 1:  ', multiplyThree(1, 1, 1));
console.log('----------------------------------------------------------');
//one number, two numbers, or three numbers negative
console.log('One number or both numbers negative (and if final result is negative) test:');
console.log('Test- checking -6*5*1, should print -30:  ', multiplyThree(-6, 5, 1));
console.log('Test- checking 7*-3*-1, should print 21:  ', multiplyThree(7, -3, -1));
console.log('Test- checking -10*-10*-10, should print `-1000:  ', multiplyThree(-10, -10, -10));
console.log('----------------------------------------------------------');
//one or more numbers not a number
console.log('One or both arguments not a number, should return error message:');
console.log(`Test- checking 'beet'*1*2, should print error message:  `, multiplyThree('beet', 1, 2));
console.log(`Test- checking 42*'kumquat'*42, should print error message:  `, multiplyThree('42', 'kumquat', 42));
console.log(`Test- checking 'waldo'*'banquet'*'meeples', should print error message:  `, multiplyThree('waldo', 'banquet', 'meeples'));
console.log('----------------------------------------------------------');

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if ((typeof number) === "number") {
    if (number > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return `Error: You really have to input a number for this to work, and '${number}' is not a number.`;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

//run tests for isPositive
console.log('Tests for isPositive function:');
console.log('Calling isPositive(55), should return true:   ', isPositive(55));
console.log('Calling isPositive(-2), should return false:   ', isPositive(-2));
console.log('Calling isPositive(0), should return false:   ', isPositive(0));
console.log('Calling isPositive(-0), should return false:   ', isPositive(-0));
console.log(`Calling isPositive('bagels'), should return error message:   `,
             isPositive('bagels'));
console.log('----------------------------------------------------------');

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length-1];
}

//run tests for getLast
let array = [];
console.log('----------------------------------------------------------');
console.log('tests for arrays of different type objects:')
array = ['big', 'chicken', 'on', 'the', 'fence'];
console.log(`Running getLast function when array=`, array,
  `should return 'fence':   `, getLast(array));
array = [1, 2, 5, 3, 8, 99];
console.log(`Running getLast function when array=`, array,
  `should return 'fence':   `, getLast(array));
array = [ false, true, 'tree', 'bush', 'weed'];
console.log(`Running getLast function when array=`, array,
  `should return 'weed':   `, getLast(array));
array = ['dolphin', 42, 'freeway', 'earth'];
console.log(`Running getLast function when array=`, array,
  `should return 'earth':   `, getLast(array));
console.log('----------------------------------------------------------');
console.log(`tests for only one element and empty array:`);
array = ['wonky'];
console.log(`Running getLast function when array=`, array,
  `should return 'wonky':   `, getLast(array));          
array = [];
console.log(`Running getLast function when array=`, array,
  `should return 'undefined':   `, getLast(array));
console.log('----------------------------------------------------------');

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let arrayElement of array) {
    if (arrayElement === value) {
      return true;
    }
  }
  return false;
}

//test function find
//found test
console.log('Tests for function find(value, array):');
array = ['maple', 'sap', 'is', 'rising', 'now'];
value = 'sap';
console.log(`Is the value '${value}' in the array: [${array}]?   ${find(value, array)}`);
//not found test
array = ['sap', 'is', 'rising', 'now'];
value = 'maple';
console.log(`Is the value '${value}' in the array: [${array}]?   ${find(value, array)}`);
//multiple found test lol (will just return on first maple)
array = ['maple', 'maple', 'maple', 'maple', 'maple'];
value = 'maple';
console.log(`Is the value'${value}' in the array: [${array}]?   ${find(value, array)}`);
//empty array test
array = [];
value = 'maple';
console.log(`Is the value '${value}' in the array: [${array}]?   ${find(value, array)}`);
//empty value test
array = ['maple', 'sap', 'is', 'rising', 'now'];
value = '';
console.log(`Is the value '${value}' in the array: [${array}]?   ${find(value, array)}`);
//empty array and empty value test (should return false as will never execute for loop)
array = [];
value = '';
console.log(`Is the value '${value}' in the array: [${array}]?   ${find(value, array)}`);
console.log('----------------------------------------------------------');

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

//  bad?  not readable???
//  return (string[0] === letter);

  if (string[0] === letter) {
    return true;
  } else {
    return false;
  }
}

//test function isFirstLetter
//first letter matches tests
console.log('Matching tests for isFirstLetter(letter, string):');
letter = 'a';
string = 'abcdef';
console.log(`Does the string '${string}' start with the letter '${letter}?  `, isFirstLetter(letter, string));
letter = 'm';
string = 'm';
console.log(`Does the string '${string}' start with the letter '${letter}?  `, isFirstLetter(letter, string));
console.log('----------------------------------------------------------');
//first letter doesn't match tests
console.log('Non-matching tests for isFirstLetter(letter, string):');
letter = 'M';
string = 'm';
console.log(`Does the string '${string}' start with the letter '${letter}?  `, isFirstLetter(letter, string));
letter = 'b';
string = '4benches';
console.log(`Does the string '${string}' start with the letter '${letter}?  `, isFirstLetter(letter, string));
letter = 'x';
string = '';
console.log(`Does the string '${string}' start with the letter '${letter}?  `, isFirstLetter(letter, string));
letter = '';
string = 'howdy';
console.log(`Does the string '${string}' start with the letter '${letter}?  `, isFirstLetter(letter, string));
letter = '';
string = '';
console.log(`Does the string '${string}' start with the letter '${letter}?  `, isFirstLetter(letter, string));
console.log('----------------------------------------------------------');

// 9. Function to return the sum of all numbers in an array
// Warning: ASSUMPTION!
//    I have assumed if there are not numbers in array to return an error instead of zero!
function sumAll(array) {
  let sum = 0;
  let emptyArray = true;
  // TODO: loop to add items
  for (let i=0; i<array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
      emptyArray = false;
    } else {
      return 'One or more items in your array are not numbers.';
    }  
  }
  // TODO: return the sum
  if (emptyArray) {
    return `There's no numbers to add!`;
  } else {
    return sum;
  }
}

//test function sumAll
console.log('Test function sumAll');
array = [1, 1, 1, 1, 1];
console.log(`Summing all the numbers in the array =[${array}] and we get:  `, sumAll(array));
array = [1, 2, 3];
console.log(`Summing all the numbers in the array =[${array}] and we get:  `, sumAll(array));
array = [9];
console.log(`Summing all the numbers in the array =[${array}] and we get:  `, sumAll(array));
array = [];
console.log(`Summing all the numbers in the array =[${array}] and we get:  `, sumAll(array));
array = [1, 'blue', 'green', 55];
console.log(`Summing all the numbers in the array =[${array}] and we get:  `, sumAll(array));
console.log('----------------------------------------------------------');

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let positiveArray = [];
  for (let arrayElement of array) {
    //if element in array is a number
    if ((typeof arrayElement) === "number") {
      //if element is positive, add to positiveArray
      if (arrayElement > 0) {
        positiveArray.push(arrayElement);
      }
    //else if element in array isn't a number
    } else {
      return 'One or more items in your array are not numbers.';
    }
  }
  return positiveArray;
}

//test function allPositive
console.log('Test function allPositive');
//all positive
array = [1, 3, 5, 1, 1];
console.log(`Looking through the numbers in the array =[${array}] and returning only the positive numbers in an array:  `, allPositive(array));
//all zero
array = [0, 0, 0, 0, 0];
console.log(`Looking through the numbers in the array =[${array}] and returning only the positive numbers in an array:  `, allPositive(array));
array = [1, -3, 5, -1, 0];
console.log(`Looking through the numbers in the array =[${array}] and returning only the positive numbers in an array:  `, allPositive(array));
array = [1];
console.log(`Looking through the numbers in the array =[${array}] and returning only the positive numbers in an array:  `, allPositive(array));
array = [-1];
console.log(`Looking through the numbers in the array =[${array}] and returning only the positive numbers in an array:  `, allPositive(array));
array = [0];
console.log(`Looking through the numbers in the array =[${array}] and returning only the positive numbers in an array:  `, allPositive(array));
array = [-1, -3, -5, -1, -1];
console.log(`Looking through the numbers in the array =[${array}] and returning only the positive numbers in an array:  `, allPositive(array));
array = [1, 'orange', 5, 1, 1];
console.log(`Looking through the numbers in the array =[${array}] and returning only the positive numbers in an array:  `, allPositive(array));
console.log('----------------------------------------------------------');

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//--------------------------------------------------------
// edabit - Minimum Steps to a Palindrome
//--------------------------------------------------------
// Given an incomplete palindrome as a string, 
//return the minimum letters needed to be added 
//on to the end to make the string a palindrome.
// Examples

// minPalindromeSteps("race") ➞ 3
  // Add 3 letters: "car" to make "racecar"

// minPalindromeSteps("mada") ➞ 1  
  // Add 1 letter: "m" to make "madam"

// minPalindromeSteps("mirror") ➞ 3
   // Add 3 letters: "rim" to make "mirrorrim"

// Notes
// Trivially, words which are already palindromes should return 0.
//--------------------------------------------------------

//my test cases:
//    m         palindrome
//    mm        MM   (two letter hump) & palindrome
//    me        mE          mE+m

//    myom      myoM        myoM+oym
//    myomo     myoMo       myoMo+ym     
//    mymoym    mymoyM      mymoyMyomym    
//    poppy     poppY
//    xxxabcdcba    xxxabcDcba       xxxabcDcba+xxx 
//    xxxabccba     xxxabCCba       (two letter hump)
//      xxxxxaxxxx     xxxxxAxxxx         xxxxxAxxxx+x
// myom             moym
// xxxabccba        abccbaxxx       
//--------------------------------------------------------
// assume:
// max possible to add: entire length -1 
// min possible to add: 1 (after checking for palidrome)
// easiest way to make palindrome: (reverse string - first letter),
//  add the result to the end of initial word ---> palindrome!!
//
// also assume: there might be a more efficient algorithm but I
//  don't want to find it right now...so I will assume efficiency not
//  important 
//
// to find shortest version, keep taking off letters from the front
//   of string added (reverse string - n letters from front), etc
//   until you only have checked by adding only one letter
// 
// pseudocode:
//      check: if it's an empty string, return 0
//      check: if it's a one char string, return 0 (palindrome!)
//      reverse the string
//      check: if the reversed string = string, if it does return 0 (palindrome!)
//
//      start with n= only one letter to take away from reverse string
//      (do this:) while you have 1 or greater letters left in (reverse string - n letters)
//           take string + (reverse string - n letters) = newstring
//           if this newstring = original string then palindrome!
//              save number of letters subtracted;
//              then add one to n, loop back to (do this:)
//      when you are done testing the reverse string chopped down to one letter,
//           you can return the saved number of letters as the lowest number 
//            of letters possible to add to make palindrome
//--------------------------------------------------------


// add to keep from doing stupid shit
"use strict";

//  minimum letters needed to add at end to make the string a palindrome!
function minPalindromeSteps(str) {
    // function to reverse a string
    function reverseString(myString) {
        let newString = [];
        for (let i=0; i<myString.length; i++) {
            newString = myString[i] + newString;
        }
        return newString;
    } // end reverseString

    // if string is empty, return 0
    if (str.length === 0) {
        return 0;
    // else if string not empty, find minimum palindrome:
    } else {
    let lastPalindromeLength = 0;
    let possiblePalindrome = ''
    let revPartToAdd = '';
    let revString = reverseString(str);
    // if string already a palindrome, return 0 letters needed to add
        if (str === revString) {
            return 0;
        // else find minimum letters to add to make palindrome
        } else {
            // save copy of revString so we can chop letters off front of it
            revPartToAdd = revString;
            // start by testing the maximum string to add to make palindrome
            //   (which is the reversed string minus first letter)
            //     abcb  ---> maximum length palindrome ---> add cba ---> abcb+cba (abcBcba)
            for (let i=revString.length-1; i>=1; i--) {
                    // slice off first letter of added letters
                    revPartToAdd = revPartToAdd.slice(1);
                    // test for palindrome by adding original string to part
                    possiblePalindrome = str + revPartToAdd;
                    // if palindrome created, save the number of letters added
                    if (possiblePalindrome === reverseString(possiblePalindrome)) {
                        lastPalindromeLength = i;
                    }
            }
            // once all the possible added strings tested, return last (smallest)
            //    palindrome length saved
            return lastPalindromeLength;
        }
    }
} // end minPalindromeSteps

//--------------------------------------------------------
// partial tests:

console.log('palindrome tests from edabit:');
console.log(`Ran minPalindromeSteps with parm 'race', expect 3:`, minPalindromeSteps("race"));
console.log(`Ran minPalindromeSteps with parm 'mada', expect 1:`, minPalindromeSteps("mada"));
console.log(`Ran minPalindromeSteps with parm 'mirror', expect 3:`, minPalindromeSteps("mirror"));
console.log(`Ran minPalindromeSteps with parm 'maa', expect 1:`, minPalindromeSteps("maa"));
console.log(`Ran minPalindromeSteps with parm 'm', expect 0:`, minPalindromeSteps("m"));
console.log(`Ran minPalindromeSteps with parm 'rad', expect 2:`, minPalindromeSteps("rad"));
console.log(`Ran minPalindromeSteps with parm 'radar', expect 0:`, minPalindromeSteps("radar"));
console.log(`Ran minPalindromeSteps with parm 'www', expect 0:`, minPalindromeSteps("www"));
console.log(`Ran minPalindromeSteps with parm 'me', expect 1:`, minPalindromeSteps("me"));
console.log(`Ran minPalindromeSteps with parm 'rorr', expect 2:`, minPalindromeSteps("rorr"));
console.log(`Ran minPalindromeSteps with parm 'pole', expect 3:`, minPalindromeSteps("pole"));
console.log('----------------------------------------------------------');
console.log('palindrome tests from me:');
console.log(`Ran minPalindromeSteps with parm '', expect 0:`, minPalindromeSteps(""));
console.log('----------------------------------------------------------');




// end question 11
//--------------------------------------------------------





// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
