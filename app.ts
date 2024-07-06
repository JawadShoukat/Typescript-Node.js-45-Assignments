// //QUESTION 1:  i installed Node.js, Typescript & VScode:

// :Install [Node.js](https: nodejs.org/en/), [TypeScript](https: www.typescriptlang.org/download)
//   and [VS Code](https: code.visualstudio.com/) on your computer.

// QUESTION 2:Personal Message: Store a person’s name in a variable, and print a message to that person.
 Your message should be simple, such as, “Hello Eric,
would you like to learn some Python today?”

let JawadAli: string= "ERIC";
console.log(`hellow ${JawadAli}, Would you like to learn some Python today?`);


// QUESTION 3: Name Cases: Store a person’s name in a variable, and then print that person’s name
//  in lowercase, uppercase, and titlecase.


//lower Case
let personName: string = "Jawad Ali";                               
console.log("lowercase:", personName.toLowerCase());                 
                                                                
 //upper Case
 console.log("uppercase:", personName.toUpperCase());

 //Title Case
 console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
 

//   QUESTION 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”


let qoute: string= "A person who never made a mistake  never tride anything new";
let author: string= "Albert Einstein";
console.log(`${author} once said, "${qoute}`); 

// QUESTION 5: Famous Quote 2:Repeat Exercise 4, but this time store the famous person's name in a 
// variable called famous person.then compose your massage and store it in a new variable called massage.
// print your massage.


let qoute: string ="A person who never made a mistake  never tride anything new";
let famous_person="Albert Einstein";
let massage=`${famous_person} once said, ${qoute}`;
console.log(massage); 

// QUESTION 6: Stripping Name:Store a person's name, and include some whitespace charaters at the beginning
// and end of the name. make sure you use each charaters combination, "\t" and "\n", al lest once.  print the name once,
// so the whitespace aruond the name is displayed. then print the name after striping the white space.  
// 
 
let personName:string ="\n\t JAWAD ALI\t\n";
console.log(personName);
let stripped: string =personName.trim();
console.log(stripped);



// QUESTION 7: Number Eight: Write addition,subtration,multiplication, and division operations that each result
// in the number 8. be sure to enclose your operations in print statement to see the results.

// QUESTION 8: you should create four lines that look like this:

console.log(5+3);
console.log(15-7);
console.log(2*4);
console.log(32/4);   

// QUESTION 9: Favourite Number: Store your favorite number in a variable. then, using that variable, 
// creat a massage that reveals your favourite number. print that massage 

let favouriteNumber: number =5;
console.log(`My favourite number is ${favouriteNumber}`);
 

// QUESTION 10: Adding Comments: choose two of the programs you've written, and add at least one
// comment to  Each.if you don't have anything special to write because your programs are too simple
// at this PointerEvent, just add your name and current date at the top of each program file. then
// write one sentence describing what the program does.    

 My fName is JAWAD SHOUKAT
date: 8/03/2024
This program will motivated the students

console.log("if you blieve youself you can do everything and anything");


// QUESTION 11: Names: Store the names of a few of your fiiends in a array called names.
// print each person's name by accessing each element in the list, one at a time. 


let members: string[] =[`Mohsin`,`Aadil`,`Arslan`,`Zain`,`Ali`];
for(let i=0; i<members.length; i++){
  console.log(members[i]);
}  

// QUESTION 12: Greetings: Start with the arry you used in Exericise 11, but instead of just pringying each
// person's Name, print a massage to them. the text of each massage should be the  same, but each massage should be
// personalized with the person's Name


let members: string[] =[ `Mohsin`,`Aadil`,`Arslan`,`Zain`,`Ali`];
let message: string="Hello Aslam o alikum:";
for(let i=0; i<members.length; i++){
  console.log(message + members [i]);
}  

// QUESTION 13: Your Own Array:Thing of  your favourite mode of transportation, such as a motorcycle or
// a captureRejectionSymbol, and makea list that stores several examples. use your list to print a Seres
// of statement about these INSPECT_MAX_BYTES, such as "i would like to own a honda motorcycle."


let transportation :string[] =[`NINJA H2R`,`LANDCROUSER v8`, `CIVIC`];
for(let i=0; i<transportation.length; i++){
  console.log("i would like to own a " + transportation[i]);
}  

// QUESTION 14: Guest list: If you could invite anyone, living or deceased, to dinner, who would you
// invite?Make a list that includes at least three people you'd like to invite to dinner.then use your
// list tp print a massage to each person, inviting them to dinner. 


let guest_list: string[]=[`mohsin`,`arslan`,`aadil`,`zain`,`ali`];
for(let i=0; i<guest_list.length; i++){
  console.log(`Dear Friends:` + guest_list[i] + `,\nI invited you on dinner today.\nThank You`);  
}    

