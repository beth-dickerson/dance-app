# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Venue.create(
  photo: "https://bestgifs.makeagif.com/wp-content/uploads/2016/07/Grumpiest-Patriot.gif",
  name: "Kitten Around",
  description: "Just a bunch of pals shakin their tails",
  email: "kitten@kittenaround.com",
  neighborhood: "Fishtown",
  phone: "888-867-5309",
  url: "https://www.lecatcafe.org/",
  user_id: 1
)

5.times do
  Venue.create(
    photo: "#{Faker::Fillmurray.image}",
    name: "#{Faker::Cat.name}",
    description: "#{Faker::Friends.quote}",
    email: "#{Faker::Internet.email}",
    neighborhood: "#{Faker::Space.galaxy}",
    phone: "#{Faker::PhoneNumber.phone_number}",
    url: "#{Faker::Internet.domain_name}",
    user_id: 1
  )
end
