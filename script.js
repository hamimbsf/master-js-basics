/* var vs let */

// 'var' can be used before it's declared. It will just show 'undefined'.
// console.log(a); // undefined
// var a = 5;

// But 'let' cannot be used before declaration. It gives an error.
// console.log(b); // ❌ Error: Cannot access 'b' before initialization
// let b = 10;

// ✅ Tip: It's better to use 'let' or 'const' instead of 'var'.


/* Add, Subtract, Multiply, and Divide two variables */

// let x = 10;
// let y = 5;

// console.log(x + y); // Addition → 15
// console.log(x - y); // Subtraction → 5
// console.log(x * y); // Multiplication → 50
// console.log(x / y); // Division → 2



/* How to check the data type of a variable */

// let a = 12;
// let b = "13";

// The + operator adds numbers, but if one is a string, it joins them (concatenation).
// console.log(a + b);        // "1213" → Not number addition
// console.log(typeof (a + b)); // "string"

// ✅ 'typeof' tells you the data type of a value.
// console.log(typeof a); // number
// console.log(typeof b); // string


/* Operand vs Operator */

// + - * / → These are called **operators**
// They are used to do math (like add, subtract, multiply, divide)

// let a = 10;
// let b = 5;

// console.log(a + b); // 15

// In this line:
// '+' is the **operator**
// 'a' and 'b' are the **operands**

/*
👉 Easy way to remember:
- Operator = the symbol (+, -, *, /)
- Operand = the number or value beside the symbol
*/


/* Sum message */

// let a = 10;
// let b = 20;
// console.log("Sum of 10 and 20 is " + a + b);


// 🧠 Why it shows "Sum of 10 and 20 is 1020" instead of adding 10 + 20?

// 👉 JavaScript sees the + symbol and does this:

// First: "Sum of 10 and 20 is " + a → This becomes "Sum of 10 and 20 is 10"

// Then: "Sum of 10 and 20 is 10" + b → This becomes "Sum of 10 and 20 is 1020"

// 💡 Because the first part is a string, JavaScript treats everything after it as string too — this is called concatenation (joining strings).


//✅ Correct way to show the actual sum:

// let a = 10;
// let b = 20;
// console.log("Sum of 10 and 20 is " + (a + b)); // Output: Sum of 10 and 20 is 30


// let a = 10;
// let b = 20;
// console.log( a + b + "Sum of 10 and 20 is 30");

// এখানে ৩০ কেন হলো কারণ জেএস লাইন বাই লাইন কোড পড়ে যখন সে দেখলো অ্যাডিশন সিম্বল এর দুইপাশের দুইটা ভ্যারিয়েবল নাম্বার তখন সে নাম্বার যোগ করলো তারপর পাশের স্ট্রিং এর সাথে কনকাট করলো

// কেন আউটপুট হলো 30Sum of 10 and 20 is 30?

// 👉 JavaScript কোডটা একে একে পড়ে।
// প্রথমে দেখে a + b → এখানে দুটো সংখ্যা (10 + 20), তাই রেজাল্ট হলো 30
// এরপর 30 এর সঙ্গে পাশের স্ট্রিং "Sum of 10 and 20 is 30" কনক্যাট (string এর মতো জুড়ে দেয়) করে দেয়
// তাই চূড়ান্ত আউটপুট হয়: "30Sum of 10 and 20 is 30"

/* Type Coercion (টাইপ কোয়ার্শন) */

// console.log("1" - 1); // Output: 0

// প্রসেস -->

// এখানে "1" হলো একটি স্ট্রিং, আর 1 হলো একটি নাম্বার
// JavaScript যখন "-" অপারেটর দেখে, তখন সেটা শুধু সংখ্যা নিয়ে কাজ করে
// তাই JavaScript স্ট্রিং "1" কে আগে নাম্বারে রূপান্তর করে নেয় (এটাই টাইপ কোয়ার্শন)
// তারপর 1 - 1 করে → রেজাল্ট হয় 0


// নোট: "-", "*", "/" → এগুলো সবসময় নাম্বার টাইপ চায়
// তাই স্ট্রিং থাকলেও সেটা নাম্বারে রূপান্তর করে নেয়

// console.log("10" - 2); // 8
// console.log("5" * 2);  // 10
// console.log("20" / 4); // 5

// কিন্তু

// "+" অপারেটর দুই রকম কাজ করতে পারে:
// যদি যেকোনো একটা স্ট্রিং থাকে, তাহলে কনক্যাট করে
// console.log("10" + 2); // "102" → কারণ এটা স্ট্রিং এ রূপান্তর করে দেয়
