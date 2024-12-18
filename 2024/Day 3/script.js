import loadData from "./loadData.js";

let data = []

async function getData() {
  data = await loadData("./input.txt");
  let result = 0;

  const regex = /mul\(\d+,\s*\d+\)/g;
  const regex2 = /\d+/g;

  data.map((item) => {
    const matches = item.match(regex);
    
    matches.map((match) => {
      const numbers = match.match(regex2);
      console.log(numbers);
      
      
      let multiplication;
      
      if (numbers.length === 2) {
        multiplication = numbers[0] * numbers[1];
      } else {

        console.log(`else ${numbers}`);
        
        return;
      }

      result += multiplication
    })
    // Right output is 165225049
    console.log(result);
  });
}

getData();


