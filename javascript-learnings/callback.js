
var cbVar= function(i,callback){
    if(i>5){
        console.log('initializing the callback');
        setTimeout(() => {
            callback(i,i+5);  
        }, i*100);
        
    }
}

function doMultiply(a,b){
    console.log(a*b);
}
cbVar(100,doMultiply);
