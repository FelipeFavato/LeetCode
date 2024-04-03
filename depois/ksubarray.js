/*
 * Complete the 'kSub' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY nums
 */

function kSub(k, nums) {
    let count = new Array(k).fill(0);
    let sum_mod_k = 0;
    let result = 0;

    for (let num of nums) {
        sum_mod_k = (sum_mod_k + num) % k;
        count[sum_mod_k]++;
    }

    for (let c of count) {
        result += c * (c - 1) / 2;
    }

    result += count[0];

    return result;

}
