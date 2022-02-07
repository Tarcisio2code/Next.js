import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://tarcisio:course2021@cluster0.cldyn.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
