/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */


const canConstruct = (ransomNote, magazine) => {
  // Verifica cada caracter que existe na String 'magazine',
  // se houver um caracter igual na String 'ransomNote', remove
  // esse caracter de 'ransomNote'.
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }

  // Se 'ransomNote' ficar vazio após todas as remoções, então retorna
  // true. Se 'ransomNote' não ficar vazio, então retorna false.
  return !ransomNote;
};

canConstruct('a', 'b');
canConstruct('aa', 'ab');
canConstruct('aa', 'aab');