import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-5ztwfav-shard-00-00.dyt8bur.mongodb.net:27017,ac-5ztwfav-shard-00-01.dyt8bur.mongodb.net:27017,ac-5ztwfav-shard-00-02.dyt8bur.mongodb.net:27017/?ssl=true&replicaSet=atlas-pa12xj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try {

       await mongoose.connect(URL);
       console.log('Database Connected sucessfully')
    } catch (error){
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;


