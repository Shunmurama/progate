import java.util.Scanner;

class Output {
  // voidはデータ型のかわりみたいなもん
  public static void main(String[] args){
    Scanner scanner = new Scanner(System.in);
    System.out.println("こんにちは");

    // 変数定義　データ型　変数名
    System.out.println("数字を入力します");
    int number1 = scanner.nextInt();
    System.out.println(number1 + "です");

    // 更新の時はデータ型なし
    System.out.println("再度数字の変更をします");
    number1 = scanner.nextInt();
    System.out.println(number1 + "に変更しました");

    System.out.println("数字を追加します");
    int number2 = scanner.nextInt();
    // int型でも(double)を前につけることでdoubleとして扱える
    System.out.println((double)number1 * number2);

  }

}