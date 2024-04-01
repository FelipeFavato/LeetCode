/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  // Quando a LinkedList (lista de nós ligada) tem um número impar de nós, é intuitivo
  // achar o nó central, que é o do meio mesmo. Quando a LinkedList tem um número par
  // de nós, o nó central é sempre o que fica a direita das duas opções centrais.
  // Como eu quero saber qual é o nó do meio, eu preciso entender como o nó do meio pode 
  // ser achado:
  // ['3'] -> Nó central: 3. Nó final: 3.
  // [3, '5'] -> Nó central: 5. Nó final: 5. 
  // [3, '5', 1] -> Nó central: 5 denovo. Nó final: 1.
  // [3, 5, '1', 7] -> Nó central: 1. Nó final: 7.
  // [3, 5, '1', 7 ,9] -> Nó central: 1 denovo. Nó final: 9.
  // Seguindo o padrão encontrado na lista de nós, é possivel perceber que o nó final
  // 'anda 2 casas' para cada '1 casa' que o nó central anda.

  // Inicia-se tanto o nó final (fast) quanto o nó central (slow) como o primeiro
  // nó da lista linkada passada por parametro.
  // O Nó 'slow' é o nó (node) do meio, pois ele anda 1
  // 'casa' para cada 2 'casas' no nó final.
  let slow = head;
  // o Nó 'fast' é o ultimo nó, pois ele sempre anda 2
  // 'casas' para cada 'casa' do nó central.
  let fast = head;

  // Então para acharmos o nó central, que é o 'slow'. Fazemos uma condição que
  // enquanto o nó 'fast' (ultimo) e o próximo nó existirem: é pro nó fast
  // assumir o valor de '2 casas' pra frente e o nó slow assumir o valor de '1
  // casa' pra frente.
  // Chegando rapidamente ao final da lista linkada e achando o nó central.
  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  }

  return slow;
};