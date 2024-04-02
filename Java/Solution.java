package Java;


public class Solution {
  public boolean canForm(String word, int[] count) {
      int[] c = new int[26];
      for (int i = 0; i < word.length(); i++) {
          int k = word.charAt(i) - 'a';
          c[k]++;
          if (c[k] > count[k]) return false;
      }
      return true;
  }

  public int countCharacters(String[] words, String chars) {
      int[] count = new int[26];
      for (int i = 0; i < chars.length(); i++) {
          count[chars.charAt(i) - 'a']++;
      }

      int res = 0;
      for (String word : words) {
          if (canForm(word, count)) res += word.length();
      }
      return res;
  }
}
