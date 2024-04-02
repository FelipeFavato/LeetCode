
/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = (n) => {
  const binaryString = n.toString(2);
  let result = 0;
  
  for (let num of binaryString) {
      if (num === '1') {
          result += 1;
      }
  }

  return result;
};


 // https://en.wikipedia.org/wiki/Hamming_weight
 // function countBits(num) {
 //   const binaryString = num.toString(2); // Converte o número para sua representação binária
 //   console.log(binaryString)
 //   let countZeros = 0;
 //   let countOnes = 0;
 
 //   for (let i = 0; i < binaryString.length; i++) {
 //       if (binaryString[i] === '0') {
 //           countZeros++;
 //       } else if (binaryString[i] === '1') {
 //           countOnes++;
 //       }
 //   }
 
 //   return { zeros: countZeros, ones: countOnes };
 // }
 
 // // Exemplo de uso:
 // const number = 128;
 // const { zeros, ones } = countBits(number);
 // console.log(`O número ${number} possui ${zeros} bits 0 e ${ones} bits 1.`);
 