import { tableHeaders } from "../constants";

export default async function writeRecipeDataToCSV(data) {
  const row = [];

  row.push(data[tableHeaders.name])
  row.push(data[tableHeaders.desc])
  row.push(data[tableHeaders.allergens])
  row.push(data[tableHeaders.link])
  row.push(data[tableHeaders.time])

  try {
    const url = process.env.NODE_ENV === 'production'
      ? 'https://recipe-app-service-wpwz.onrender.com/google_sheet'
      : 'http://localhost:9000/google_sheet'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(row),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const result = await response.json();
    console.info("[Google Sheet Client]", result.message);
  } catch(e) {
    console.info("[Google Sheet Client]", e.message);
  }
}
