import { connectDatabase } from '../../db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, attending } = req.body;
      const db = await connectDatabase();
      const guestsCollection = db.collection('guests');
      await guestsCollection.insertOne({ name, attending });
      res.status(201).json({ message: 'RSVP submitted successfully' });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
