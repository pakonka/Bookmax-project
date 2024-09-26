import app from "./src/app";
import mongoose from "mongoose";
import { globalConfig } from "./src/constants/configs";
const PORT = globalConfig.PORT;

/// Start the server

mongoose
  .connect(globalConfig.MONGODB_URL as string)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to Connect to MongoDB", err);
  });
