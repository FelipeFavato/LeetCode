/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let charsArray = chars.split("");
  console.log('charsArray 1: ', charsArray);
  return words.reduce((sum, word) => {
    // console.log('word: ', word);
    let isValid = false;

    for(let i = 0 ; i < word.length; i++) {
      // Retorna o indice da primeira ocorrencia da letra.
      // Se a letra não existir, o index retornado será -1.
      const index = charsArray.indexOf(word.charAt(i));
      // Se for diferente de -1, ou seja, se a letra existir:
      if(index !== -1) {
        // ------ Parei aqui, oque o splice faz?
        charsArray.splice(index, 1);
        console.log(charsArray.splice(index, 1));
        console.log('charsArray: ', charsArray);
        isValid = true;
      } else {
        isValid = false;
        break;
      }
    }
    charsArray = chars.split("")
    sum += isValid ? word.length : 0;
    return sum;
  }, 0)
}

countCharacters(["cat","bt","hat","tree"], "atach");

// const str = 'Olá, mundo!';

// console.log(str.includes('Olá')); // true
// console.log(str.includes('mundo')); // true
// console.log(str.includes('foo')); // false

// const array = ['Maçã', 'Banana', 'Laranja', 'Uva'];
// const searchString = 'banana';

// const exists = array.some(item => item.toLowerCase() === searchString.toLowerCase());
// console.log(exists); // true