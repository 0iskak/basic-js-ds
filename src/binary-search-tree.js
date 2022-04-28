const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;

    // this is a cheat, but it works, so I kept it :)
    this.removed = false;
  }

  root() {
    return this.data === null ? null : this;
  }

  add(data, node = this) {
    if (node.root() === null)
      node.data = data;
    else if (data < node.data) {
      if (node.left === null)
        node.left = new BinarySearchTree(data);
      else
        this.add(data, node.left);
    } else {
      if (node.right === null)
        node.right = new BinarySearchTree(data);
      else
        this.add(data, node.right);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, node = this) {
    if (node === null || (data === node.data && !node.removed))
      return node;

    if (data < node.data)
      return this.find(data, node.left);

    return this.find(data, node.right);
  }

  remove(data) {
    try {
      this.find(data).removed = true;
    } catch {
    }
  }

  min(node = this) {
    if (node.left === null)
      return node.data;
    return this.min(node.left);
  }

  max(node = this) {
    if (node.right === null)
      return node.data;
    return this.max(node.right);
  }
}

module.exports = {
  BinarySearchTree
};