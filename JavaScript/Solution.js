/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  // Se o array for vazio, retorna "."
  if (strs.length === 0) return "";
 
  // Inicia o prefixo como a primeira palavra do array recebido.
  let prefix = strs[0];
 

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
 
  return prefix;
};

// longestCommonPrefix(["flower","flow","flight"]);
console.log('cachorro'.substring(1, 3));


const longestCommonPrefix2 = (strs) => {
  let prefix = [];
  let map = {};
  let result = [];
  let answer = '';

  const inputSize = strs.length;
  const firstWord = strs[0].split('');

  for (let i = 0; i < strs.length; i++) {
      for (let j = 0; j < strs[i].length; j++) {
          if (firstWord[j] === strs[i][j]) {
              prefix.push(strs[i][j]);
          }
      }
  }
  
  for (let k = 0; k < prefix.length; k++) {
      if (map[prefix[k]]) {
          map[prefix[k]] += 1
      } else {
          map[prefix[k]] = 1
      }
  }

  console.log(map)

  for (let letter in map) {
      if (map[letter] != inputSize) {
          break;
      } else if (map[letter] === inputSize) {
          result.push(letter)
      }
  }

  if (result == 0) {
      return answer;
  } else {
      for (let l = 0; l < result.length; l++) {
          answer += result[l];
      }
      return answer;
  }
  

  // for (let i = 0, j = 1; j < strs.length; i++, j++) {
  //     let comparisom1 = '';
  //     let comparisom2 = '';
  //     // console.log('i: ', strs[i]);
  //     // console.log('j: ',strs[j]);
  //     for (let k = 0; k < strs[i].length; k++) {
  //         console.log('ki: ', strs[i][k])
  //     }

  //     for (let l = 0; l < strs[j].length; l++) {
  //         console.log('lj: ', strs[j][l])
  //     }
  // }
};