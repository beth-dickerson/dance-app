require 'rails_helper'

RSpec.describe Category, type: :model do
  it { should have_valid(:category).when('Salsa', "Hip-Hop") }
  it { should_not have_valid(:category).when('', nil) }
end
