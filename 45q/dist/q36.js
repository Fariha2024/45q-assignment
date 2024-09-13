/*T-Shirt: Write a function called make_shirt() that accepts a size and
 the text of a message that should be printed on the shirt. The function
  should print a sentence summarizing the size of the shirt and the
   message printed on it. Call the function.*/
function make_shirt(size, lable) {
    //return size + lable
    return `My shirt size is ${size} and lable is ${lable}`;
}
make_shirt(12, "never give up");
//To print a function on console
let summarize = make_shirt(12, "never give up!");
console.log(summarize);
export {};
