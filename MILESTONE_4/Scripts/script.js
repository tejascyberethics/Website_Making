
const a = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        var i = 0
        for (i=0;i<1000;i++){

        }
        if (i == 1000){
            resolve(`I ACCEPT ${i}`);
        } else{
            reject(`I REJECT ${i}`);
        }
    }, 1500)
}).then((resolve) => {
    console.log(resolve)
}).catch((reject) => {
    console.log(reject)
})
setTimeout(()=>{
    console.log('asdf')
},3000)

