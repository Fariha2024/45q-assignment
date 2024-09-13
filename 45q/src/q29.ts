/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/


//five if statements

let favorite_fruits: string[] = [`melon`,`grape`,`pear`];
if(favorite_fruits.includes(`pear`)){
    console.log(`I really like pear!`);   
}if(favorite_fruits.includes(`melon`)){
    console.log(`I really like melon!`);
}if(favorite_fruits.includes(`orange`)){
    console.log(`out of stock`);
}if(favorite_fruits.includes(`grape`)){
    console.log(`I really like grepe!`)
}if(favorite_fruits.includes(`watermelon`)){
    console.log(`not available`);
};