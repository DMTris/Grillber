//mongodb connection
import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/grillber';

const connect = async () => await MongoClient.connect(mongoUri);

export default connect;

export const getCollection = async (myCollection) => {
  const db = await connect();
  return db.collection(myCollection);
};
