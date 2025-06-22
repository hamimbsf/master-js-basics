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


/* Accept and print a number (Type Casting / Type Conversion) */

// let age = prompt("Enter your age:");

// 👉 prompt() ফাংশন সবসময় ইনপুটকে **স্ট্রিং** হিসেবে নেয়, এমনকি ইউজার সংখ্যা দিলেও।

// তাই স্ট্রিং → নাম্বারে রূপান্তর করতে Number() ব্যবহার করি
// age = Number(age);

/*
যদি ইনপুট দেওয়া স্ট্রিং-টা সত্যিই একটি সংখ্যা হয়, তাহলে সেটা নাম্বারে রূপান্তর হবে।
নইলে রেজাল্ট হবে NaN (Not a Number)

উদাহরণ:
"১২"    → ১২ (number)
"১২a"   → NaN
"Hamim" → NaN
*/

// console.log(age);


/* Number to String Conversion (Type Casting / Type Conversion) */

// let a = 12
// a = String(a)
// console.log(typeof(a));

// শুধু নাম্বারই নয় বরং সংখ্যা কে স্ট্রিং এ রূপান্তর করাকেও টাইপ কাস্টিং / টাইপ কনভার্সন বলা হয়


/* Swipe 2 variable via 3 different ways */

// 📘 Formula One: Swap two values using a temporary variable

// let a = "Hamim";
// let b = "Alif";

// let c; // একটি অতিরিক্ত ভ্যারিয়েবল নিচ্ছি (temporary variable)

// c ভ্যারিয়েবলে a এর কপি সংরক্ষণ করছি → এখন c = "Hamim"
// c = a;

// a-তে এখন b এর মান বসাচ্ছি → এখন a = "Alif"
// a = b;

// b-তে এখন পুরনো a মানে c বসাচ্ছি → এখন b = "Hamim"
// b = c;

// console.log("a =", a); // Output: Alif
// console.log("b =", b); // Output: Hamim

// 🔖 নোট:
// এই পদ্ধতিতে number, string, boolean ইত্যাদি যেকোনো টাইপের ভ্যালু swap করা যায়


// formula two *** Swap two numbers using arithmetic operations (no extra variable used) ***


// let a = 15
// let b = 20

// a = b + a // a = 35
// b = a - b // b = 35 - 20 == 15
// a = a - b // a = 35 - 15 == 20

// console.log("a",a);
// console.log("b",b);

// note :: এই ফর্মুলা দিয়ে শুধু কেবল মাত্র নাম্বার swipe করতে পারবেন স্ট্রিং নয়


// 📘 Formula Three: Swap two values using array destructuring (ES6+)

// let a = 12;
// let b = 21;

// [a, b] = [b, a];

// মানে JavaScript একসাথে দুইটা মান array আকারে অস্থায়ীভাবে ধরে রাখে
// তারপর ডান পাশের মানগুলো বাম পাশের ভ্যারিয়েবলগুলোতে বসিয়ে দেয়

// console.log("a =", a); // Output: 21
// console.log("b =", b); // Output: 12

/* Arithmetic Operator (+,-,*,/,%) */

// let a = 10;
// let b = 2;

// console.log(a + b); // যোগফল: 12
// console.log(a - b); // বিয়োগফল: 8
// console.log(a * b); // গুণফল: 20
// console.log(a / b); // ভাগফল: 5 (মানে 10 কে 2 দিয়ে ভাগ করলে যা পাওয়া যায়)
// console.log(a % b); // ভাগশেষ: 0 (মানে 10 কে 2 দিয়ে ভাগ করলে কোনো ভাগশেষ থাকে না)


// Question One: How to get the last digit of any number?

// let a = 1221;
// console.log(a % 10); // Output: 1

// % (মডুলাস) অপারেটর ভাগশেষ দেখায়।
// যখন তুমি a % 10 লেখো, তখন তুমি a সংখ্যাটিকে 10 দিয়ে ভাগ করছো
// এবং যা ভাগশেষ থাকে সেটাই সংখ্যাটির শেষ অঙ্ক (last digit) হয়।

// ✅ উদাহরণ:
// 1221 % 10 → ভাগশেষ 1 → শেষ অঙ্ক 1
// 879 % 10 → ভাগশেষ 9 → শেষ অঙ্ক 9
// 540 % 10 → ভাগশেষ 0 → শেষ অঙ্ক 0

// Question Two: How to get the first three digits of the number 1221?

// let a = 1221;
// console.log(Math.floor(a / 10)); // Output: 122

// 🔍 ব্যাখ্যা:
// 1221 এর শেষের এক অঙ্ক বাদ দিতে হলে 10 দিয়ে ভাগ করলেই হয়।
// 1221 ÷ 10 = 122.1 → Math.floor() ফাঙ্কশন দিয়ে দশমিক বাদ দিলে পাওয়া যাবে 122

// ✨ তাই প্রথম তিন অঙ্ক (1, 2, 2) আমরা পেয়েছি।
// 📝 Note:
// শুধু 1221 নয় — যেকোনো সংখ্যার প্রথম কিছু অঙ্ক (digit) পেতে হলে,
// আগে দেখতে হবে সংখ্যাটি মোট কয় অঙ্কের (digit).
// এরপর তুমি সিদ্ধান্ত নেবে — কতটি অঙ্ক (digit) রাখতে চাও?

// 📌 কৌশল:
// যদি তুমি কোনো সংখ্যার শুরু (first) থেকে N অঙ্ক রাখতে চাও,
// তাহলে সংখ্যাটিকে এমন একটি মান দিয়ে ভাগ করতে হবে,
// যাতে শেষে যেসব অঙ্ক বাদ পড়বে, সেগুলো বাদ পড়ে যায়।

// 🎯 উদাহরণ:
// ধরো, number = 987654 (6 digit এর সংখ্যা)
// তুমি যদি প্রথম 2টি অঙ্ক (98) পেতে চাও,
// তাহলে শেষে 4টি অঙ্ক বাদ দিতে হবে → 10^4 = 10000 দিয়ে ভাগ করো

// let number = 987654;
// console.log(Math.floor(number / 10000)); // Output: 98


