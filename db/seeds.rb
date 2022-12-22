puts "Destroying database"

User.destroy_all
Experience.destroy_all
Booking.destroy_all

puts "Seeding users...👥"

u1= User.create(username:"ohheycerimay", password_digest:"1234", image_url:"https://i0.wp.com/bkreader.com/wp-content/uploads/2014/04/g-train.jpg?fit=500%2C380&ssl=1")
u2= User.create(username:"luimatthew", password_digest:"5678", image_url:"https://media.istockphoto.com/id/1309040743/photo/travel-planning-background.jpg?b=1&s=170667a&w=0&k=20&c=oYsf4vJ1lCmKJAwq1DAIte1KH56qCmiyNDvoysDHUhQ=")
u3= User.create(username:"paigetetz", password_digest:"9876", image_url:"http://cdn.akc.org/content/article-body-image/siberian_husky_cute_puppies.jpg")

puts "Users seeded!"

puts "Seeding experiences..."

e1= Experience.create(location:"", description:"", price: 50, image_url:"", avaliability:, includes:"")
e2= Experience.create(location:"", description:"", price:300, image_url:"", avaliability:, includes:"")
e3= Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
e4= Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
e5= Experience.create(location:"", description:"", price: 20, image_url:"", avaliability:, includes:"")
e6= Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
e7= Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
e8= Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
e9= Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
e10= Experience.create(location:"", description:"", price: 500, image_url:"", avaliability:, includes:"")
e11= Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
e12= Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
e13= Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
e14= Experience.create(location:"", description:"", price:, image_url:"", avaliability:, includes:"")
e15= Experience.create(location:"", description:"", price: 70, image_url:"", avaliability:, includes:"")

puts "Experiences seeded!"

puts "Seeding bookings..."

b1= Booking.create(user_id: u1.id, experience_id: e5.id, datetime:'06/30/2022 18:30', people_count: 3, total_price: 60)
b2= Booking.create(user_id: u2.id, experience_id: e1.id, datetime:'06/30/2022 18:30', people_count: 2, total_price: 100)
b3= Booking.create(user_id: u3.id, experience_id: e2.id, datetime:'06/30/2022 18:30', people_count: 2, total_price: 600)
b4= Booking.create(user_id: u1.id, experience_id: e1.id, datetime:'06/30/2022 18:30', people_count: 2, total_price: 40)
b5= Booking.create(user_id: u2.id, experience_id: e10.id, datetime:'06/30/2022 18:30', people_count: 3, total_price: 1500)
b6= Booking.create(user_id: u3.id, experience_id: e15.id, datetime:'06/30/2022 18:30', people_count: 1, total_price: 70)

puts "Bookings seeded!"