var traverse = function(left, right) {
    if(left === null && right === null) return true;
    if(left === null || right === null) return false;
    if(left.val !== right.val) return false;
    return traverse(left.left, right.right) && traverse(left.right, right.left);
}
var isSymmetric = function(root) {
    if(root === null) return false;
    return traverse(root.left, root.right);
};