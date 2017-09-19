require 'spec_helper'
require 'rspec/rails'
require 'rails_helper'

RSpec.describe Venue, type: :model do

  it { should have_valid(:name).when('The Barbary', 'Silk Room') }
  it { should_not have_valid(:name).when('', nil) }

  it { should have_valid(:description).when('Local club catering to disco lovers', 'Best house music night in town') }
  it { should_not have_valid(:description).when('', nil) }

  it { should have_valid(:email).when('people@email.com', 'anybody@email.net') }
  it { should_not have_valid(:email).when('', nil, 'user', 'email@@com') }

  it { should have_valid(:neighborhood).when('Chinatown', 'South Street') }
  it { should_not have_valid(:neighborhood).when('', nil) }

  it { should have_valid(:phone).when('123-456-7890', '987-654-3210') }
  it { should_not have_valid(:phone).when('', nil, '123-456') }

  it { should have_valid(:url).when('www.placeholder.com', 'http://github.com/avatar') }
  it { should_not have_valid(:url).when('', nil) }

  it { should have_valid(:photo).when('www.placeholder.com', 'http://github.com/avatar') }
  it { should_not have_valid(:photo).when('', nil) }
end
