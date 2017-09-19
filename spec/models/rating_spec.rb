require 'spec_helper'
require 'rspec/rails'
require 'rails_helper'

RSpec.describe Rating, type: :model do
  it { should have_valid(:review).when('I am a review', "I'm also a review") }
  it { should_not have_valid(:review).when('', nil) }

  it { should have_valid(:body).when('I am a body', "I'm also a body") }
  it { should_not have_valid(:body).when('', nil, "Need ten!", "255 max" * 37)  }

  it { should have_valid(:fun).when(1, 2, 3, 4, 5) }
  it { should_not have_valid(:fun).when('', nil, "one", 0, -1, 6) }

  it { should have_valid(:lame).when(1, 2, 3, 4, 5) }
  it { should_not have_valid(:lame).when('', nil, "one", 0, -1, 6) }

  it { should have_valid(:venue).when(Venue.new) }
  it { should belong_to :user }
  # it { should have_many :comments }
  end
