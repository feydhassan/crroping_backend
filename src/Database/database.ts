import * as mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config();


export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongodb.MongoClient = new mongodb.MongoClient(process.env.MONGO_URL as string);
            
    await client.connect();
        
    const db: mongodb.Db = client.db(process.env.DB_NAME as string);
   
    const gamesCollection: mongodb.Collection = db.collection(process.env.GAMES_COLLECTION_NAME as string);
     console.log((await gamesCollection.find({}).toArray()));
      
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.find({}).toArray()}`);
 }