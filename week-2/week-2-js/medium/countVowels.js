/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let  n = str.length;
    let cnt = 0
    str = str.toLowerCase();
    for(let i=0; i<n; i++){
      if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o'  || str[i]==='u'){
        cnt++;
      }
    }
    return cnt;
}

module.exports = countVowels;