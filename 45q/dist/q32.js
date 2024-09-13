/*Checking Usernames: Do the following to create a program that simulates
 how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or
 two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already
 been used. If it has, print a message that the person will need to enter
  a new username. If a username has not been used, print a message saying
   that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used,
 'JOHN' should not be accepted.*/
let current_users = [`Ali`, `Riaz`, `Hasan`, `Sara`, `Fatima`];
let new_users = [`fariha`, `ali`, `qazi`, `fatima`, `kareem`];
let current_users_lowercase = current_users.map(element => element.toLowerCase());
console.log(current_users_lowercase);
for (let element of new_users) {
    if (current_users.includes(`new_users`)) {
        console.log(`element ${current_users} is already taken, 
please choose a different one.`);
    }
    else {
        console.log(`the elements ${new_users} are available!`);
    }
}
export {};
