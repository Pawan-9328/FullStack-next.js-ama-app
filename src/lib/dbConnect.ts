import mongoose from "mongoose";

// recived object after connected database 
// like what type of it's value and what type of data type
type ConnectionObject = {
   // optinal data type ?
  isConnected?: number;
};

// empty possible because we set optoinal data type from upper ?
const connection: ConnectionObject = {};

// void - no , which type of data return 
async function dbConnect(): Promise<void> {
   // safety check 
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || " ", {});
    //console.log(db);
    
    // 
    connection.isConnected = db.connections[0].readyState;
    console.log("Db Connected Successfully");
  } catch (error) {
      console.log('Database connection is failed');
      
      // no data base connect case 
      process.exit();
  }
}

export default dbConnect;
