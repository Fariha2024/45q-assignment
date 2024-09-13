/*Cities: Write a function called describe_city() that accepts the name
 of a city and its country. The function should print a simple sentence,
  such as Karachi is in Pakistan. Give the parameter for the country a
  default value. Call your function for three different cities, at least
   one of which is not in the default country.*/
/*function describe_city(city: string, country: string){
   return `${city} is in ${country}`
}
describe_city("sawat", "pakistan")
let accepts = describe_city("sawat", "pakistan");
console.log(accepts);*/
function describe_city(city1, country = "pakistan") {
    return `${city1} is in ${country}`;
}
;
let city1 = describe_city(`sawat`);
let city2 = describe_city(`karachi`);
let city3 = describe_city(`lahore`);
let city4 = describe_city(`dubai`, `UAE`);
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
export {};
