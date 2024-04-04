// array.splice(start, deleteCount, item1, item2, itemN);

let array = [1, 2, 3, 4, 5];
array.splice(2, 2); // Remove 2 elementos a partir do índice 2
console.log(array); // Output: [1, 2, 5]

let array2 = [1, 2, 3, 4, 5];
array2.splice(2, 0, 6, 7); // Adiciona os elementos 6 e 7 a partir do índice 2
console.log(array2); // Output: [1, 2, 6, 7, 3, 4, 5]

let array3 = [1, 2, 3, 4, 5];
array3.splice(2, 2, 'a', 'b'); // Remove 2 elementos a partir do índice 2 e adiciona 'a' e 'b' no lugar
console.log(array3); // Output: [1, 2, 'a', 'b', 5]

class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  let dummyHead = new ListNode();
  let current = dummyHead;

  while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }

  // Append the remaining nodes of list1 or list2
  if (list1 !== null) {
      current.next = list1;
  } else {
      current.next = list2;
  }

  return dummyHead.next;
}

// Com recursividade:
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) {
      return l2;
  }
  else if (l2 == null) {
      return l1;
  }
  else if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  }
  else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};