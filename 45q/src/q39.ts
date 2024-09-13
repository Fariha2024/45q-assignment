/*City Names: Write a function called city_country() that takes in the
 name of a city and its country. The function should return a string 
 formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the
 value that’s returned.*/

 /*function city_country(city:string, country:string){
   return `${city}, ${country}`
 }
console.log(city_country(`Lahore`, `Pakistn`)),
console.log(city_country(`Muscat`,`Oman`));
console.log(city_country(`Tokyo`, `Japan`));
console.log(city_country(`Mumbai`, `India`));*/

function city_country(city:string, country:string){
    console.log(`${city}, ${country}`);
};

city_country(`Lahore`, `Pakistn`)
city_country(`Muscat`,`Oman`)
city_country (`Tokyo`, `Japan`)
city_country (`Mumbai`, `India`)