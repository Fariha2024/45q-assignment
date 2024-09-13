/* q18: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let places: string[] = [`karachi`, `sawat`, `gilgit`, `naran`, `kaghan`];
console.log(places);

//array in alphabetical order

let copyOfArray = places.slice();
let sortedArray = copyOfArray.sort();
console.log(sortedArray);


// places.sort();
// console.log(places);

 //console.log(places);

 // reverse origional array to print
 let copyOfArray2 = places.slice();
 let reversArray = copyOfArray2.reverse();
 console.log(reversArray);


 // print original array
 console.log(places);



 let reversArray2 = places.reverse();
 console.log(reversArray2);

 let againReverseArray = reversArray2.reverse();
 console.log(againReverseArray); // same origional array


 // sorting origional array
 let sortedArray2 = places.reverse();
 console.log(sortedArray2);

 let reverseSortedArray2 = places.reverse();
 console.log(reverseSortedArray2);