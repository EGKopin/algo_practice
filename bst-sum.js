function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

const bstSum = root => {
  let sum = 0;
  function addTogether (node) {
  //perform depth first search
  //if statement - if there is no root, return 0
  // if (!root) return 0;
  sum += node.value;
  //create two variables - one for left, one for right
  if (node.left) addTogether(node.left);
  if (node.right) addTogether(node.right);
}
  addTogether(root)
  return sum;
};


let bst = new BinarySearchTree(6);
bst.left = new BinarySearchTree(3);
bst.right = new BinarySearchTree(10);

console.log(bstSum(bst))
/*

Extension:
Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

//this is a perfect mirror image so should I just switch the right and left in each instance?
const bstReverse = root => {
  if (!root) return;
  function switchNodes (node) {
    //if a given node has neither a left or right node
    if (!node.left && !node.right) return; 
    //if the node only has a right node
    if (!node.left) {
      node.left = node.right;
      node.right = null;
      switchNodes(node.left)
    } else
    //if the node only has a left node
    if (!node.right) { 
      node.right = node.left;
      node.left = null;
      switchNodes(node.right)
    } else
    //if the node has both left and right
    if (node.left.value < node.right.value){ 
      //create a pointer to the left node so we don't lose it
      const oldLeft = node.left;
      node.left = node.right;
      node.right = oldLeft
      switchNodes(node.left)
      switchNodes(node.right)
    }
  }
  switchNodes(root)
};
bst.left.right = new BinarySearchTree(4);
bst.right.right = new BinarySearchTree(14);
// console.log(bst)
bstReverse(bst)
console.log(bst)