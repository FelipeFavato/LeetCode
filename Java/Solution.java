package Java;

// import Java.TreeNode;

class Solution {
  static int[] root1 = {10, 4, 6};
  static int[] root2 = {5, 3, 1};

  public boolean checkTree(TreeNode root) {
    return root.val == root.right.val + root.left.val;
  }

  public static void main(String[] args) {
    System.out.println(root1.getClass());
    // System.out.println("Valores em root1:");
    // for (int i = 0; i < root1.length; i++) {
    //     System.out.println(root1[i]);
    // }
    
    // System.out.println("Valores em root2:");
    // for (int i = 0; i < root2.length; i++) {
    //     System.out.println(root2[i]);
    // }
  }
}