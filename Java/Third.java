class Third {
  public static void main(String[] args){
    hello("Gon", 21);
    total(3, 7);
  }



    // メソッド名(データ型 引数)
    public static void hello(String name, int age){
      System.out.println("こんにちは"+ name + "さん");
      System.out.println(age + "歳");
    }

    public static void total(int number1, int number2){
      int num = add(number1, number2);
      System.out.println(num);
    }

    public static int add(int number1, int number2){
      return number1 + number2;
    }
}