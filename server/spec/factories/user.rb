FactoryGirl.define do
  
  sequence :email do |n|
      "hello#{n}@null.co.il"
    end

  factory :user do |cell|
    email
    name "A Name"
    password "foobar"
  end

  factory :user_with_phone, :parent => :user do |user|
    user.phone "052555555"
  end

end