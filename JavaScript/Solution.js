/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let  i = 0;
  // Enquanto i for menor do que o tamanho do array nums:
  while(i<nums.length){
    // Se o valor da posição nums[i] for igual ao valor 'val'.
      if(nums[i] == val){
          // Retire esse cara.
          nums.splice(i,1);
      } else {
          // Se não for, ande para o proximo item do array.
          i++;
      }
  }
  return nums.length;
};