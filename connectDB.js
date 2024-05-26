import mongoose from "mongoose";

export const conntectDB = async () => {
  try {
    const url =
      "mongodb+srv://sachinthokale999:V1msWnR2WZubN0cp@cluster0.o1f2hoq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const connection = await mongoose.connect(url);

    console.log(`mongodb conntected to : ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
