class VenueCategory < ApplicationRecord
  belongs_to :venue
  belongs_to :category

  validates :venue_id, presence: true
  validates :category_id, presence: true
end
