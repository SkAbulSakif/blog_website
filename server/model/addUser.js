const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');


const uri = `mongodb://${username}:${password}@ac-5ztwfav-shard-00-00.dyt8bur.mongodb.net:27017,ac-5ztwfav-shard-00-01.dyt8bur.mongodb.net:27017,ac-5ztwfav-shard-00-02.dyt8bur.mongodb.net:27017/?ssl=true&replicaSet=atlas-pa12xj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function addUser(email, password) {
    try {
        await client.connect();
        const database = client.db('maharajer_darbare');
        const collection = database.collection('login_user');

        // Encrypt the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create the user object
        const user = {
            email: email,
            password: hashedPassword
        };

        // Insert the user into the collection
        const result = await collection.insertOne(user);
        console.log(`New user created with the following id: ${result.insertedId}`);
    } catch (error) {
        console.error('Error adding user:', error);
    } finally {
        await client.close();
    }
}

// Replace these with the email and password you want to add
const email = 'abc@gmail.com';
const password = '123456';

addUser(email, password);
