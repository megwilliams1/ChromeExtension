
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


// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// let dayOfMonth = 13;
// let weekday = "Friday";
// if ("Friday" && 13) {
//     console.log(":hankey:")
// }
// or
// if (weekday === "Friday" && dayOfMonth=== 13) {
//     console.log(":hankey:")
// }
// let hands = ["rock", "paper", "scissor"];
// let randomIndex = Math.floor(Math.random() * hands.length);
// let randomHand = hands[randomIndex];
// console.log(randomHand);
// or
// function getHand() {
//     let randomIndex = Math.floor(Math.random() * hands.length);
//     return hands[randomIndex]
// }
// console.log(getHand)
// let color = ["white", "blue", "black", "green", "red"]
// function colorRandom() {
//     let randomIndex = Math.floor(Math.random() * color.length);
//     return color[randomIndex]
// }
// console.log(colorRandom())
// let piece = ["blue", "red", "red", "blue", "red"]
// let blueShelf = document.getElementById("blue-shelf")
// let redShelf = document.getElementById("red-shelf")
// function sortPieces() {
//     blueShelf.textContent = '';
//     redShelf.textContent = '';
//     for (let i = 0; i < piece.length; i++) {
//         if (piece[i] === "blue") {
//             blueShelf.textContent += piece[i] + ' ';
//         } else if (piece[i] === "red") {
//             redShelf.textContent += piece[i] + ' ';
//         }
//     }
// }
// sortPieces()

// <html>
//     <head>
//         <link rel="stylesheet" href="index.css">
//     </head>
//     <body>
//         <div id="box">Open the box!</div>
//         <script src="index.js"></script>
//     </body>
// </html

/* 1. Grab the box from the DOM and store it in a variable
   2. Add a click event listener to the box
   3. Log out "I want to open the box!" when it's clicked*/

   // let box = document.getElementById("box")

   // box.addEventListener("click", function(){
   //  console.log("I want to open the box!")
   // })

   // Create two variable:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

   // const basePrice = 520
   // const discount = 120
   // let shippingCost = 12
   // let shippingTime = "5-12 days"

   // shippingCost = 15
   // shippingTime = "7-14 days"

   // const fullPrice = basePrice - discount + shippingCost

   // console.log("Total cost: " + fullPrice + ". It will arive in " + shippingTime)

   
// -use .innerHTML to render a Buy! button inside the dive container

// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'>Buy!<button>"

// when clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying"

// function buy() {
//    container.innerHTML = "<p>Thank you for buying!</p>"
// }

// // create element 
// document.createElement("li")
// // store in variable
// const li = document.createElement("li")
// //set text content
// li.textContent = myLeads[i]
// // append to ul
// ulEl.append(li)

// localStorage.setItem("myName", "Megan")
// localStorage.getItem("myName")
// localStorage.clear()

// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)

// const recipient = "James"
// const sender = "Megan"
// const email = `Hey ${recipient}!  How is it going? Cheers ${sender}`

// console.log(email)

// localStorage.setItem("myLeads", JSON.stringify(myLeads))



// console.log([0])
// console.log(-0)

// const welcomeEl = document.getElementById("welcome-el")

// // **Give the function a parameter, greeting, that replaces "Welcome back"**

// function greetUser(greeting, name, emoji) {
//    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
// }

// greetUser("Greetings", "Megan", "💌")

// **create a function, add(), that adds two numbers together & returns the sum**

// function add(num1, num2) {
//    return num1 + num2
// }

// console.log( add(3, 4)  )
// console.log( add(9, 102) )

// **create a function, getFirst(arr), that returns the first item in the Array.apply

// **call it with an array as an argument to clarify that it ServiceWorkerRegistration.


function getFirst(arr) {
   return arr[0]
}

 let firstCard = getFirst([10, 2, 5])
 
 console.log(firstCard)
