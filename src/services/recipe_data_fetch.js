// import { GoogleSpreadsheet } from "google-spreadsheet";
// import { JWT } from 'google-auth-library';

// const serviceAccountAuth = new JWT({
//   email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
//   key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
//   scopes: ['https://www.googleapis.com/auth/spreadsheets']
// });
// const doc = new GoogleSpreadsheet(
//   process.env.REACT_APP_GOOGLE_SHEET_ID,
//   serviceAccountAuth
// );

export const getRecipeData = async () => {
  try {
    // console.log(doc);
    const result = [];
    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}
