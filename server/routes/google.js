var express = require("express");
var router = express.Router();
var { google } = require('googleapis');
const dotenv = require('dotenv').config();

router.get("/", async function(req, res, next) {
    const auth = new google.auth.GoogleAuth({
        keyFilename: '../server/google_credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });

    try {
        const client = await auth.getClient();
        const sheets = await google.sheets({ version: 'v4', auth: client });        
        const rows = await sheets.spreadsheets.values.get({
            auth,
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Sheet1!A:F"
        });
        res.send(rows.data.values);
    } catch(e) {
        console.info("[Google Sheet Service]", e.message);
        res.send("{}");
    }
    
});

module.exports = router;