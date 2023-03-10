function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/

const bstHeight = tree => {
  let totalHeight = 0;
  //recursively traverse the tree through ...depth first search?
    //save the height at each layer
    function traverse (node, height) {
      //if statement for if the height is greater than totalHeight
      if (height > totalHeight) totalHeight = height;
        //yes -> update totalHeight
      //check left and right of each node
      if (node.left) {
        traverse(node.left, height + 1)
      }
      if (node.right) {
        traverse(node.right, height + 1)
      }
    }
  
  traverse(tree, height = 0)
  //save a variable that is the max height
  //return var after algo has finished
  return totalHeight
};

/*
  Extension:

  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

  A superbalanced tree is a tree that is balanced at every subtree level as well.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

  const superbalanced = tree => {
    function checkHeights (node, Lheight, Rheight) {
      console.log('initial check', node.value, Lheight, Rheight, Math.abs(Lheight - Rheight))
      if (Math.abs(Lheight - Rheight) > 1) return false; 
      //if we go down the left path, go until the node.left.left is null and calculate there
      if (node.left) {
        checkHeights(node.left, Lheight+1, Rheight)
      }
      if (node.right) {
        checkHeights(node.right, Lheight, Rheight+1)
      }
    }
    checkHeights(tree, 0, 0)
    //if we can traverse the entire tree without triggering line 81, it is true
    return true; 
  };

module.exports = {BinarySearchTree, bstHeight, superbalanced};
