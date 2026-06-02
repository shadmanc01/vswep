var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    if(root.left === null && root.right === null) {
        return targetSum === root.val;
    }
    const remainingSum = targetSum - root.val;
    return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
};