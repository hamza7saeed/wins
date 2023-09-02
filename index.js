// Coding Challenge #1
/*
Ali and Babar are comparing their BMI (Body Mass Index), calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meters).

1. Store Ali's and Babar's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'aliHigherBMI' to check if Ali has a higher BMI than Babar.

TEST DATA 1: Ali weighs 78 kg and is 1.69 m tall. Babar weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Ali weighs 95 kg and is 1.88 m tall. Babar weighs 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
// Test Data 1:
// let aliWe = 78;
// let aliHi = 1.69;
// let ali= aliWe/aliHi**2
// console.log(ali);
// let baberWe = 92;
// let baberHi = 1.95;
// let baber = baberWe/baberHi**2
// console.log(baber);
// if (ali > baber){
// console.log("Ali has more BMI then Baber");
// } else {
//     console.log("Baber has more BMI then Ali");
// }
// // Test Data 2
// let aliWei = 95;
// let aliHig = 1.88;
// let Ali= aliWei/aliHig**2
// console.log(Ali);
// let baberWei = 85;
// let baberHig = 1.76;
// let Baber = baberWei/baberHig**2
// console.log(Baber);
// if (Ali > Baber){
// console.log("Ali has more BMI then Baber");
// } else {
//     console.log("Baber has more BMI then Ali");
// }
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Ali's BMI is higher than Zain's!" or "Zain's BMI is higher than Ali's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Ali's BMI (28.3) is higher than Zain's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// Data 1
// let aliWeight = 77;
// let aliHight = 1.56;
// let aliBMI = aliWeight / aliHight**2
// console.log(aliBMI);
// let zainWight = 55;
// let zainHight = 1.33;
// let zainBMI = zainWight/zainHight**2
// console.log(zainBMI);
// if (aliBMI > zainBMI){
// console.log(`Ali BMI ${aliBMI} higher then zain ${zainBMI}` );
// } else {
//     console.log(`Zain BMI ${zainBMI} higher then Ali BMI ${aliBMI}`);
// }
// // Data 2
// let aliWeigh = 57;
// let aliHigh = 1.86;
// let AliBMI = aliWeigh / aliHigh**2;
// console.log(AliBMI);
// let zainWigh = 102;
// let zainHigh = 1.79;
// let ZainBMI = zainWigh/zainHigh**2;
// console.log(ZainBMI);
// if (AliBMI > ZainBMI){
// console.log(`Ali BMI ${AliBMI} higher then zain ${ZainBMI}`);
// } else {
//     console.log(`Zain BMI ${ZainBMI} higher then Ali BMI ${AliBMI}`);
// }
// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
// Test Data:
var dolphins = 96 + 108 + 89;
var avgD1 = dolphins / 3;
console.log(avgD1);
var koalas = 88 + 91 + 110;
var avg1K = koalas / 3;
console.log(avg1K);
if (avgD1 > avg1K) {
    console.log("Dolphin wins ");
}
else if (avg1K > avgD1) {
    console.log("Koalas wins");
}
else {
    console.log("Match draw");
}
// TEST DATA BONUS 1
var Dolphins = 97 + 112 + 101;
var avgD = Dolphins / 3;
console.log(avgD);
var Koala = 109 + 95 + 123;
var avgK = Koala / 3;
console.log(avgK);
if (avgD > avgK) {
    console.log("Dolphin wins ");
}
else if (avgK > avgD) {
    console.log("Koalas wins");
}
else {
    console.log("Match draw");
}
// TEST DATA BONUS 2
var dolphin = 97 + 112 + 101;
var avgd = dolphin / 3;
console.log(avgd);
var koala = 109 + 95 + 106;
var avgk = koala / 3;
console.log(avgk);
if (avgd > avgk) {
    console.log("Dolphin wins ");
}
else if (avgk > avgd) {
    console.log("Koalas wins");
}
else {
    console.log("Match draw");
}
