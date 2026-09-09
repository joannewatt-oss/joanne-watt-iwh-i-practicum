require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// The custom object's type ID or fully qualified name, e.g. "2-12345678"
// or "p12345678_podcast_episodes". Set this in your .env file.
const CUSTOM_OBJECT_TYPE = process.env.HUBSPOT_CUSTOM_OBJECT_TYPE;
const ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

const PROPERTIES = ['name', 'guest', 'topic', 'summary'];

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

// Homepage: fetch all Podcast Episode records and display them in a table.
app.get('/', async (req, res) => {
  const url = `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}?properties=${PROPERTIES.join(',')}`;

  try {
    const resp = await axios.get(url, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
    });

    res.render('homepage', {
      title: 'Podcast Episodes | Integrating With HubSpot I Practicum',
      episodes: resp.data.results
    });
  } catch (err) {
    console.error(err.response ? err.response.data : err.message);
    res.status(500).send('Error retrieving records from HubSpot.');
  }
});

// Show the form to add a new Podcast Episode record.
app.get('/update-cobj', (req, res) => {
  res.render('updates', {
    title: 'Update Custom Object Form | Integrating With HubSpot I Practicum'
  });
});

// Handle the form submission: create a new record, then redirect home.
app.post('/update-cobj', async (req, res) => {
  const { name, guest, topic, summary } = req.body;
  const url = `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}`;

  const data = {
    properties: { name, guest, topic, summary }
  };

  try {
    await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    res.redirect('/');
  } catch (err) {
    console.error(err.response ? err.response.data : err.message);
    res.status(500).send('Error creating record in HubSpot.');
  }
});

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
