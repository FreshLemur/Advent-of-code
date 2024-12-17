export default async function loadData() {
  try {
    const response = await fetch("./input.txt");
    const inputData = await response.text();
    const splittedInputData = inputData.split('\n');
    let amountOfSafeReports = 0;

    splittedInputData.map((item) => {
      const example = item.split(" ").map(Number);
      
      const isSafe = example.every((number, index) => {
        const report = example[index + 1] - number;
        
        if (report <= 0 || report > 3 || typeof report !== 'number') {
          
          example.reverse();
    
          const isSafeReverse = example.every((number, index) => {
            const report = example[index + 1] - number;
    
            if (report <= 0 || report > 3 || typeof report !== 'number') {
              return;
            } 

            return true;
          })
    
          if (isSafeReverse) {
            return true;
          }
    
          return false; 
        }
    
        return true;
      })
    
      if (isSafe) {
        amountOfSafeReports++;
      }
    })

    // Right output is 246
    console.log(amountOfSafeReports);
  } catch (error) {
    console.error('Error loading the text file:', error);
  }
}

loadData();