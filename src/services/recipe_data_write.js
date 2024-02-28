const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

export default async function writeRecipeDataToCSV(req, res) {
  const {query: { id }} = req;

  // try {
  //   if (!id) throw new Error();

  //   await doc.useServiceAccountAuth({
  //     client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  //     private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n')
  //   });

  //   res.status(200).json({ message: 'Success!', total: total, data: results });
  // } catch (error) {
  //   res.status(500).json(error);
  // }
}


// export const writeRecipeDataToCSV = async (recipeData) => {
//   await fetch(sheetApiUrl, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(recipeData)
//   })
//   .then((r) => r.json())
//   .then((data) => {
//     console.log("Successful Post");
//   })
//   .catch((error) => {
//     console.error("An error occurred: ", error);
//   });
// };
