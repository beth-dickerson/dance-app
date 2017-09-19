require 'rails_helper'

RSpec.describe VenueCategory, type: :model do
  context "#venue_categories" do
    it { should have_valid(:venue_id).when(1, 3, 5)}
    it { should_not have_valid(:venue_id).when(nil, "")}

    it { should have_valid(:category_id).when(1, 3, 5)}
    it { should_not have_valid(:category_id).when(nil, "")}
  end

  context "#associations" do
    it { should belong_to :venue}
    it { should belong_to :category}
  end
end
