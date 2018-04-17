
// single promises with example:
var mycaluculation = function(a,b) {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a>5 && b>5){
                let k= a+b;
                resolve(k);
            }else{
                let k=a/b;
                reject(k +" the calcuation method values are lesser than expected");
            }
        }, 3000);
    })
};

let a=3;
let b=6;
mycaluculation(a,b).then((res)=>{
    console.log(res);
   return mycaluculation(a+1,b+1); //2nd prmoise calls.
}).then((res)=>{
    console.log(res + " Second promise results");
}).catch((res)=>{
    console.log(res+" i am a error");
});