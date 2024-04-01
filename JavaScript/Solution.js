/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  let verification = true;
  const arr = String(x).split('');
  for (let i = 0, j = arr.length - 1; i < arr.length/2; i++, j--) {
      if (arr[i] != arr[j]) {
        verification = false;
      }
  }

  return verification;
};

isPalindrome(121);
isPalindrome(1211);
isPalindrome(12121);
isPalindrome(12155);