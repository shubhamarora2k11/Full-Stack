function doubleTheValue(x){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(x*2);
        },1000);
        
    });
}

function evaluateExperession(x){
    return new Promise((resolve,reject)=>{
        doubleTheValue(10).then(a=>{
            doubleTheValue(20).then(b=>{
                doubleTheValue(30).then(c=>{
                    resolve(x + a + b + c);
                })
            })
        })
    })
}

// async function evaluateExperession(x){
//     const a = await doubleTheValue(10);
//     const b = await doubleTheValue(20);
//     const c = await doubleTheValue(30);

//     return x + a + b + c;
// }

doubleTheValue(200).then(response =>{
    console.log(response);
    
})

evaluateExperession(200).then(response =>{
    console.log(response);
    
})