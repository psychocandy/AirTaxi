// expose air taxi to the main page..
window.AirTaxi = window.AirTaxi || {};

document.addEventListener("deviceready", function() {
	$(function(){
		// Error manager
		window.AirTaxi.ErrorHandler = function(err){
			// log the error..
			alert("[ERROR] code:" + err.code + ", message:" + err.message);
		};

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
}, false);



