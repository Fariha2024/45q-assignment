/*q17:  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
let guestList = [`Ali`, `Usman`, `Zara`, `zuhaib`, `Beenish`, `shahnila`, `sajid`];
//console.log(`I may regret to announce that my manager mismanaged the dinner party resulting only two tables are available at vanue and I am compelled to invite only two Persons.\n`);
//removing guests from the list one by one
let guest1 = guestList.pop();
//console.log(`sorry Mr./Ms. ${guest1}, You are not invited.`);
let guest2 = guestList.pop();
console.log(`sorry Mr./Ms. ${guest2}, You are not invited.`);
let guest3 = guestList.pop();
console.log(`sorry Mr./Ms. ${guest3}, You are not invited.`);
let guest4 = guestList.pop();
console.log(`sorry Mr./Ms. ${guest4}, You are not invited.`);
let guest5 = guestList.pop();
console.log(`sorry Mr./Ms. ${guest5}, You are not invited.\n`);
// gusts still on list, print a message to them
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, You are still invited!`);
}
// removing remaining guests from the list, show empty array
guestList.pop();
guestList.pop();
console.log(guestList);
export {};
