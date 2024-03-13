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

console.log('m:', minPalindromeSteps('m'));
console.log('race:', minPalindromeSteps('race'));
console.log('mada:',minPalindromeSteps('mada'));
console.log('mirror:',minPalindromeSteps('mirror'));
console.log('maa:',minPalindromeSteps('maa'));
console.log('rad:',minPalindromeSteps('rad'));