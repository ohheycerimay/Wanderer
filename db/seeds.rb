puts "Destroying database"

User.destroy_all
Experience.destroy_all
Booking.destroy_all

puts "Seeding users...👥"

User.create(username:"ohheycerimay", password_digest:"1234", image_url:"https://www.kateblackburn.us/wp-content/uploads/2017/09/jp_12182015_nyt_crossword.jpg")
User.create(username:"luimatthew", password_digest:"5678", image_url:"https://media.istockphoto.com/id/1309040743/photo/travel-planning-background.jpg?b=1&s=170667a&w=0&k=20&c=oYsf4vJ1lCmKJAwq1DAIte1KH56qCmiyNDvoysDHUhQ=")
User.create(username:"paigetetz", password_digest:"9876", image_url:"http://cdn.akc.org/content/article-body-image/siberian_husky_cute_puppies.jpg")

puts "Users seeded!"

puts "Seeding experiences..."

Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")

puts "Experiences seeded!"

puts "Seeding bookings..."

Booking.create(user_id:, experience_id:, start_date:, end_date:, total_price:)
Booking.create(user_id:, experience_id:, start_date:, end_date:, total_price:)
Booking.create(user_id:, experience_id:, start_date:, end_date:, total_price:)
Booking.create(user_id:, experience_id:, start_date:, end_date:, total_price:)
Booking.create(user_id:, experience_id:, start_date:, end_date:, total_price:)
Booking.create(user_id:, experience_id:, start_date:, end_date:, total_price:)

puts "Bookings seeded!"