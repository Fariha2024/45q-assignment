// q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList: string[] = [`Ali`, `Usman`, `Zara`, `zuhaib`, `Beenish`];

    console.log(`I am inviting ${guestList.length} friends at dinner, the list is shown below:\n`);

    for( let i = 0;  i< guestList.length; i++){
        console.log(`${i + 1}. ${guestList[i]}`)
    }