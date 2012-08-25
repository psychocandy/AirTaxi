class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Paranoia

  field :name, type: String
  field :email, type: String
  field :phone, type: String
  field :rating, type: Integer

  attr_accessible :name, :email, :phone

  validates_presence_of :name
  validates_presence_of :email

end
