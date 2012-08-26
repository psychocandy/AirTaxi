window.AirTaxi = window.AirTaxi || {};
window.AirTaxi.Models = window.AirTaxi.Models || {};


window.AirTaxi.Models.User = Backbone.RelationalModel.extend({
	defaults : {
		name: "",
		rating: 1,
		icon: ""
	},
	idAttribute: "_id"
});

window.AirTaxi.Models.Ride = Backbone.RelationalModel.extend({
	defaults : {
		from: { lat: 0.0, long: 0.0 },
		to: { lat: 0.0, long: 0.0 }
	},
	idAttribute: "_id",


	relations: [{
        type: Backbone.HasMany,
        key: 'users',
        relatedModel: 'window.AirTaxi.Models.User',
        reverseRelation: {
            key: 'ride'
        }
    }]
});

window.AirTaxi.Models.RideCollection = Backbone.Collection.extend({
	model: window.AirTaxi.Models.Ride
});


