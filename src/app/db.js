// db.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://yanaazaryan4:9tM7zPY1rek4ZenT@wedding.rwoznsy.mongodb.net/';

async function connectDatabase() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
      await client.connect();
      console.log('Connected to MongoDB');
      return client.db('your-database-name');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

export { connectDatabase };
