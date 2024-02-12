# data.rbのクラスから継承
require "./data"

data1 = Data.new(name: "Gon", age: 21)
data2 = Data.new(name: "Jhon", age: 22)
data3 = Data.new(name: "Bob", age: 23)
# 配列にすることも可能
datas = [data1, data2, data3]
# 番号をつける
index = 0

datas.each do |data|
  puts "#{index}." + data.info
  index += 1
end

puts "数字を選んでください"

number = gets.chomp.to_i

if 0 <= number && number < 3
  human = datas[number]
  puts "#{human.name}さんですね"
  puts "#{human.name}さんは#{human.age}歳です"
else
  puts "その数字に該当する人はいません"
end