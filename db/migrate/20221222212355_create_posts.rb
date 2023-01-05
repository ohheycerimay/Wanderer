class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.integer :experience_id
      t.string :comment
      t.integer :likes

      t.timestamps
    end
  end
end
