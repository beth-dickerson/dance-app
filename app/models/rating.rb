class Rating < ApplicationRecord
  belongs_to :venue
  belongs_to :user  

  validates :review, presence: true, length: { minimum: 10, maximum: 140 }
  validates :fun, numericality: true, presence: true, inclusion: { in: 1..5}
  validates :lame, numericality: true, presence: true, inclusion: { in: 1..5}
  validates :venue_id, presence: true
  validates :user_id, presence: true
end
