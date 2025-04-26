require('dotenv').config();             
const express = require('express');
const mongoose = require('mongoose');
const Incident = require('./models/Incident');

const app = express();
const PORT = process.env.PORT || 3000;   


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
});


app.use(express.json());


app.get('/incidents', async (req, res) => {
    try {
        const incidents = await Incident.find().sort({ reported_at: -1 });
        res.json(incidents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.post('/incidents', async (req, res) => {
    const { title, description, severity } = req.body;
    if (!title || !description || !['Low','Medium','High'].includes(severity)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    try {
        const incident = new Incident({ title, description, severity });
        await incident.save();
        res.status(201).json(incident);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/incidents/:id', async (req, res) => {
    try {
        const incident = await Incident.findById(req.params.id);
        if (!incident) return res.status(404).json({ error: 'Not found' });
        res.json(incident);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.delete('/incidents/:id', async (req, res) => {
    try {
        const deleted = await Incident.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
