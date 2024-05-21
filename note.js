
/* Create a person object that contains three keys: name, age, and country
 Create a function logData(), that uses the persona object to create a 
 string in the following format:
 "Per is 35 yeras old and lives in Norway"
 Call the logData() function to verify that it works */


// let person = {
//     name: "Megan"
//     age: 33
//     country: "USA"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in the " + person.country+ )
// }


// logData()


//  less than 6 years old -> free
//    6 to 17 years old     -> child discount
//    18 to 26 years old    -> student discount
//    27 to 66 years old    -> full price
//    over 66 years         -> senior citizen discount

//    Create a conditional statement (if/else/else if) that logs out the discount
//    the passenger will get based upon the value of the age variable

// let age = 15

// if (age < 6) {
//     console.log("free")
// } else if (age < 18) {
//     console.log("child discount")
// } else if (age < 27) {
//     console.log("student discount")
// } else if (age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }

// let largeCountries = ["China", "India", "USA", "Indonesia","Pakistan"]

// use a for loop to log the following to the console:

// The 5 largest countries in the world:
// China
// India
// United States
// Indonesia
// Pakistan

// console.log("The 5 largest countries in the world")

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }


largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)