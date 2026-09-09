# Integrating With HubSpot I: Foundations Practicum

A Node.js / Express app that reads and writes **Podcast Episode** records
to a custom object in HubSpot using the CRM API.

## Custom object list view

https://app.hubspot.com/contacts/52003381/objects/2-68992644/views/all/list

## Stack

- Node.js
- Express
- Axios
- Pug

## Setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill in:
   - `HUBSPOT_ACCESS_TOKEN` — your private app's access token
   - `HUBSPOT_CUSTOM_OBJECT_TYPE` — the custom object's type ID (e.g. `2-12345678`)
3. `node index.js`
4. Visit `http://localhost:3000`

## Routes

- `GET /` — fetches all Podcast Episode records from HubSpot and displays them in a table
- `GET /update-cobj` — shows a form for adding a new Podcast Episode record
- `POST /update-cobj` — creates the new record in HubSpot, then redirects to the homepage
