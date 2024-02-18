# "date"だけで/ はいらない
require "date"

# 今日を代入
today = Date.today

# 特定の日付を代入する
date = Date.new(2000, 2, 12)

puts today

puts date

puts today.sunday?

puts date.monday?