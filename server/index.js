const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/womens-suit-store', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));


const printedPertSchema = new mongoose.Schema({
    title: String,
    regularPrice: Number,
    imageurls: [String], // Array of image URLs
    // images: [String],
});

const PrintedPert = mongoose.model('printed_perts', printedPertSchema);
app.get('/api/printed_perts', async (req, res) => {
    try {
        const data = await PrintedPert.find().limit(10); // Fetch the first 10 documents
        res.json(data); // Send the fetched data
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});