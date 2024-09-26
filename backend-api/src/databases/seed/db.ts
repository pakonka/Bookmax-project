import mongoose from "mongoose";
import { globalConfig } from "../../constants/configs";

const mongooseDbOptions = {
  autoIndex: true, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(globalConfig.MONGODB_URL as string, mongooseDbOptions)
  .then(() => {
    console.log("Connected to MongoDB");
    //should listen app here
  })
  .catch((err) => {
    console.error("Failed to Connect to MongoDB", err);
  });

const runDB = async () => {
  console.log("runDB running....");

  // await Order.insertMany(orders);
};

try {
  runDB();
} catch (error) {
  console.log(error);
}
