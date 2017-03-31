//This is exporting mongodb commands
/*import MongoClient from 'mongod';

const COLLECTION_NAME = 'grillber';
const url = `mongodb://localhost:27017/${COLLECTION_NAME}`;
let database;

export const connect = () => {
  MongoClient.connect( url, ( err, db ) =>
    if( err ){
      console.error(`There was an error connecting to database &{COLLECTION_NAME}.`);
      throw( err );
    }

    database = db;

    return db;
  );
}

export const insert = ( data, db, callback ) => {
  const collection = db.collection( COLLECTION_NAME );

  collection.insertMany( data, ( err, results ) => {
    if( err ){
      console.error(`There was an error loading date into ${COLLECTION_NAME}`);
      console.log(data);
      throw( err );
    }
    callback( result );
  });
}

export const find = ( db, callback ) => {
  const collection = db.collection( COLLECTION_NAME );

  collection.find({}).toArray( ( err, docs ) => {
    if( err ){
      console.error(`There was an error searching the collection ${COLLECTION_NAME}`);
      throw( err );
    }

    console.log(`Found data at ${COLLECTION_NAME}`);
    console.log( docs );
    callback( docs );
  })

}

export const close = db => db.close();*/
