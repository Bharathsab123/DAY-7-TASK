
//1,Get all the countries from Asia continent /region using Filter function

let xhp = new XMLHttpRequest();
xhp.open("get","https://restcountries.com/v3.1/all");
xhp.send();
xhp.onload = function(){
    let data = JSON.parse(xhp.response)
   let ary= data.filter((value)=>{
      if( value.region==="Asia"){return value}
       
    })  
    console.log(ary) 
};
//-------------------------------------------------------------------------------------------------------------------------------------

//2,Get all the countries with a population of less than 2 lakhs using Filter function

let xhp1 = new XMLHttpRequest();
xhp1.open("get","https://restcountries.com/v3.1/all");
xhp1.send();
xhp1.onload = function(){
    let data = JSON.parse(xhp1.response)
   let ary= data.filter((value)=>{
      if( value.population<200000){return value}
       
    })  
    console.log(ary) 
};
//-------------------------------------------------------------------------------------------------------------------------------------------

//3,Print the following details name, capital, flag using forEach function

let xhp2 = new XMLHttpRequest();
xhp2.open("get","https://restcountries.com/v3.1/all");
xhp2.send();
xhp2.onload = function(){
    let data = JSON.parse(xhp2.response)
   let ary= data.forEach(element => {
    console.log(`
    name: ${element.name.common}
    capital : ${element.capital} 
    flag : ${element.flag}`)
})};

//------------------------------------------------------------------------------------------------------------------------------------------

//4,Print the total population of countries using reduce function

let xhp3 = new XMLHttpRequest();
xhp3.open("get","https://restcountries.com/v3.1/all");
xhp3.send();
xhp3.onload = function(){
    let data = JSON.parse(xhp3.response)
   let ary= data.reduce((acc,value)=>{
      return acc += value.population
       
    },0)  
    console.log('total population : ' + ary) 
};

//------------------------------------------------------------------------------------------------------------------------------------------

//5,Print the country which uses US Dollars as currency.

let xhp4 = new XMLHttpRequest();
xhp4.open("get","https://restcountries.com/v3.1/all");
xhp4.send();
xhp4.onload = function(){
    let data = JSON.parse(xhp4.response)
    const datas = data.filter((item) => item?.currencies?.USD?.name === "United States dollar")
  console.log( datas);
};
    
  //-----------------------------------------------------------------------------------------------------------------------------------------------  
    

