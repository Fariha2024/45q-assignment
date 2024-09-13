/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let array = [`admin`, `eric`, `john`, `herry`, `sara`];
for (let username of array) {
    if (username === `admin`) {
        console.log(`Hello ${username},would you like to see status report?`);
    }
    else {
        console.log(`Hello ${username},thank you for logging in again.`);
    }
}
array = [];
if (array.length === 0) {
    console.log(`we need to find some users!`);
}
export {};
