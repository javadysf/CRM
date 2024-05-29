import mongoose from "mongoose";

async function ConnectDB() {
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URI);
    console.log("CONNECTED DB");
  } catch (error) {
    console.log(error);
  }
}

export default ConnectDB;
