import mongoose from "mongoose";

 const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('connected to MongoDB')
  } catch (error) {
    console.log("error while connecting to MongoDB", error);
  }
};

export default connectToMongoDb