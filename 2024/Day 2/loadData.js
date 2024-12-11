export default async function loadData() {
  try {
    const response = await fetch("./input.txt");
    const inputData = await response.text();
    const splittedInputData = inputData.split('\n');

    let amountOfSafeReports = 0;

    splittedInputData.map((item) => {
      const splittedItemToNumber = item.split(" ").map(Number);

      const isSafe = splittedItemToNumber.every((number, index) => {
        const exmpl = splittedItemToNumber[index + 1] - number;
    
        if (exmpl <= 0 || exmpl > 3 || typeof exmpl !== 'number') {
          return false; 
        }
        
        return true;
      })
      if (isSafe) {
        amountOfSafeReports++;
      }
    })

    console.log(amountOfSafeReports);

  } catch (error) {
    console.error('Error loading the text file:', error);
  }
}

loadData();