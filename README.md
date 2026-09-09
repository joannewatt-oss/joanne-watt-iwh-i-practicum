# Integrating With HubSpot I: Foundations Practicum

This repository is for the Integrating With HubSpot I: Foundations course. This practicum is one of two requirements for receiving your Integrating With HubSpot I: Foundations certification. You must also take the exam and receive a passing grade (at least 75%).

A Node.js / Express app that reads and writes Podcast Episode records to a custom object in HubSpot using the CRM API.

Put your HubSpot developer test account custom objects URL link here: TODO - paste your custom object list view link, looks like https://app.hubspot.com/contacts/test-account-id/objects/custom-object-id/views/all/list

Stack: Node.js, Express, Axios, Pug

Setup:
1. npm install
2. Copy .env.example to .env and fill in HUBSPOT_ACCESS_TOKEN and HUBSPOT_CUSTOM_OBJECT_TYPE
3. node index.js
4. Visit http://localhost:3000

Routes:
- GET / fetches all Podcast Episode records from HubSpot and displays them in a table
- GET /update-cobj shows a form for adding a new Podcast Episode record
- POST /update-cobj creates the new record in HubSpot, then redirects to the homepage

Tips:
- Commit to your repository often. Even if you make small tweaks to your code, it is best to be committing to your repository frequently.
- The subject of the custom object is up to you. Feel free to get creative!
- Please create a test account, but do not include your private app access token in your repo.
- Ensure you re-merge any working branches into the main branch.

Requirements:
- All work must be your own. During the grading process we will check the revision history. Submissions that do not meet this requirement will not be considered.
- You must have at least three new routes in your index.js file and two new pug templates, one for the homepage and one for the form.
- You must create a developer test account and link to it in your README.md file. Submissions that do not meet this requirement will not be considered.

