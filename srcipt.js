var x= new Promise((resolve,reject)=>{
    reject('jack for the project')
});

x.then((x)=>{
    console.log('resolve'+x)
})
.catch((y)=>{
    console.log('error'+y)
});