// QUESTION 15: Changing Guest List: You just heard that one of your  guests can't make the dinner, so you
// need to send out a new set of invitations. you'll have to think of someone eals to invite.

// *Start with your program from exercise 14 add a print statement at the end of your program stating the 
// name of the guest who can't make it.
// *Modifyyour listenerCount,replacing the name of the guest who can't make it with the name of the new person you
// are inviting.
// *Print a second set of invitation messages,one for each person who is still in your list.


let guest_list : string [] = [`mohsin`,`arslan`,`aadil`,`zain`,`ali`];
for(let i=0; i<guest_list.length; i++ ){
  console.log(`Dear Friend `+ guest_list[i] + `,\nI invited you on dinner today.\nThank You\n`);  
}    
let absent : string = `aadil`;
let new_guest :string = `sajjad`;
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
  console.log(`Dear Friend `+ guest_list[i] + `,\nI invited you on dinner today.\nThank you\n`);
}
console.log(`Mr. ${absent} Will not coming today's dinner. `);


// QUESTION 16:More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


let guest_list: string [] = [`mohsin`,`arslan`,`aadil`,`zain`,`ali`];

let absent : string = `aadil`;
let new_guest : string = `sajjad`;
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
  console.log(`dear friend `+ guest_list[i] + `,\nI invited to you on dinner today.\nThanks you\n`);
  
}
guest_list.unshift(`farhad`,`faraz`,`jawad`);
for(let i=0; i<guest_list.length; i++){
  console.log(`dear friend ` + guest_list[i] + `,\nI invited to you on dinner today.we found big table so we decide to invite 3 more guests\nThanks you\n`);
}


//  QUESTION 17: Shrinking Guest List: Unfortunately, your new table won’t arrive 
//  in time, and you can only invite two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.


let guest_list : string [] =[`mohsin`,`arslan`,`aadil`,`zain`,`ali`];

let absent : string = `aadil`;
let new_guest : string = `sajjad`;
guest_list[2] = new_guest;

guest_list.unshift(`farhad`,`faraz`,`jawad`)

console.log(`\nunfortunately i can't arrange big table , Only two people  allow.`)
while(guest_list.length>2){
  let remove_guest = guest_list.pop();
  console.log(`Sorry Dear Friend,${remove_guest} your are not invited for dinner.\n`);
}
for(let i=0; i<guest_list.length; i++){
  console.log(`Dear Friend `+ guest_list[i] + `,\nyes you are still invited on tomorrow dinner\nThank You\n`);
}
guest_list.splice(0, 2);
console.log(guest_list);


// QUESTION 18: Seeing the World: Think of at least five places you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let places : string [] =[`China`,`Amrica`,`Dubai`,`UK`,`Sukkar`];

console.log(`original ` + places);

console.log(`alphabetical ` + [...places].sort());

console.log(`original ` + places);

console.log(`reverse alphabetical ` + [...places].sort().reverse());

console.log(`original ` + places);

console.log(`reversed ` + [...places].sort().reverse());

console.log(`original ` + places);

console.log(`alphabetical ` + [...places].sort());

console.log(`reverse alphaetical ` + [...places].sort().reverse());


// QUESTION 19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.


import{ guest_list } from '../14_GUEST_LIST/appguest'
console.log(`\n PRINTING NUMBER OF GUEST INVITED`);
console.log(`We finally invited ${guest_list.length} from exerise`);


// QUESTION 20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.


let languages : string [] =[`english`,`urdu`,`panjabi`,`sindhi`,`balochi`]
console.log("list of languages:");
for(let top of languages){
console.log(top);
}


//QUESTION 21:They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.


interface item {
  name:string
  price:number
}

// two object
const book: item ={
  name: `rich dad poor dad`,
  price:675
}
const apple: item ={
  name:`banana`,
  price:150
}
console.log(`book name: ${book.name}:price: $${book.price}`)
console.log(`apple name: ${apple.name}:price: ${apple.price}`)


// QUESTION 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.


let array: (string | number) [] =[`farhad`,`shoukat`,5,2,7,"jawad"]
console.log(array[5]);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);


// QUESTION 23: Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';

 console.log("Is car == 'subaru'? I predict True.")

 console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car = "subaru";

// Test 1:
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); 

// Test 2: 
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda'); 

// Test 3:
console.log("Is car == 'Subaru'? I predict false.");
console.log(car == 'Subaru'); 

// Test 4:
console.log("Is car == 'SUBARU'? I predict false.");
console.log(car == 'SUBARU'); 

