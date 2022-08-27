/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    const sum = (node) => {
      //iterate through all children in the node
      for (let child of node.children) {
        //add all values
        total += child.val;

        //if it has any children
        if (child.children.length > 0) {
          sum(child);
        }
      }
    }
    sum(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    const evenCountHelper = (node) => {
      //iterate through all children in the node
      for (let child of node.children) {
        //add to the count if the value is even
        if (child.val % 2 === 0) count++;

        //if the node has any children
        if (child.children.length > 0) {
          evenCountHelper(child);
        }
      }
    }
    evenCountHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    //is the val greater than x ? if yes return 1 : 0
    let count = this.root.val > lowerBound ? 1 : 0;

    const numGreaterHelper = (node) => {
      //iterate through all the children
      for (let child of node.children) {
        //add to cound if child val > lowerBound
        if (child.val > lowerBound) count++;

        //check if node has any children
        if (child.children.length > 0) {
          numGreaterHelper(child);
        }
      }
    }
    numGreaterHelper(this.root);
    return count;
  }

}

module.exports = { Tree, TreeNode };
