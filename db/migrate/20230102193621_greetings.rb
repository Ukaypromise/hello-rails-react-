class Greetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.text :message
      
    end
  end
end
