package Java;

class Solution {
  // Declaração do método canConstruct, que recebe duas strings como
  // parâmetros: ransomNote (nota de resgate) e magazine (revista).
  
  // Declaração de uma matriz de inteiros searchFromIndex com 26 elementos,
  // que será usada para armazenar a posição de busca para cada letra do alfabeto.
  
  // O código entra em um loop for que itera sobre cada caractere da string
  // ransomNote convertida para um array de caracteres.
  
  // Dentro do loop, para cada caractere da nota de resgate, o código busca a
  // primeira ocorrência desse caractere na string magazine começando a busca
  // a partir do índice especificado em searchFromIndex[c%26]. Aqui, c%26 é
  // usado para mapear o caractere para um índice na matriz de busca.
  
  // Se indexOf retorna -1, significa que o caractere não foi encontrado na
  // revista, então o método retorna false, indicando que não é possível
  // construir a nota de resgate usando a revista.
  
  // Se o caractere for encontrado na revista, atualiza-se o índice de
  // busca para a próxima posição após o índice onde o caractere foi encontrado.
  
  // Após iterar sobre todos os caracteres da nota de resgate, se o loop
  // terminar sem retornar false, significa que todos os caracteres da nota
  // de resgate foram encontrados na revista, portanto, o método retorna true,
  // indicando que é possível construir a nota de resgate usando a revista.

  public boolean canConstruct(String ransomNote, String magazine) {
      // Declara um array de inteiros
      int[] searchFromIndex = new int[26];

      for(char c : ransomNote.toCharArray()){
           int i = magazine.indexOf(c, searchFromIndex[c%26]);
           if(i==-1){
               return false;
           }
           searchFromIndex[c%26]=i+1;
      }

      return true;
   }
}