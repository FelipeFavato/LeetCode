/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    // Mapeamento de chave e valor.
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    // Inicia um array vazio.
    let stack = []

    // Percorre as subStrings da String 's'.
    for (let i = 0; i < s.length; i++) {
        // Confere se s[i] está presente em alguma chave de map.
        if (s[i] in map) {
            // Insere o valor da chave correspondente. Se a chave
            // for '(', insere o valor dela no array stack, que é ')'.
            stack.push(map[s[i]]); // stack -> [ ')' ].
        // Depois de conferir que o valor de s[i] não é uma das chaves,
        // cai nesse else que confere se ')', '}' ou ']' é igual ao
        // elemento presente no array stack.
        } else if (s[i] === stack[stack.length - 1]) {
            // E ai retira esse valor presente em stack.
            stack.pop()
        // Se não retorne false.
        } else return false
    }
    // Se o array stack estiver vazio ao final das checagens, então retorna
    // true.
    if (stack.length === 0) return true
    return false

};