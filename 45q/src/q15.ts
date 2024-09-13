/* q15:  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/



let guestList: string[] = [`Ali`, `Usman`, `Zara`, `zuhaib`, `Beenish`];
console.log( `On my birthday Mr.${guestList[1]} is unable to make it because of his sister's wedding.`)

guestList [1] = `Yaqoob`;

console.log( `New guest List, those who are committed to attend the dinner on my birthday.\n`);
for( let i = 0;  i< guestList.length; i++){
    console.log(`${i + 1}, ${guestList[i]}`)
}