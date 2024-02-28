import { sheets } from '@googleapis/sheets';

const serviceAccountAuth = new sheets.auth.GoogleAuth({
  email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});


// const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEET_ID, serviceAccountAuth);

export default async function getRecipeData() {
  // const authClient = await serviceAccountAuth.getClient();

  // const client = await sheets.sheets({
  //     version: 'v1',
  //     auth: authClient
  // });

  // const retrieveResponse = await client.spreadsheets

  // console.log(retrieveResponse);
  
  return [];
}
