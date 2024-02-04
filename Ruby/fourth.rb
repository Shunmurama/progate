class Menu
  # インスタンスを生成
  attr_accessor :name
  attr_accessor :price

  def info
    return "#{self.name} #{self.price}円"
  end

  def get_total_price(count)
    total = self.price * count
    if count >= 4
      total -=100
    end
    return total
  end

end

# インスタンスを生成
  menu1 = Menu.new
  # 代入
  menu1.name = "ラーメン"
  menu1.price = 1100

  puts menu1.get_total_price(5)