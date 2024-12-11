import loadData from "./loadData.js";

let inputData1 = [];
let inputData2 = [];

async function main() {
  inputData1 = await loadData('./inputData/input1.txt');
  inputData2 = await loadData('./inputData/input2.txt');

  const combinedArray = inputData1.map((value, index) => `${value} ${inputData2[index]}`);

  let arrayWithDistances = [];

  combinedArray.map((item) => {
    let [num1, num2] = item.split(" ").map(Number);
    let result = num2 - num1;
    if (result >= 0) {
      arrayWithDistances.push(result);
    } else {
      let newResult = num1 - num2;
      arrayWithDistances.push(newResult);
    }
  })

  let totalDistance = arrayWithDistances.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // Right output is 2378066
  console.log(totalDistance);
}

main(); 

