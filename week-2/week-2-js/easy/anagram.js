/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(s, t) {
  s = s.replace(/\s+/g, '').toLowerCase();
  t = t.replace(/\s+/g, '').toLowerCase();
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');
  return s === t;
}

module.exports = isAnagram;
