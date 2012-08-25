// expose air taxi to the main page..
window.AirTaxi = window.AirTaxi || {};

$(function(){
	
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"": "get_ride"
		},
		initialize: function(options) {
			
		},
		get_ride : function(){
			var getRideView = new window.AirTaxi.Views.GetRideView();
			window.t = getRideView;
		}
	});	

	

	
	
	window.AirTaxi.Router = new ApplicationRouter();
	Backbone.history.start();	

});
