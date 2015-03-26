class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :site
      t.string :bio

      t.timestamps
    end
  end
end
