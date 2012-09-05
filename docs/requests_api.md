# Requests API

## Get Avilable Rides (GET)
### Request
* from: location (lat,long)
* to: location (lat,long), name
* when: unix time

GET /rides/v1/
{
	from: { lat: 0 , long: 0 },
	to: { lat: 0 , long: 0, name: "" },
	when: unix_time
}

### Response
* success: true/false
* message: string, user friendly message
* rides : Array of rides
	* ride_id : number
	* to: location (lat,long)
	* when: unix time
	* users_count : number

GET /rides/v1	
{
	metadata: {
		success: true,
		message: "Hello"
	},
	rides: [
		{
			id: 0,
			to: { lat: 0, long: 0, name: "" },
			when: unix_time,
			users_count : 1-4
		}
	]
}	

## Get Ride Details (GET)
### Request
/rides/1.json

### Response
* succes true/false
* message : string
* users : Array
	* user_id : number
	* name : string
	* icon : picture 
	* rating: number (1-5)
	
{
	metadata: {..}
	users: [{
		id, name, icon , rating
	}]
}


	
