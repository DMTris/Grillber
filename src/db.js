//mongodb connection and collection function to grillber
import { MongoClient } from 'mongodb';

const schema = 'grillber';
const mlabUser = 'grillberadmin';
const mlabPass = '1234grill';

const mongoUri = process.env.MONGO_URI || 'mongodb://grillberadmin:1234grill@ds129641.mlab.com:29641/grillber';

export const connect = async () => await MongoClient.connect(mongoUri);

export const getCollection = async (myCollection) => {
  const db = await connect();
  return await db.collection(myCollection);
};
