/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  if(s.length!== t.length) return false
  for(let i = 0 ; i < s.length; i ++){

    // int index = string.indexOf('subString'): Recupera o INDICE da
    // primeira aparição daquele caracter.
    if(s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }
  return true;
};

// isIsomorphic('egg', 'add');
// isIsomorphic('foo', 'bar');
isIsomorphic('paper', 'title');