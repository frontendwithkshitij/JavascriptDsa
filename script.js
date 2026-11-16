
// // // // /*Problem
// // // // You are given an array of fruits that may contain some duplicate values.
// // // // Write a JavaScript function that finds all the fruits which appear more than once in the array and returns them in a new array, with no repetitions in the result.*/




// // // const fruits = [
// // //     "apple",
// // //     "banana",
// // //     "mango",
// // //     "orange",           
// // //     "apple",
// // //     "grape",
// // //     "banana",
// // //     "pineapple",
// // //     "mango",
// // //     "apple",
// // //     "grape",
// // //     "pineapple",
// // //     "orange",
// // // ];

// // // // function removeDuplicates(item){
// // // //     let results = [];
// // // //     for(let i = 0;i<item.length;i++){
// // // //         if(item.indexOf(item[i])===i){
// // // //             results.push(item[i])
// // // //         }
// // // //     }
// // // //     return results
// // // // }


// // // // apple = 0;
// // // // i = 0 false

// // // // apple = 0 
// // // // i = 4 true

// // // function removeDuplicatesInPlace(item){
// // //     for(let i=0;i<item.length;i++){
// // //         if(item.indexOf(item[i])<i){
// // //             item.splice(i,1)
// // //             i--
// // //         }
// // //     }
// // //     return item
// // // }

// // // console.log(removeDuplicatesInPlace(fruits))


// // const users = [
// //   { id: 1, name: "Alice" },
// //   { id: 2, name: "Bob"   },
// //   { id: 1, name: "Alice" }, // duplicate
// //   { id: 3, name: "Carol" },
// //   { id: 4, name: "David" },
// //     { id: 4, name: "David" },  { id: 4, name: "David" },  { id: 4, name: "David" },
// //   { id: 5, name: "Emma" },
// //   { id: 6, name: "Farhan" },
// //   { id: 7, name: "Grace" },
// //   { id: 7, name: "Grace" },
// // ];


// // // function removeDuplicateObjectsInPlace(item){
// // //   for(let i=0;i<item.length;i++){
// // //     for(let j=i+1;j<item.length;j++){
// // //       if(item[i].name === item[j].name){
// // //         item.splice(j,1)
// // //         j--
// // //       }
// // //     }
// // //   }
// // //   return item
// // // }

// // // console.log(removeDuplicateObjectsInPlace(users))

// // // function removeDuplicateObjectsWithWhile(item) {
// // //   let i = 0;

// // //   while (i < item.length) {
// // //     let j = i + 1;

// // //     while (j < item.length) {
// // //       if (item[i].name === item[j].name) {
// // //         item.splice(j, 1);
// // //       } else {
// // //         j++;
// // //       }
// // //     }

// // //     i++;
// // //   }

// // //   return item;
// // // }



// // function whileRemovingDuplicates(item){
// //  let i=0;
// //  while(i<item.length){
// //   let j = i + 1
// //   while(j<item.length){
// //    if(item[i].name === item[j].name){
// //     item.splice(j,1)
// //    }else{
// //     j++
// //    }
    
// //   }
// //   i++
// //  }
// //  return item
// // }


// // function removeDupliSet(item){
// //   const set = new Set();
// //   let i=0;
// //   while(i<item.length){
// //     if(set.has(item[i].name)){
// //       item.splice(i,1)
// //     }else{
// //       set.add(item[i].name)
// //       i++
// //     }
    
// //   }
// //   return item
// // }

// // const val = [1,2,3,1,3,4,5,9,0,6,7,6,1,2,3,4]

// // console.log([...new Set(val)])

// // console.log(removeDupliSet(users))
// // // const removeDupInPlace = (arr, key) => {
// // //   const seen = new Set();
// // //   let i = 0;
// // //   while (i < arr.length) {
// // //     if (seen.has(arr[i][key])) {
// // //       arr.splice(i, 1);
// // //     } else {
// // //       seen.add(arr[i][key]);
// // //       i++;
// // //     }
// // //   }
// // // };

// // // removeDupInPlace(users, "id");


// const person = {
//   name: "Kshitij",
//   age: 27,
//   address: {
//     city: "Delhi",
//     streetName:'sebstian street'
//   }
// };

// // const copy1 = {...person}
// // copy1.age = 49
// // copy1.address.city = "Mumbai";
// // copy1.address.streetName = "hodwards street";
// // copy1.name = 'sempka'

// // console.log(person)

// // console.log(copy1.address.streetName);  // Mumbai
// // console.log(person.address.streetName); // Mumbai

// // const newCopy = Object.assign({},person);

// // console.log(newCopy)



// const newPerson  = structuredClone(person)


// console.log(newPerson)

// newPerson.name = 'suresh'
// newPerson.address.city = 'vadodra'

// console.log(person)


// let output = document.getElementById('output')
// let btn = document.getElementById('btn')


// btn.addEventListener('click',(e)=>{
//   console.log('target:', e.target)
//   console.log('currentTarget:', e.currentTarget)
// })


let innerdiv = document.getElementById('innerdiv');
let middiv = document.getElementById('midiv');
let topdiv = document.getElementById('topdiv');

innerdiv.addEventListener('click', (e) => {
  console.log('Inner div clicked');
  // console.log('target:', e.target);
  // console.log('currentTarget:', e.currentTarget);
});

middiv.addEventListener('click', (e) => {
  console.log('Middle div clicked');
  // console.log('target:', e.target);
  // console.log('currentTarget:', e.currentTarget);
});

topdiv.addEventListener('click', (e) => {
  console.log('Top div clicked');
  console.log('target:', e.target);
  console.log('currentTarget:', e.currentTarget);
});
