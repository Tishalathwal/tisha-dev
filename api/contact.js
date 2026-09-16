const mongoose = require('mongoose');

mongoose.set('bufferCommands', false);

let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 8000,
  });
  isConnected = true;
};

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectDB();
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Something went wrong', detail: err.message });
  }
};