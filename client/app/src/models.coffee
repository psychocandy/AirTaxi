window.AirTaxi ?= {}
window.AirTaxi.Models ?= {}

class window.AirTaxi.Models.User extends Backbone.RelationalModel
	defaults:
		name: ""
		rating: 1
		icon: ""

	idAttribute: "_id"


class window.AirTaxi.Models.Ride extends Backbone.RelationalModel
	defaults:
		from:
			lat: 0.0
			long: 0.0
		to:
			lat: 0.0
			long: 0.0

	idAttribute: "_id"

	relations: [
		type: Backbone.HasMany
		key: 'users'
		relatedModel: 'window.AirTaxi.Models.User'
		reverseRelations:
			key: 'ride'
	]


class window.AirTaxi.Models.RideCollection extends Backbone.Collection
	model: window.AirTaxi.Models.Ride
		

class window.AirTaxi.Models.ForsquareVenue extends Backbone.Model
	defaults:
		id: null
		name: ""
		location:
			address: ""
			lat: 0.0
			long: 0.0
			distance: 0.0
			country: ""
			city: ""
			cc: ""


class window.AirTaxi.Models.ForsquareVenues extends Backbone.Collection
	model: window.AirTaxi.Models.ForsquareVenue
	initialize: (params) ->
		@params = params
	set: (params) ->
		@params = params
	parse: (response) ->
		response.response.venues
	url: ->
		ll = "#{@params.lat},#{@params.long}"
		client_id = "CJHLE0A4T3CWDMZ3UZ1XRAIDRDZTBCQBRETN4MMCI012PRTR"
		client_secret = "ERA1YLUZ2GGCHYPNCOEJCFF1DNBRY4SKEXDZNWP2OREWVYDM"
		"https://api.foursquare.com/v2/venues/search?ll=#{ll}&llAcc=#{@params.accuracy}&intent=browse&radius=500&client_id=#{client_id}&client_secret=#{client_secret}&v=20120902"



class window.AirTaxi.Models.UserLocation extends Backbone.Model
	defaults:
		lat: 0.0
		long: 0.0
		accuracy: 0
		address : ""
	fetch_location: (cb) ->
		navigator.geolocation.getCurrentPosition (position) => 
			this.set("lat", position.coords.latitude)
			this.set("long", position.coords.longitude)
			this.set("accuracy", position.coords.accuracy)
			this.fetch().success => cb @ if cb instanceof Function

	parse: (response) ->
		return  if response.status != "OK"
		address: response.results[0].formatted_address
	url: ->
		latlang = this.get("lat") + "," + this.get("long")
		"http://maps.googleapis.com/maps/api/geocode/json?latlng=#{latlang}&sensor=true"