// Test 5:
console.log("Is car.lenght == 6? I predict true.");
console.log(car.length == 6);

// Test 6:
console.log("Is car.lenght != 10? I predict True.");
console.log(car.length != 10);

// Test 7:
console.log("Is 10 > 45? I predict false.");
console.log(10 > 45); 

// Test 8:
console.log("Is 3 <= 2? I predict false.");
console.log(3 <= 2); 

//test 9:
console.log("Is 72 >= 83? I predict false.");
console.log(72 >= 83); 

// Test 10:
console.log("Is car == 'subaru' && car.lenght == 6? I predict true ");
console.log(car == 'subaru' && car.length == 6);


// QUESTION 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let name_1 : string = "jawad";
let name_2 : string = "farhad";
let name_3 : string = "mohsin";

if (name_1 == name_3){
  console.log("names are equal");
} else {
  console.log("names are not equal");
}

 if (name_1 != name_2){
   console.log("names are equal");
 } 

 if (name_1 != name_3){
   console.log("names are equal");
 } 

let age_1 : number = 18;
let age_2 : number = 22;

if (age_1 == 18 ) {
  console.log("eligible for vote");
}

if (age_1 != 22) {
  console.log("eligible for vote in older category");
}

if (age_1 <= age_2){
  console.log("younger");
}

if (age_2 >= age_1){
  console.log("older");
}

if (age_1 == 18 && age_2 == 22){
  console.log("person is eligible for vote");
}

if (age_1 == 18 || age_2 == 22){
  console.log("person is not eligible for vote");
}

let country : string [] = [`pakistan`,`china`,`iran`,`united kingdom`]
if (country.includes("pakistan")){
  console.log("pakistan is in country list");
}

if(!country.includes("america")){
  console.log("america is not include in an array");
} 

// QUESTION 25: 
//  Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)


let alien_color = "green";

if (alien_color == "green")
console.log("you earn 5 points");

let alien_color : string ="red";
if (alien_color == "red")
console.log("no output");


//QUESTION 26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.


let alien_color = "green";

if (alien_color == "green"){
  console.log(" player just earned 5 points for shooting the alien");
} else{
  console.log("player just earned 10 points");
}

let alien_color = "red";

if (alien_color == "green"){
  console.log(" player just earned 5 points for shooting the alien");
} else{
  console.log("player just earned 10 points");
}


// QUESTION 27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.



let alien_color: string = "black";

if(alien_color == "green"){
  console.log("5 points");

} else if (alien_color == "yellow"){
  console.log("10 points");

} else {
  console.log("20 points");  
} 

// QUESTION 28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

 
let age :number = 70;

if (age <2) {
  console.log("your are baby");
  
}else if (age <4) {
  console.log("you are a toddler");
  
}else if (age <13) {
  console.log("you are a kid");
  
}else if (age <20) {
  console.log("you are a teenager");
  
}else if (age <65) {
  console.log(" you are a adult");
  
}else{
  console.log("you are older");

} 

// QUESTION 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!


let fav_fruits: string [] = ["mango","banana","apple", "peach","berry"];

if (fav_fruits.includes("mango")) {
  console.log("mango");  
}

if (fav_fruits.includes("banana")) {
  console.log("banana");  
}

if (fav_fruits.includes("apple")) {
  console.log("apple");
}

if (fav_fruits.includes("berry")) {
  console.log("you really like bananas");
}

if (fav_fruits.includes("banana")) {
  console.log("you really like bananas");
} 

// QUESTION 30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let users: string [] = ["admin","eric","jawad","mohsin","arslan"];

for(let user of users) {
  if (user === "admin") {
    console.log("Hello admin, would you like to see a stutas report?");
    
  } else {
    console.log(`Hello $(user), Thank you for logging in again`);
    
  }
} 

// QUESTION 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let users: string [] = ["admin","eric","jawad","mohsin","arslan"];

if (users.length === 0){
  console.log("we need to find some users");
  
}else{
  for (let user of users){
    if(user === "admin"){
      console.log("Hello admin, would you like to see a stutas report");
      
    } else {
      console.log(`Hello ${user}, Thanks you for logging in again`);
      
    }
  }
}

users = [];
if (users.length === 0) {
  console.log("we need to find some users");
  
} 

//QUESTION 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let current_users : string [] = ["Admin","Eric","Jawad","Mohsin","Arslan"];

let new_users : string [] = ["Admin","Eric","Faraz","Farhad","Aadil"];

let current_users_lower : string [] =current_users.map(user => user.toLowerCase())

