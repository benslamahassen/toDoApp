# toDoApp
A lightweight RestApi built with Express, Typscript and Mongoose.
## Notes
I don't usually push node_modules, /config or .env but for the sake of this project to be easilly tested I did.
### Prerequisites

You need to have MongoDB installed and mongod service up and runing.
You can change the authentication data in the .env file for the MongoDB.
```
user='YOUR_USERNAME'
pass='YOUR_PASSWORD'
dbName='toDoApp' // DB NAME
```

### Endpoints

The server runs on port 3000. You can change it in /lib/server.ts

- Fetch all Tasks :
	- GET /task
- Fetch one Task by its id :
	- GET /task/:id
- Add one Task :
	- POST /task
  - body :
```
title: String, required
description: String, required
done: Boolean
owner: String
created_date: Date, default: Date.now
```
- Update Task :
	- PUT /task/:id
	- body :
```
title: String
description: String
done: Boolean
owner: String
```
- Delete Task :
	- DELETE /task/:id
