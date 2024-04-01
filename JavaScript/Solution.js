/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const cleanWords = [];

  for (let word of s.split(' ')) {
      if (word != '') {
          cleanWords.push(word);
      }
  }

  return cleanWords[cleanWords.length - 1].length;
};

const lengthOfLastWordTwo = (s) => {
  const arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};