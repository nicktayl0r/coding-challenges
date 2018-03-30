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

    isSymmetric(value) {
        // Write code here
    }
}