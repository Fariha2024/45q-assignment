/* q16:  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let guestList = [`Ali`, `Usman`, `Zara`, `zuhaib`, `Beenish`];
console.log(guestList);
// adding 3 more guests one by one
// adding Ist guest at the begining
guestList.unshift("Yaqoob");
console.log(guestList);
// adding in middle
guestList.splice(3, 0, "Ayesha");
console.log(guestList);
//adding in the end
guestList.push("Hamza");
console.log(guestList);
//printing new guest list inviting all to the dinner
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}! You are cordially invited at dinner on my birthday party tomorrow, sharp at 9pm.`);
}
export {};
