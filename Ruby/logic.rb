array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

p array.slice(1)
p array.slice(-1)
# B~F
p array.slice(1..5)

# .gsubで文字の入れ替え
str = "abc, aabbcc, aaabbbccc"
p str.gsub(/a+/, "z")

strr = "abc, abbc, ac"
# ?は一個前の文字が０個か１個のとき
# bは一個までならあってもなくてもいい
p strr.gsub(/ab?c/, "z")
# .は任意の文字１文字
p strr.gsub(/a.c/, "z")

st = "ラーメンを食べる"
p st.match(/.+を食べる/)

array.each do |a|
  p (a+a)
end

number = [1, 2, 3, 4, 5]
num = number.map { |n| n + 1 }
p num
even_num = num.select { |n| n.even? }
p even_num
odd_num = num.select { |n| n.odd? }
p odd_num