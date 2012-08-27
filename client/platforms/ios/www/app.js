// expose air taxi to the main page..
window.AirTaxi = window.AirTaxi || {};

document.addEventListener("deviceready", function() {
	$(function(){
		// Error manager
		window.AirTaxi.ErrorHandler = function(err){
			// log the error..
			alert("[ERROR] code:" + err.code + ", message:" + err.message);
		};

		// Application router
		var ApplicationRouter = Backbone.Router.extend({
			routes: {
				"": "get_ride"
			},
			initialize: function(options) {
				// on the application starting, we would like to get the access token of our app
				var facebookAcessTokenRequest = $.get("https://graph.facebook.com/oauth/access_token", {
					grant_type: "client_credentials",
					client_id: "339600456132637",
					client_secret: "46e01338456c61b1df3c3b0438660e2d"
				});
				facebookAcessTokenRequest.success(function(access_token){
					access_token = access_token.replace("access_token=","").trim();
					// save the access token in the cache..
					localStorage["FB_ACCESS_TOKEN"] = access_token;
				});
			},
			get_ride : function(){
				var getRideView = new window.AirTaxi.Views.GetRideView();
			}
		});	

		
		
		window.AirTaxi.Router = new ApplicationRouter();
		Backbone.history.start();	
	});	
}, false);



