# Youtube Subscribers

This project is a backend application that provides APIs for managing YouTube subscibers

The APIs provided by this application include the following:

-> `GET /subscribers`: Returns an array of all subscribers in the database.

-> `GET /subscribers/names`: Returns an array of subscribers with only two fields name and subscribedChannel

-> `GET /subscribers/:id`: Returns the details of a subscriber with the given ID.

## Prerequisites

Before running this application, you must have the following softwares:

Node.js

MongoDB

## Installation

1. Clone this repository:

```bash
 git clone https://github.com/SakshamAgrawall/Get_Youtube_subscribers.git
```

2. Install dependencies:

```bash
 npm i
```

3. Create a .env file and add monogodb uri

4. Create a database:

```bash
cd src
node createDatabase.js
```

5. Start the application:

```bash
 npm run start
```

