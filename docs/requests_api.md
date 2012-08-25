# Requests API

## Get Avilable Rides (GET)
### Request
* from: location (lat,long)
* to: location (lat,long) 
* when: unix time

### Response
* success: true/false
* message: string, user friendly message
* rides : Array of rides
	* ride_id : number
	* to: location (lat,long)
	* when: unix time
	* users_count : number
	
	
## Get Ride Details (GET)
### Request
* ride_id : number

### Response
* succes true/false
* message : string
* users : Array
	* user_id : number
	* name : string
	* icon : picture 
	* rating: number (1-5)
	


	
