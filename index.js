#!/usr/bin/env node
import inquirer from "inquirer";
// The Steps or Algorithm
// Q-1 what's your daily screen time
// Q-2 what's your age 
// check how many years are remaining
// check how many months are remaining
// check how many days are remaining
// hours to year formula
// By the time you reach 65 if you use your mobile regularly for {screenTime} you will lost {timeInYears} years of your life just staring at the mobile phone. and you will say what if i had not spent that time in this and spent it with my loved ones or spent it playing with friends and you will regret 
let dailyScreenTime = await inquirer.prompt({
    message: "What's your average daily screen time on mobile (in hours)?",
    name: "screenTime",
    type: "number"
});
// Check if the input is a valid number
if (typeof dailyScreenTime.screenTime === "number" && !isNaN(dailyScreenTime.screenTime)) {
    // Get current age
    let currentAge = await inquirer.prompt({
        message: "What's your current age?",
        name: "age",
        type: "number"
    });
    // Check if the input is a valid number
    if (typeof currentAge.age === "number" && !isNaN(currentAge.age)) {
        // Calculations
        let remainingYears = 65 - currentAge.age;
        let remainingMonths = remainingYears * 12;
        let remainingDays = remainingYears * 365;
        let remainingHours = remainingDays * 24;
        let wastedHours = remainingHours * (dailyScreenTime.screenTime / 24);
        let wastedYears = wastedHours / (365 * 24);
        // Output
        console.log("\nYou will waste ", wastedYears.toFixed(2), " years just by staring at your mobile phone.");
        console.log(`\nBy the time you reach 65, if you use your mobile regularly for ${dailyScreenTime.screenTime} hours per day, you will have lost ${wastedYears.toFixed(2)} years of your life just staring at the mobile phone.`);
    }
    else {
        console.log("Please enter a valid number for your age.");
    }
}
else {
    console.log("Please provide screen time in number.");
}
