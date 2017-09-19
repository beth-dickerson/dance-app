FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "person#{n}@example.com" }
    first_name 'Betty'
    last_name 'Rubble'
    password 'password'
    password_confirmation 'password'
  end
end
