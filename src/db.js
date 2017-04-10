//mongodb connection and collection function to grillber
import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/grillber';

export const connect = async () => await MongoClient.connect(mongoUri);

export const getCollection = async (myCollection) => {
  const db = await connect();
  return db.collection(myCollection);
};
