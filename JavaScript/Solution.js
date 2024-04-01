/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const sym = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

let result = 0;

for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    // Se o atual for menor do que o próximo, então some ao valor total
    // o valor do próximo menos o valor do atual;
    if (cur < next) {
        result += next - cur;
        i++;
    // Se o valor do atual for igual ou maior do que o valor do proximo,
    // apenas some o valor do atual ao resultado.
    } else {
        result += cur;
    }
}

return result;
};

// romanToInt('III');
romanToInt('LVIII');
// romanToInt('MCMXCIV');