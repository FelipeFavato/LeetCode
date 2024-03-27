package Java;

public class Solution {
  // Deve retornar um array de inteiros e aceita como parametro
  // um array de inteiros.
  public int[] runningSum(int[] nums) {
    // Instancia um novo aray de inteiros;
    int[] ans = new int[nums.length];
    if (nums.length == 0) return ans;
    int sum = nums[0];
    ans[0] = sum;

    for (int i=1; i < nums.length ; i++) {
        ans[i] = sum+nums[i];
        sum = ans[i];
    }

    return ans;
  }

  public static void main(String[] args) {
    // Aqui você pode colocar o código que deseja executar quando o programa for iniciado
    System.out.println("Olá, mundo!"); // Exemplo simples de saída
}
}
