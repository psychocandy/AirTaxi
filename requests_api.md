# Requests API

## Get Taxi (GET)
### Request
* from: location (lat,long)
* to: location (lat,long) 
* when: unix time

### Response
* success: true/false
* message: string, user friendly message
* groups : Array of groups
	* group_id : number
	* to: location (lat,long)
	* when: unix time
	* users_count : number
	
	
## Group Details (GET)
### Request
* group_id : number

### Response
* succes true/false
* message : string
* users : Array
	* user_id : number
	* name : string
	* icon : picture 
	* rating: number (1-5)
	


	
