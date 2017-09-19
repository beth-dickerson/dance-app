class User < ApplicationRecord
  has_many :ratings
  has_many :venues
  has_many :categories, through: :venue_categories

  validates_presence_of :first_name
  validates_presence_of :last_name
  validates :email, presence: true, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, allow_nil: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :lockable
end
