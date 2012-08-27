$(function(){
	window.AirTaxi = window.AirTaxi || {};
	window.AirTaxi.Views = window.AirTaxi.Views || {};

	window.AirTaxi.Views.GetRideView = Backbone.View.extend({
		el : $("#get_ride"),
		initialize: function(){
			var geolocationCallback = $.proxy(this.onGeolocation, this);
			navigator.geolocation.getCurrentPosition(geolocationCallback, window.AirTaxi.ErrorHandler);
		},
		onGeolocation: function(position){
			if(localStorage.hasOwnProperty("GEOLOCATION_ADDRESS") &&
			   localStorage.hasOwnProperty("FB_PLACES") &&
			   parseFloat(localStorage["GEOLOCATION_LAT"]) == position.coords.latitude &&
			   parseFloat(localStorage["GEOLOCATION_LNG"]) == position.coords.longitude) {
			   	alert("cached data!");
				// we already found this url, skip the requests..
				this.onAddress(localStorage["GEOLOCATION_ADDRESS"]);
				this.onPlaces(JSON.parse(localStorage["FB_PLACES"]));
			}
			// we got our geolocation, let's save the geolocation for our cache
			localStorage["GEOLOCATION_LAT"] = position.coords.latitude;
			localStorage["GEOLOCATION_LNG"] = position.coords.longitude;

			var latlng = position.coords.latitude  + "," + position.coords.longitude;

			// let's find the address
			var addressRequest = $.getJSON("http://maps.googleapis.com/maps/api/geocode/json", {
				sensor: true,
				latlng: latlng
			});
			addressRequest.success($.proxy(this.onGeocodingRequest, this));

			// let's find nearby places..
			var facebookRequest = $.getJSON("https://graph.facebook.com/search", {
				type: "place",
				center: latlng,
				distance: 1000,
				access_token : localStorage["FB_ACCESS_TOKEN"]
			});
			facebookRequest.success($.proxy(this.onPlaces, this));
		},
		onPlaces: function(data){
			localStorage["FB_PLACES"] = JSON.stringify(data);
			var source = $("#places-option").html(),
				template = Handlebars.compile(source);

			var html = template(data);
			this.$el.find("#to-container").html(html).trigger('create');
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



