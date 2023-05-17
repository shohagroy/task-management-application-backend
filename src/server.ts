import mongoose from "mongoose";
import app from "./app";

const port = process.env.PORT || 5000;
const dbUri = process.env.URI || "mongodb://127.0.0.1:27017/task_management";

const dbConnect = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log(`🛢 Database connection successful`);

    app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to connect database`, error);
  }
};

dbConnect();
