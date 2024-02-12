class Data
  attr_accessor :name
  attr_accessor :age

  # initializeメソッドを使う
  def initialize(name:, age:)
    self.name = name
    self.age = age
  end

  def info
    return "#{name}さんは#{age}歳です"
  end

end