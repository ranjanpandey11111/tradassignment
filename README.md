# Node REST API For trading

`NodeAPI` is REST API server implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration. 

This is updated code that follows [RESTful API With Node.js + MongoDB]
## Running project

## Manual

You need to have [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com) installed.

### Node setup on macOS

```sh
# Update Homebrew before installing all dependencies
brew update

# Install Node (+npm) with Homebrew
brew install node

# Install npm dependencies in project folder
npm install
```

### MongoDB setup on macOS

```sh
# Install MongoDB with Homebrew
brew install mongodb

# Create directory for MongoDB data
mkdir -p ./data/mongo

# Run MongoDB daemon process with path to data directory
mongod --dbpath ./data/mongo
```

### Run server

```sh
npm start
# alias for
node bin/www
```

### Create demo data

```sh
npm run-script generate
# alias for
node generateData.js
```

### Create demo data

```sh
docker exec nodeapi_node_api_1 node generateData.js
```
## Tests

```sh
npm test