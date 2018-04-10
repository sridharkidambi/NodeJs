
//HOISTING FUNCTION AND FUNCTION VARIABLE;
console.log(simpleMethod(5,5));
// console.log(myfunc.simpleMethodVariable(5,5));//will fail as hoisting is not done;
function simpleMethod(a,b){
    return (a*b);
}

let myfunc = {
    simpleMethodVariable: function(a,b){
        return (a+b);
    }

}

console.log(myfunc.simpleMethodVariable(5,5));//will pass as hoisting is  done;

let arrowFunctionSample=(a,b)=>{
    return a/b;
}
console.log(arrowFunctionSample(2,3));