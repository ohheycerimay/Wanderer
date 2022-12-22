class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :experience_id
      t.datetime :datetime
      t.integer :people_count
      t.integer :total_price

      t.timestamps
    end
  end
end
