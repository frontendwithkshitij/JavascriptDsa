


// const numAray = [0,1,2,3,0,32,0,21]

// function pushAllzero(aray){
//     let position = 0;

//     for(let i=0;i<aray.length;i++){
//          if(aray[i]!==0){
//              aray[position] = aray[i]
//              position++
            
//              if(position <i){
//                aray[i]=0
//              }
//          }
      
//     }
//     // while(position<aray.length){
//     //     aray[position] = 0
//     //     position++
//     // }
// return aray
// }

// console.log(pushAllzero(numAray))

// function x(){
//     console.log(this)
// }

// window.x();


function test(...args) {
    console.log(args)
}


test('kshitij','frontend',65)