class Venue < ApplicationRecord
  belongs_to :user
  has_many :ratings
  has_many :venue_categories
  has_many :categories, through: :venue_categories

  validates :name, presence: true
  validates :description, presence: true, length: { minimum: 10 }
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, allow_nil: true
  validates :neighborhood, presence: true
  validates :phone_number, presence: true, format:
    { with: /\A[\w]{3}-[\w]{3}-[\w]{4}\z/ }
  validates :url, presence: true
  validates :photo, presence: true
  validates :user_id, presence: true

  def self.search(search)
    where("first_name LIKE ? OR last_name LIKE ? OR office LIKE ?", "%#{search}%", "%#{search}%", "%#{search}%")
  end
end
