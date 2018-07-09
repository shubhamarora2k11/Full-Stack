function double(X){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(X*2);
        },1000);
        
    });
}

// x + 2x + 3x+
// function expression(X){
//     return new Promise((resolve,reject)=>{
//         double(10).then(a=>{
//             double(20).then(b=>{
//                 double(30).then(c=>{
//                     resolve(X + a + b + c);
//                 })
//             })
//         })
//     })
// }

async function expression(X){
    const a = await double(10);
    const b = await double(20);
    const c = await double(30);

    return X + a + b + c;
}






// double(200).then(response=>{
//     console.log(response);
    
// })

expression(200).then(response =>{
    console.log(response);
    
})



















// // async function fun() {
// //     let promise = new Promise((resolve,reject)=>{
// //         setTimeout(()=> resolve("successful!!!"), 2000)
// //     });
// //     let result = await promise;
// //     console.log(result);
// // }

// // fun();

// async function asyncAwait(){
// 	console.log("Hi, How are you??");

// 	await delay(2000);
// 	console.log("Im Fine>>");
// }

// asyncAwait();

