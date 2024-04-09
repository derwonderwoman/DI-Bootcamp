// // #exercise 1

// function compareToTen(num) {
//     return new Promise((res,rej) => {
//             if(num <= 10){
//                 res(num);
//             }
//             else{
//                 rej("error");
//             }
//     })
// }

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// // exercise 2

//     let result = new Promise((res,rej) => {
//         setTimeout(() => {
//             res("success");
//         }, 4000);
//     });

//     result.then((result) => {
//         console.log(result)
//     });

// // exercise 3

// const result1 = Promise.resolve(3);
// const result2 = Promise.reject("Boo!");

// result1.then((val) => {
//     console.log("Resolved:", val);
// }).catch((error) => {
//     console.error("Error:", error);
// });


// result2.then((val) => {
//     console.log("Resolved:", val);
// }).catch((error) => {
//     console.error("Error:", error);
// });