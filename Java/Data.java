import java.util.Scanner;

class Data {
  // ロジックのみを記述し、呼び出したいファイルでimportで呼び出す
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

    //
    public static void type(){
      Scanner scanner = new Scanner(System.in);
      System.out.print("何か文字入力して：");
      String type = scanner.next();
      System.out.println(type);
    }
}