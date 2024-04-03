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

// let count = new Array(k).fill(0);: Isso cria um array count com k elementos,
// todos inicializados com o valor 0. Este array será usado para contar a
// frequência dos diferentes resultados da operação de soma módulo k.

// let sum_mod_k = 0;: Esta variável é inicializada com 0 e será usada para
// armazenar a soma módulo k dos números do array nums.

// let result = 0;: Esta variável será usada para armazenar o resultado final,
// que é o número de subconjuntos em que a soma é divisível por k.

// for (let num of nums) { ... }: Este é um loop for...of que itera sobre cada
// elemento do array nums.

// sum_mod_k = (sum_mod_k + num) % k;: Aqui, o valor num é adicionado ao sum_mod_k
// e o resultado é calculado módulo k. Isso atualiza sum_mod_k com a soma módulo k até este ponto.

// count[sum_mod_k]++;: Incrementa o contador correspondente ao valor atual de sum_mod_k.
// Ou seja, estamos contando quantas vezes encontramos um determinado valor de soma módulo k.

// Após iterar por todos os números em nums, agora temos um array count que contém a
// frequência de cada valor de soma módulo k.

// for (let c of count) { ... }: Este é outro loop for...of que itera sobre cada
// elemento do array count.

// result += c * (c - 1) / 2;: Aqui, estamos adicionando ao result o valor calculado
// c * (c - 1) / 2, onde c é a frequência de um determinado valor de soma módulo k.
// Esta fórmula calcula o número de pares possíveis que podem ser formados com c elementos,
// usando a fórmula de combinação C(n, 2) = n * (n - 1) / 2.

// result += count[0];: Adiciona ao result o valor do contador correspondente a
// soma módulo k igual a 0. Isso é necessário para contar os subconjuntos que têm
// soma exatamente igual a k (ou seja, o próprio elemento, já que estamos usando módulo k).

// return result;: Retorna o resultado final.

// Portanto, essa função calcula o número de subconjuntos em que a soma é divisível por k,
// usando a técnica de soma módulo k e contagem de frequência.



// Vamos calcular o resultado da função kSub com nums = [1, 3, 3, 6, 8, 9] e k = 3:

// Inicialmente, count será [0, 0, 0].

// Iteramos sobre os elementos de nums:

// Para o primeiro número 1, somamos 1 a sum_mod_k e fazemos módulo 3, então sum_mod_k se torna 1.
// Incrementamos count[1].
// Agora count se torna [0, 1, 0].

// Para o segundo número 3, somamos 3 a sum_mod_k e fazemos módulo 3, então sum_mod_k se torna 0.
// Incrementamos count[0].
// Agora count se torna [1, 1, 0].

// O terceiro número é novamente 3, então sum_mod_k se torna 0 novamente e incrementamos count[0] novamente.
// Agora count se torna [2, 1, 0].

// Para o quarto número 6, somamos 6 a sum_mod_k e fazemos módulo 3, então sum_mod_k se torna 0.
// Incrementamos count[0].
// Agora count se torna [3, 1, 0].

// Para o quinto número 8, somamos 8 a sum_mod_k e fazemos módulo 3, então sum_mod_k se torna 2.
// Incrementamos count[2].
// Agora count se torna [3, 1, 1].

// Para o sexto número 9, somamos 9 a sum_mod_k e fazemos módulo 3, então sum_mod_k se torna 0.
// Incrementamos count[0].
// Agora count se torna [4, 1, 1].

// Após iterar por todos os elementos de nums, temos count atualizado, que conta quantas vezes cada soma módulo k ocorreu: [4, 1, 1].

// Agora, calculamos result:

// result será 4 * (4 - 1) / 2 + 1 * (1 - 1) / 2 + 1 * (1 - 1) / 2 + 4 = 6 + 0 + 0 + 4 = 10.
// Portanto, há 10 subconjuntos cuja soma é divisível por 3 no array [1, 3, 3, 6, 8, 9].