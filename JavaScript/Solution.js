/**
 * @param {number[][]} accounts
 * @return {number}
 */
// Reduce
const maximumWealth = (accounts) => {
  let biggestWealth = 0;
  for(let i=0 ; i < accounts.length; i++){
     let sum = accounts[i].reduce((prev,curr) => prev + curr,0)
     biggestWealth = sum > biggestWealth ? sum : biggestWealth;
  }
  return biggestWealth;
};


// /////////////////////////////////////////////////////////
const numbers = [1, 2, 3, 4, 5, 6];

const soma = numbers.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual
}, 0);

console.log(soma);

const fruits = ['apple', 'banana', 'orange', 'grape'];

fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});