$(function(){
	window.AirTaxi = window.AirTaxi || {};
	window.AirTaxi.Views = window.AirTaxi.Views || {};

	window.AirTaxi.Views.GetRideView = Backbone.View.extend({
		el : $("#get_ride"),
		initialize: function(){
			// let's get the user geolocation
			// do we have the geolocation cached?
			if(!localStorage.hasOwnProperty("GEOLOCATION_ADDRESS")) {
				var geolocationCallback = $.proxy(this.onGeolocation, this);
				navigator.geolocation.getCurrentPosition(geolocationCallback, window.AirTaxi.ErrorHandler);
			} else {
				this.onAddress(localStorage["GEOLOCATION_ADDRESS"]);
			}
			
		},
		onGeolocation: function(position){
			// we got our geolocation, let's find the adress
			var addressRequest = $.getJSON("http://maps.googleapis.com/maps/api/geocode/json", {
				sensor: true,
				latlng: position.coords.latitude  + "," + position.coords.longitude
			});
			addressRequest.success($.proxy(this.onGeocodingRequest, this));
		},
		onGeocodingRequest: function(data){
			// do we have adress?
			if(data.results.length > 0) {
				// get the first address, it will be the most accurate
				var address = data.results[0].formatted_address;

				// save the adress to cache, and call our callback
				localStorage["GEOLOCATION_ADDRESS"] = address;
				this.onAddress(address);
			} else {
				// no user data..
				// TODO: make some ui ... thing..
			}
		},
		onAddress: function(address){
			// change the from
			this.$el.find("#from").attr("value", address);
		}
	});



});



