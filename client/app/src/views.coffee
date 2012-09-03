window.AirTaxi ?= {}
window.AirTaxi.Views ?= {}


class window.AirTaxi.Views.GetRideView extends Backbone.View
	initialize: =>
		@$el = $("#get_ride")
		@user_location = new window.AirTaxi.Models.UserLocation()
		@user_location.fetch_location this.on_user_location
	on_user_location: =>
		html = window.AirTaxi.ViewHelpers.BindModel("user-location-template", @user_location)
		this.$el.find("#user-location").html(html).trigger('create')

		@forsquare_venues = new window.AirTaxi.Models.ForsquareVenues
			lat: @user_location.get("lat")
			long: @user_location.get("long")
			accuracy: @user_location.get("accuracy")
		@forsquare_venues.fetch().success this.on_forsquare_venues
	on_forsquare_venues: =>
		html = window.AirTaxi.ViewHelpers.BindCollection("places-option-template", @forsquare_venues)		
		this.$el.find("#places-option").html(html).trigger('create')