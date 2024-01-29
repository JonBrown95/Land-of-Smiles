const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.COSMOSDB_ENDPOINT;
const key = process.env.COSMOSDB_KEY;


const cosmosClient = new CosmosClient({ endpoint, key });

module.exports = cosmosClient;
