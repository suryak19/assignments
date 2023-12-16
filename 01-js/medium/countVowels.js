/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    var vowelCounter = 0;
    var vowels = {};
    vowels['a'] = 1;
    vowels['e'] = 1;
    vowels['i'] = 1;
    vowels['o'] = 1;
    vowels['u'] = 1;
    vowels['A'] = 1;
    vowels['E'] = 1;
    vowels['I'] = 1;
    vowels['O'] = 1;
    vowels['U'] = 1;
    for(var i=0;i<str.length;i++){
      if(vowels[str[i]]===1){
        vowelCounter = vowelCounter + 1;
      }
    }
    return vowelCounter;
}

module.exports = countVowels;