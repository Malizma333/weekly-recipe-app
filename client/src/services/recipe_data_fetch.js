// import { google } from 'googleapis';

// const auth = new google.auth.GoogleAuth({
//   email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
//   key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
//   scopes: [
//     'https://www.googleapis.com/auth/spreadsheets',
//   ],
// });

// const doc = new google.sheets.GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEET_ID, serviceAccountAuth);

export default async function getRecipeData() {
  // const client = await auth.getClient();

  // const sheets = await google.sheets({ version: 'v4', auth: client });

  // const response = await sheets.spreadsheets.get({
  //   auth,
  //   spreadsheetId: process.env.REACT_APP_GOOGLE_SHEET_ID
  // })

  // console.log(response);
  
  return [];
}
