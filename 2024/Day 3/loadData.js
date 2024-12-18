export default async function loadData(path) {
  try {
    const response = await fetch(path);
    const inputData = await response.text();
    return (inputData.split('\n').sort()); 
  } catch (error) {
    console.error('Error loading the text file:', error);
  }
}

loadData();