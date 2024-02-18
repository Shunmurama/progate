class Output {
  public static void main(String[] args){
    System.out.println("こんにちは");

    // 変数定義　データ型　変数名
    int number1 = 10;
    System.out.println(number1);

    // 更新の時はデータ型なし
    number1 = 2;
    System.out.println(number1);

    int number2 = 4;
    // int型でも(double)を前につけることでdoubleとして扱える
    System.out.println((double)number1 * number2);

  }
}