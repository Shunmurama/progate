# scope("テレビ")
# defよりも前に引き出すと使えない

def scope(item)
  puts "#{item}が欲しい"
end
# putsはいらない
scope("テレビ")

# 第１引数、第２引数を設定できる
def sale(item, price)
  puts "#{item}が#{price}円でセール中です"
end

sale("コップ", 100)

# return
def count(price)
  return price / 2
end
# 戻り値を代入する
harf = count(1000)
puts "#{harf}円です"

# 戻り値をif文で使う時は?を用いるのが一般的
def check?(number)
  return number >= 500
end

if check?(400)
  puts "500以上です"
else
  puts "500未満です"
end

# キーワード引数
def shop(item:, price:, num:)
  puts "#{item}を#{num}個買う"
  puts "値段は#{price * num}円です"
end

shop(item: "PC", price: 10000, num: 2)