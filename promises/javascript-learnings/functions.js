
//HOISTING FUNCTION AND FUNCTION VARIABLE;
let a=7;
console.log(simpleMethod(5,5));

// console.log(myfunc.simpleMethodVariable(5,5));//will fail as hoisting is not done;
function simpleMethod(a1,b){
    return (a*b);
}

let myfunc = {
    simpleMethodVariable: function(a1,b){
        return (a+b);
    }

}

console.log(myfunc.simpleMethodVariable(5,5));//will pass as hoisting is  done;
console.log(this);
let arrowFunctionSample=(a1,b)=>{
    console.log(this);
    return a/b;
}
console.log(arrowFunctionSample(2,3));


let myfuncsamplevariable= function(c,d){
    return c*c*d*d;
}
console.log(myfuncsamplevariable(4,2));