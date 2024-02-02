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