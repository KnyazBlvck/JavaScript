// 1 = masala

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// 2= masala
// const twoSum = (arr, targetNum) => {
//   let arrIndex = [arr[0]];
//   outhor: for (let i = 0; i < arr.length; i++) {
//     inner: for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == targetNum) {
//         arrIndex.push(arr[i]);
//       }
//     }
//   }

//   return arrIndex;
// };

// const result = twoSum([2, 7, 11, 15], 9);

// console.log(result);

// 3 = masala

const countLetter = (str) => {
  let arr = str.split("");
  let countObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in countObj)) {
      countObj[arr[i]] = 1;
    } else {
      countObj[arr[i]] += 1;
    }
  }

  return countObj;
};

const result = countLetter("Hello");
console.log(result);