for(let new_user of new_users) {
  if (current_users_lower.includes (new_user.toLowerCase())){
    console.log(`sorry ${new_user}, that name is takin`);
    
  } else {
    console.log(`yes ${new_user}, is still in avalible list`);
    
  }
}  

// QUESTION 33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.


let numbers : number [] = [1,2,3,4,5,6,7,8,9];

for (let number of numbers){
if (number === 1){
  console.log(`${number}st`); //1st
  
} else if (number === 2){
  console.log(`${number}nd`);  //2nd
  
} else if (number === 3){
  console.log(`${number}rd`);  //3rd
  
}else{
  console.log(`${number}th`); //4th 5th 6th 7th 8th 9th 
  
}
}  

// QUESTION 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!


let favourite_pizza : string [] = ["pepperoni","chicken","veg"];

for (let pizza of favourite_pizza) {
  console.log(pizza);
}
console.log("\n");

for(let pizza of favourite_pizza){
  console.log(` i really like ${pizza} pizza`); 
}
console.log("\n i really love pizza!");


//QUESTION 35:Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!


let animals : string [] = ["cat","lion","tiger"];

for (let animal of animals){
  console.log(animal);
}
console.log("\n");

for (let animal of animals){
  console.log(` A ${animal} has a tail`);
}
console.log("\nall of these are great pets! but i love tiger more");


// QUESTION 36:T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

 
function makeShirt(size: string, text: string): void {
  console.log(`you order a ${size} shirt that says ${text}`);
  
}
makeShirt(`medium`,`i need a big shirt`)
makeShirt(`large`,` i love this shirt`)


// QUESTION 37:Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.


function makeShirt(size: string = `large`, text: string =` i love this shirt`): void{
  console.log(`you have order a ${size}, shirt that says ${text}`);
  
}
makeShirt();
makeShirt(`medium`)

// different message
makeShirt(`small`, ` i need a big shirt to wear`)


// QUESTION 38: Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.

function describe_city(city: string, country: string = `pakistan`): void{
  console.log(`${city} is in ${country}`);
  
}
describe_city(`karachi`)
describe_city(`france`, `paris`)
describe_city(`hayderabad`, `sindh`)


//  QUESTION 39: City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.


function cityCountry(city: string, country: string): string {
  return `${city}, ${country}`
}
let city1 = cityCountry(`lahoor`, `pakistan`)
let city2 = cityCountry(`tokyo`, `japan`)
let city3 = cityCountry(`paris`, `france`)

console.log(city1);
console.log(city2);
console.log(city3);


// QUESTION 40:Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

function makeAlbum ( artist: string, title: string): {artist: string, title: string} {
  const dictionaries = {
    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: title.charAt(0).toUpperCase() + title.slice(1),

  };
  return dictionaries;
}

let album = makeAlbum("ali", "light")
console.log(album);

 album = makeAlbum("jawad", "guman")
console.log(album);

 album = makeAlbum("mohsin", "seenbreez")
console.log(album);


// QUESTION 41: Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.


function show_magicians(magicians: string[]): void {

  for (const magician of magicians) {
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
} 
const magician: string[] = ["jawad","hamza","bilal"]
show_magicians(magician)


// QUESTION 42: Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


function make_great(magicians: string[]): void {
  for (let i =0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + `  the great`

  }
}

const magician2: string[] = ["usama","haseeb","sohbat"];
make_great(magician2)
show_magicians(magician2)


//QUESTION 43: Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.


function make_great2(magicians: string[]): string[]{
  const greatMagicians: string[] = [];
  for (let i =0; i < magicians.length; i++) {
    greatMagicians.push(magicians[i] + `  the great`);
    }
    return greatMagicians;
  }

const magicians3: string[] = ["usama","haseeb","sohbat"];
const greatMagician2: string[] = make_great2(magicians3);
show_magicians(magicians3)
show_magicians(greatMagician2)


// QUESTION 44: Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


function sandwich(...items: string[]): void {
  console.log("Sandwich order:")

  for (let i = 0; i < items.length; i++) {
    console.log(`- ${items[i]}`);   
  }
}
console.log("enjoy your sandwich Jawad Shoukat");

sandwich(`capsicum`,`tomato`,`chicken`)
sandwich(`beef`,`cheeses`,)
sandwich(`garlic`,`chicken`,`mayo sauce`)



// QUESTION 45:Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.


type car = {
  manufacture: string
  model: string 
  [key: string]: any;

}
function creatCar(manufacture: string, model: string, optional: Record<string, any>): car {
 return{
  manufacture,
  model,
  ...optional
 }
}
const mycar: car = creatCar("toyota","civic",{color: "black", year: 2024})
console.log(mycar);

                /* 45 ASSIGMENT COMPLETE BY JAWAD SHOUKAT */