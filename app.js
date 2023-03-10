function findLongestWord(sentence) {
    let words = sentence.match(/[a-zA-Z]+/g);
    let longest = '';
    
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      } else if (words[i].length === longest.length && countVowels(words[i]) > countVowels(longest)) {
        longest = words[i];
      }
    }
    
    return longest;
  }
  
  function countVowels(word) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        count++;
      }
    }
    
    return count;
  }
  

  test_sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

  console.log(findLongestWord(test_sentence));