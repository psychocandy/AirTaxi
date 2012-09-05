class Ride
  include Mongoid::Document

  field :from, type: Array
  field :to, type: Array

  # index(
  #     [
  #       [:from, Mongo::GEO2D]             
  #     ], background: true
  # )



end
