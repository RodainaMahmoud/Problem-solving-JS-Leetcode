/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
// 1- create a dummy node, point tail at it, start carry at 0
// 2- loop while l1 has nodes OR l2 has nodes OR carry is left over
// 3- x and y are the digit values; use 0 if a list has run out. sum = x + y + carry
// 4- carry = Math.floor(sum / 10); digit = sum % 10
// 5- attach a new node with the digit after tail, then move tail onto it
// 6- move l1 and l2 forward, only if they are not null
// 7- return emptyList.next (skip the dummy)

    const emptyList  = new ListNode(0);
    let tail = emptyList;
    let carry = 0;

 while( l1 !== null || l2 !== null || carry !== 0) {

  const x = l1 !== null ? l1.val : 0;
  const y = l2 !== null ? l2.val : 0;
  const sum = x + y + carry;

  carry = Math.floor(sum / 10 );
  const digit = sum % 10;

  tail.next = new ListNode(digit) ;
  tail = tail.next;

  if( l1 !== null) l1 = l1.next;
  if( l2 !== null) l2 = l2.next;
  

  }
  return emptyList.next;  
 };   
 