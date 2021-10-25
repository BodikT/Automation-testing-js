//Доброго дня, я зробив це завдання від простішого до складнішого способу, хоча зрозуміло, що все можна зробити функціями, гарного Вам дня.

//TASK1 Write a JS program to compute and print the sum of the two given integers
let a = 5;
let b = 10;
console.log(a+b);

//TASK2 Write a JS program to create a new string adding “Test_" in front of a given string
let str = "String";
console.log("Test_" +str); 

//TASK3 Write a JS program to combine and print your first, last name and age
const myName = "Bohdan ";
const surName = "Huzar ";
const age = "29";
console.log(myName+surName+age);

//TASK 4 Write a JS program to check a given integer is bigger than 100
let int = 120;
console.log(int>100);

//TASK 5 Write a JS program to find if the first number is larger from the two given positive integers
let task5 = (x,y,z) =>{
if(x> y && x> z){
    return true;
}else{
    return false;
}};
console.log(task5(15,10,7));

//TASK 6   Write a JS program to check two given numbers and print true if one of the number is 50 or if their sum is 50
let task6 = (x,y) =>{
if ((x == 50 || y == 50) || (x + y == 50)){
    return true;
}else{
    return false;
}};
console.log(task6(20,30));

//TASK7 Write a JS program check if a given positive number is a multiple of 3 or a multiple of 7
let task7 = (x) => {
if (x % 3 == 0 || x % 7 == 0){
    return true;
}else{
    return false;
}}; 
console.log(task7(3));  