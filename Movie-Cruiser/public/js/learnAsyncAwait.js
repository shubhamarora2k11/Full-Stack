// async function fun() {
//     let promise = new  Promise((resolve,reject) => {
//         setTimeout(() => resolve("success"), 2000);
//     });
//     let result = await promise;
//     console.log(result);
    
// }

// let x = fun();
// console.log(x);


function double(x){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            resolve(x*2);
        }, 2000)
    })
}

var c= double(2).then(response =>{
    console.log(response);
});

console.log(c);