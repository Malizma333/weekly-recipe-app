import { sheetURL } from '../constants';

export const writeRecipeDataToCSV = async (recipeData) => {
  console.log(recipeData);
  // try {
  //   const response = await fetch(sheetURL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'text/csv',
  //     },
  //     body: csvData,
  //   });
  //   if (response.ok) {
  //     console.log('Recipe data has been written to the CSV file successfully.');
  //   } else {
  //     throw new Error('Failed to write recipe data to the CSV file.');
  //   }
  // } catch (error) {
  //   console.error('Error occurred while writing recipe data to the CSV file:', error);
  // }
};

const convertToCSV = (data) => {
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map((item) => Object.values(item).join(','));
  return `${headers}\n${rows.join('\n')}`;
};
