import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;
const MONGODB_DB = process.env.NEXT_PUBLIC_DB_NAME;

// check the MongoDB URI
if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

// check the MongoDB DB
if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options
    const opts = {    };

    // Connect to cluster
    let client = new MongoClient(NEXT_PUBLIC_MONGODB_URI, opts);
    await client.connect();
    let db = client.db(NEXT_PUBLIC_MONGODB_DB);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}