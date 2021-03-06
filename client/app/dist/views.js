// Generated by CoffeeScript 1.3.3
(function() {
  var _base, _ref, _ref1,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_ref = window.AirTaxi) == null) {
    window.AirTaxi = {};
  }

  if ((_ref1 = (_base = window.AirTaxi).Views) == null) {
    _base.Views = {};
  }

  window.AirTaxi.Views.GetRideView = (function(_super) {

    __extends(GetRideView, _super);

    function GetRideView() {
      this.on_forsquare_venues = __bind(this.on_forsquare_venues, this);

      this.on_user_location = __bind(this.on_user_location, this);

      this.initialize = __bind(this.initialize, this);
      return GetRideView.__super__.constructor.apply(this, arguments);
    }

    GetRideView.prototype.initialize = function() {
      this.$el = $("#get_ride");
      this.user_location = new window.AirTaxi.Models.UserLocation();
      return this.user_location.fetch_location(this.on_user_location);
    };

    GetRideView.prototype.on_user_location = function() {
      var html;
      html = window.AirTaxi.ViewHelpers.BindModel("user-location-template", this.user_location);
      this.$el.find("#user-location").html(html).trigger('create');
      this.forsquare_venues = new window.AirTaxi.Models.ForsquareVenues({
        lat: this.user_location.get("lat"),
        long: this.user_location.get("long"),
        accuracy: this.user_location.get("accuracy")
      });
      return this.forsquare_venues.fetch().success(this.on_forsquare_venues);
    };

    GetRideView.prototype.on_forsquare_venues = function() {
      var html;
      html = window.AirTaxi.ViewHelpers.BindCollection("places-option-template", this.forsquare_venues);
      return this.$el.find("#places-option").html(html).trigger('create');
    };

    return GetRideView;

  })(Backbone.View);

}).call(this);
