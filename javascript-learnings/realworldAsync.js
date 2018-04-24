let axios = require('axios');

let getexchangerate=(source,dest)=>{
   return axios.get(`https://api.fixer.io/latest?base=${source}`).then((resp)=>{
    //    console.log(resp.data.rates);
       return  resp.data.rates[dest];
    })
}

// getexchangerate('USD','INR').then((resp)=>{
//     console.log(resp);
// });

let getCountriesSupportingCurrencies =(countryCode)=>{

   return  axios.get(`https://restcountries.eu/rest/v2/currency/${countryCode}`).then((res)=>{
       return res.data.map((item)=>{
           return item.name;
       });
    });
}
// getCountriesSupportingCurrencies('INR').then((res)=>{
//     console.log(res);
// });

const combineboth = async (source,dest,amount)=>{

    let exchnagerate= await getexchangerate(source,dest);
    let supportingCurrencies= await getCountriesSupportingCurrencies(dest);
    // console.log('the amount is equivalent to :'+ (exchnagerate*amount));
    return (` The conversion rate of ${source} to ${dest} is ${exchnagerate}. The conversion equivalen for the amount ${amount} is : `+ exchnagerate*amount +` The countries supporting the currency (${dest}) is: `+supportingCurrencies.join(','));


}

combineboth('USD','INR',2000).then((res)=>{
    console.log('the amount is equivalent to :'+res);
})