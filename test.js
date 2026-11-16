//  const fruits = [
//    "apple",
//    "banana",
//    "mango",
//    "orange",           
//    "apple",
//     "grape",
//    "banana",
//    "pineapple",
//    "mango",
//    "apple",
//    "grape",
//     "pineapple",
//     "orange",
//  ];


// //  function removeDuplicates(arr){
// //    let results  = [];
// //    for(let i=0;i<arr.length;i++){
// //     if(arr.indexOf(arr[i]) === i){
// //       results.push(arr[i])
// //     }
// //    }
// //    return results
// //  }

// // console.log( removeDuplicates(fruits))

// function removeDuplicatesInPlace(arr){
//   for(let i = 0;i<arr.length;i++){
//     if(arr.indexOf(arr[i])<i){
//       arr.splice(i,1)
//       i--
//     }
//   }
//   return arr
// }


 
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob"   },
//   { id: 1, name: "Alice" }, // duplicate
//   { id: 3, name: "Carol" },
//   { id: 4, name: "David" },
//   { id: 4, name: "David" },
//   { id: 4, name: "David" },
//   { id: 4, name: "David" },
//   { id: 5, name: "Emma" },
//   { id: 6, name: "Farhan" },
//   { id: 7, name: "Grace" },
//   { id: 7, name: "Grace" },
// ];


// function removeDuplicatesFromObject(arr){
//    for(let i=0;i<arr.length;i++){
//     for(let z=i+1;z<arr.length;z++){
//       if(arr[i].name === arr[z].name){
//         arr.splice(z,1)
//         z--
//       }
//     }
//    }
//    return arr
// }


// function removeDuplicatesFromSet(arr){
//   const seen = new Set();
//   for(let i=0;i<arr.length;i++){
//           if(seen.has(arr[i].name)){
//             arr.splice(i,1)
//             i--
//           }else{
//             seen.add(arr[i].name)
//           }
//   }
//   return arr
// }


// let arayNew = [1,4,[9,8,[23,45]],30];

// function flatArray(arr){
//   let results  = [];
//   for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//       results = results.concat(flatArray(arr[i]))
//     }else{
//       results.push(arr[i])
//     }
//   }
//   return results
// }

// // console.log(flatArray(arayNew))



// let numbersNew = [0,3,0,4,0,56,2,40,0,9,11];

// function pushAllZero(arr){
//   let pos = 0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] !==0){
//       arr[pos] = arr[i]
//       pos++
//     }
//    if(i>=pos){
//    arr[i] = 0
//   }
//   }
 
  
//   return arr
// }


// console.log(
// pushAllZero(numbersNew))
let inputNum = document.getElementById('inputVal');

inputNum.addEventListener('input', tableFormat);

let output = document.getElementById('output');


function tableFormat(){
   output.innerHTML = '';
   if (inputNum.value.trim() === '') return;

   let n = Number(inputNum.value);
   if (!Number.isFinite(n)) return;

   for(let i=1;i<=10;i++){
    output.innerHTML += `${n} X ${i} = ${n*i}<br/>`;
   }
}
