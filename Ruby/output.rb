# getsとgets.chompの違い　（後ろが改行されるかどうかの違い）
# puts "入力して"
# aa = gets
# puts "入力したのは、#{aa}です"
# # 文字
# # 入力したのは、文字
# # です
# aaa = gets.chomp
# puts "入力したのは、#{aaa}です"
# # 文字
# # 入力したのは、文字

# keysメソッド,valuesメソッド
a = {a: 1, b: 2}
p a.keys
p a.values

x = ["ruby", "ruby", "python", "java"]
# 重複を削除する
p x
p x.uniq
# joinで１つの文字列にする
p x.join
# pushで追加する
p x.push("PHP")
# popで末尾から削除
p x.pop(2)
# shiftで先頭から削除
p x.shift
# unshiftで先頭に追加
p x.unshift("python")
# spliy(指定文字)で指定した文字で区切ることができる
w = "Ruby, Python, Java"
p w
p w.split(",")
# 文字指定しなければ１文字ずつで区切る
p w.split("")
p w.split(",")
p w
# sliceで指定の要素を取り出す
p w.slice(0)

number = [1,5,26,3,88,542,235,2]
# sort順番を並び替える
p number.sort

# 再帰関数基礎　フィボナッチ関数
def fibo(num)
  if num == 0
    return 0
  elsif num == 1
    return 1
  else
    fibo(num - 1) + fibo(num - 2)
  end
end

(1..10).each do |i|
  puts "#{i}回目の計算: #{fibo(i)}"
end