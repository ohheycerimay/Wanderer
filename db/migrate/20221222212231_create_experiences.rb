class CreateExperiences < ActiveRecord::Migration[6.1]
  def change
    create_table :experiences do |t|
      t.string :name
      t.string :location
      t.text :description
      t.integer :price
      t.string :image_url
      t.string :includes

      t.timestamps
    end
  end
end
