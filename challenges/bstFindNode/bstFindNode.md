## bstFindNode

**Difficulty**: Medium 

## Prompt 

A **Binary Tree** is a data structure comprised of nodes and edges that connect nodes. Here is a diagram of a binary search tree:

![binary-trees](binary_search_tree.png)

Some terms you should be aware of:

* Each circle in the above diagram is called a **node**
* A node that is directly above another node is called a **parent node**
* A node that is immediately below another node is called a **child node**
* A Binary Tree is composed of zero to many **subtrees**

There are some rules or **invariants** a Binary Search Tree obeys. These invariants are rules that specify *what* the relationships between nodes are:

1. The values of the nodes in the left subtree are less than the values of the parent node
2. The value of the nodes in the right subtree are greater than the values of the parent node
3. There are no nodes with the same values

## Examples

```js
/*

bst is the Binary Search Tree shown below:

     4        Layer 0
   /   \
  2     7     Layer 1
 / \   / \
1   3 6   9   Layer 2

*/

const bst = new BinaryTreeNode(4); // Layer 0

const two = root.addLeftChild(2);  // Layer 1 
const seven = root.addRightChild(7); // Layer 1

const one = two.addLeftChild(1); // Layer 2
const three = two.addRightChild(3); // Layer 2
const six = seven.addLeftChild(6); // Layer 2
const nine = seven.addRightChild(9); // Layer 2

bst.findNode(1, bst); //=> true 
bst.findNode(0, bst); //=> false
```

## Starter Code

```js
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addLeftChild(value) {
        let left = new BinaryTreeNode(value);
        this.left = left;
        return left;
    }

    addRightChild(value) {
        let right = new BinaryTreeNode(value);
        this.right = right;
        return right;
    }

    doesValueExist(value) {
        // Write code here
    }
}
```
