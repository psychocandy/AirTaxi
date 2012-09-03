
describe "User Location", ->
	beforeEach =>
		@user_location = new window.AirTaxi.Models.UserLocation
		

	it "should be able to notify when the user location is detected", =>
		callback = jasmine.createSpy()
		@user_location.fetch_location callback
		waits 1000
		runs => expect(callback).toHaveBeenCalled()
	
	it "should be able to return the associated model as callback", =>
		callback = jasmine.createSpy()
		@user_location.fetch_location callback
		waits 1000
		runs => expect(callback).toHaveBeenCalledWith(@user_location)			
	
	it "should be able to get the current user coordinates and store it", =>
		@user_location.fetch_location()
		waits 1000
		runs =>
			expect(@user_location.get("lat")).toBeGreaterThan(0)
			expect(@user_location.get("long")).toBeGreaterThan(0)

	it "should be able to get the current user address and store it", =>
		@user_location.fetch_location()
		waits 1000
		runs =>
			expect(@user_location.get("address").length).toBeGreaterThan(0)

	it "should be able to handle undefined user coordinates", =>
		@user_location.fetch()
		waits 1000
		runs =>
			expect(@user_location.get("address").length).toBeGreaterThan(0)
				
	
	it "should be able to handle ZERO_REULTS from google", =>
		@user_location.set(lat: -1)
		@user_location.fetch()
		waits 1000
		runs =>
			expect(@user_location.get("address").length).toBe(0)



# Think for more tests...
# 1) Move views to CoffeScript & forsquare
# 2) Write ForsquareVenues tests, handle weird situations
# 3) Write script for syncing with ios, like "node deploy.js ios"
# 4) Deploy script - "node deploy.js mincat" :) Grunt?