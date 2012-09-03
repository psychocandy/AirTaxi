window.AirTaxi ?= {}

window.AirTaxi.DEV_MODE = true;

$(document).ready ->
	document.addEventListener "deviceready", ->
		window.AirTaxi.ErrorHandler = (err) ->
			alert "[ERROR] code: #{err.code} message: #{err.message}"


		ApplicationRouter = Backbone.Router.extend
			routes:
				"": "get_ride"

			get_ride: ->
				getRideView = new window.AirTaxi.Views.GetRideView();
				window.t = getRideView


		window.AirTaxi.Router = new ApplicationRouter()
		Backbone.history.start()

	if window.AirTaxi.DEV_MODE
		evt = document.createEvent('Event');
		evt.initEvent('deviceready', true, true);
		document.dispatchEvent evt
