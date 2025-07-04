/* var vs let */

// 'var' ব্যবহার করা যায় ডিক্লেয়ার করার আগে। তখন undefined দেখাবে।
// console.log(a); // undefined
// var a = 5;

// কিন্তু 'let' ব্যবহার করা যায় না ডিক্লেয়ার করার আগে। error দিবে।
// console.log(b); // ❌ Error: Cannot access 'b' before initialization
// let b = 10;

// ✅ টিপ: বরং 'let' বা 'const' ব্যবহার করাই ভালো, 'var' নয়।

/* দুইটা ভ্যারিয়েবল নিয়ে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করবেন */

// let x = 10;
// let y = 5;

// console.log(x + y); // যোগফল → ১৫
// console.log(x - y); // বিয়োগফল → ৫
// console.log(x * y); // গুণফল → ৫০
// console.log(x / y); // ভাগফল → ২



/* Data type of a variable (কিভাবে ভ্যারিয়েবলের ডেটা টাইপ চেক করবেন) */

// let a = ১২;
// let b = "১৩";

// + অপারেটর নাম্বার যোগ করে, কিন্তু যদি কোনো একটা স্ট্রিং হয়, তাহলে দুটোকে যোগ করে স্ট্রিং বানিয়ে দেয়।
// console.log(a + b);        // "১২১৩" → নাম্বার যোগ নয়, স্ট্রিং যোগ
// console.log(typeof (a + b)); // "string"

// ✅ 'typeof' দিয়ে ডেটা টাইপ জানো।
// console.log(typeof a); // number
// console.log(typeof b); // string



/* Operand ও Operator কি? */

// + - * / এগুলোকে **operator** বলে।
// যেগুলো দিয়ে যোগ, বিয়োগ, গুণ, ভাগ করা হয়।

// let a = 10;
// let b = 5;

// console.log(a + b); // ১৫

// এখানে:
// '+' হলো operator
// 'a' এবং 'b' হলো operand (অর্থাৎ operator এর পাশে থাকা ভ্যালু)

/*
👉 সহজে মনে রাখার উপায়:
- Operator = যেই সিম্বল (+, -, *, /)
- Operand = যেই নাম্বার বা মান operator এর পাশে থাকে
*/


/* যোগফল দেখানোর ভুল ও সঠিক উপায় */

// let a = 10;
// let b = 20;
// console.log("Sum of 10 and 20 is " + a + b);

// 🧠 কেন ফলাফল হলো "Sum of 10 and 20 is 1020" (অর্থাৎ যোগফল নয়)?

// 👉 জাভাস্ক্রিপ্ট দেখে + সিম্বল দিয়ে কি করবে:
//
// প্রথমে "Sum of 10 and 20 is " + a → হয় "Sum of 10 and 20 is 10"
// তারপর "Sum of 10 and 20 is 10" + b → হয় "Sum of 10 and 20 is 1020"

// 💡 কারণ প্রথম অংশ স্ট্রিং, তাই পরে আসা সবকিছু স্ট্রিং হিসেবে যোগ হয়েছে (concatenation)।


//✅ সঠিক উপায়:

// let a = 10;
// let b = 20;
// console.log("Sum of 10 and 20 is " + (a + b)); // আউটপুট: Sum of 10 and 20 is 30



// let a = 10;
// let b = 20;
// console.log(a + b + " Sum of 10 and 20 is 30");

// এখানে কেন ফলাফল হলো "30 Sum of 10 and 20 is 30"?

// 👉 জাভাস্ক্রিপ্ট কোড লাইন বাই লাইন পড়ে:
// প্রথমে a + b → ১০ + ২০ = ৩০ (দুই নাম্বার যোগ হয়)
// তারপর ৩০ এর সাথে পাশের স্ট্রিং যোগ করে দেয়
// তাই ফলাফল হয়: "30 Sum of 10 and 20 is 30"

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


/* Swap 2 variable via 3 different ways */

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


/* Relation Operator/Comparison Operator (<,>,==,!=,<=,>=)*/

// রিলেশন অপারেটর/কমপ্যারিসন অপারেটর সবসময় বুলিয়ান ভ্যালু (true/false) retun করে

/* Relation Operator / Comparison Operator (<, >, ==, !=, <=, >=) */

// রিলেশন অপারেটর সবসময় Boolean মান রিটার্ন করে — অর্থাৎ true বা false

// console.log(10 > 5);
// 10 কি 5 এর চেয়ে বড়? → হ্যাঁ ✅ → ফলাফল: true

// console.log(10 < 5);
// 10 কি 5 এর চেয়ে ছোট? → না ❌ → ফলাফল: false

// console.log(10 == 5);
// 10 কি 5 এর সমান? → না ❌ → ফলাফল: false

// console.log(10 == 10);
// 10 কি 10 এর সমান? → হ্যাঁ ✅ → ফলাফল: true

// console.log(10 != 10);
// 10 কি 10 এর সমান না? → না ❌ → তারা তো সমান → ফলাফল: false

// console.log(10 <= 10);
// 10 কি 10 এর থেকে ছোট অথবা সমান? → সমান ✅ → ফলাফল: true

// console.log(10 >= 10);
// 10 কি 10 এর থেকে বড় অথবা সমান? → সমান ✅ → ফলাফল: true


// >	বড়	ডান দিকটা ছোট (5 < 10) → মুখ বড় দিকের দিকে
// <	ছোট	বাঁ দিকটা ছোট (10 > 5)
// ==	সমান	double equal মানে দুইটা জিনিস এক (strict mode নয়)
// ===	সমান	double equal মানে দুইটা জিনিস এক (strict mode)
// !=	সমান না	"!" = না → মানে "সমান না" (strict mode নয়)
// !==	সমান না	"!" = না → মানে "সমান না" (strict mode)
// <=	ছোট অথবা সমান	less than বা equal দুইটাই চলবে
// >=	বড় অথবা সমান	greater than বা equal দুইটাই চলবে

//Note :: strict mode বলতে যখন জেএস কমপ্যারিসন করে স্ট্রিক্ট মোড বাদে তখন যদি একটি স্ট্রিং কে নাম্বার এ রূপান্তর করা যায় সে করে ট্রু রিটার্ন করে যেমন
// console.log(5=="5");//true
// console.log(5==="5");//false
// console.log(5!="5");//false
// console.log(5!=="5");//true


// 📝 Note:
// সবসময় মনে রাখবে — যেদিকে > এর মুখ থাকবে, সেদিকের সংখ্যা বড় হবে।

// উদাহরণ:

// console.log(10 > 5);
// এখানে > মুখ 10 এর দিকে খোলা ⇒ তাই 10 বড় 5 এর চেয়ে ⇒ true

// console.log(5 < 10);
// এখানে < মুখ 10 এর দিকে খোলা ⇒ তাই 10 বড় 5 এর চেয়ে ⇒ true

/* Relation Operator (&&, ||) */

// && (AND) এবং || (OR) — এরা দুইটি বা একাধিক শর্ত নিয়ে কাজ করে
// এগুলো সবসময় true বা false রিটার্ন করে (Boolean value)

// ✅ && (AND):
// দুই বা ততোধিক শর্ত যদি সবগুলোই সত্য হয়, তাহলে ফলাফল হবে true
// যেকোনো একটি false হলেই ফলাফল false হয়ে যাবে

// console.log(10 < 11 && 11 > 5); // true
// console.log(10 < 11 && 11 < 5); // false

// && সবসময় তার উভয় পাশের (বা যতগুলো শর্ত থাকে) সত্যতা যাচাই করে

// console.log(10 < 11 && 11 > 5 && "Hamim" === "Hamim"); // true

// যতগুলো && থাকবে একটি লজিকে, ততগুলো শর্তই চেক করবে
// সবগুলোই true হলে তবেই true রিটার্ন করবে

// console.log(15 < 11 && 11 > 5 && "Hamim" === "Hamim"); // false

// যদি যেকোনো একটি শর্ত false হয়,
// JavaScript ইঞ্জিন এরপর আর বাকি শর্তগুলো চেক করে না
// কারণ প্রথমেই false পেয়ে গেছে, তাই শেষ ফলাফল false হবে
// এটাকে বলা হয় short-circuit evaluation

// || (OR) অপারেটর:

// যদি যেকোনো একটা শর্ত true হয় তাহলে সে true রিটার্ন করবে
// সবগুলো শর্ত যদি false হয়, তাহলেই কেবল false রিটার্ন করবে

// console.log(10<5 || 5<3); //false
// কারণ দুইটাই ভুল, তাই false

// console.log(10<5 || 5<10); //true
// কারণ দ্বিতীয়টা ঠিক — তাই true

// console.log(10>5 || 10<5 || "Hamim"==="Hamim"); //true
// প্রথমটাই true পেয়ে গেছে, তাই বাকিগুলো চেকই করেনি

// || অপারেটর যেইটা আগে true পাবে সেখানেই থেমে যাবে
// এটাকেই বলে short-circuit

//যতগুলো || থাকবে, তার মধ্যে যেকোনো একটাও true হলেই সে true রিটার্ন করবে

//Note :: || অপারেটর চিন্তা করে — “একজন ঠিক থাকলেই আমি খুশি”

/* Unary Operator ( --,++ )*/

// ++ = increment অপারেটর

// let a = 10;
// let b = a++; // post increment

// console.log(a); // 11
// console.log(b); // 10 ❗

// post increment --> কোনো ভ্যারিয়েবলের পাশে যখন ++ বসে
// তাকে বলা হয় post increment

// প্রশ্ন: b এর ভ্যালু 10 কেন? a তো 11 হলো!
// কারণ: b তে a এর পুরানো মান কপি হয়েছে
// increment হয়েছে পরে, b তে তখনও পুরাতন মানই ছিল

// 👉 post increment মানে আগে মান নেয়, পরে 1 বাড়ায়


// -- = decrement অপারেটর

// let a = 10;
// let b = a--; // post decrement

// console.log(a); // 9
// console.log(b); // 10

// post decrement --> যখন ভ্যারিয়েবলের পাশে -- থাকে
// মানে হচ্ছে আগে মান নেয়, পরে ১ কমায়

// b তে a এর পুরানো মান কপি হয়েছে
// তারপর a এর মান কমে গেছে ৯ হয়েছে

// 👉 post decrement মানে: আগের মানে কাজ করো, পরে ১ কমাও

// Pre Increment

// let a = 10;
// let b = ++a; // pre increment

// console.log(a); // 11
// console.log(b); // 11

// pre increment --> যখন ভ্যারিয়েবলের আগে ++ বসে
// তখন সেটা আগে ১ বাড়ায়, তারপর মান নেয়

// এখানে a এর মান ছিল 10
// ++a মানে আগে ১ বাড়াও → এখন a = 11
// এরপর সেই 11 b তে কপি হয়েছে

// 👉 pre increment মানে: আগে বাড়াও, পরে ব্যবহার করো

// pre decrement
// let a = 10;
// let b = --a; // pre decrement

// console.log(a); // 9
// console.log(b); // 9

// pre decrement --> যখন ভ্যারিয়েবলের আগে -- বসে,
// তখন সে আগে ১ কমায় তারপর সেই মান ব্যবহার করে

// এখানে a এর মান ছিল 10
// --a মানে আগে ১ কমাও → এখন a = 9
// এরপর সেই 9 b তে কপি হয়েছে

// 👉 pre decrement মানে: আগে কমাও, পরে ব্যবহার করো


// let a = 11
// a = a++ + ++a

// console.log(a); // 24

// প্রথমে a = ১১
// a++ (post increment) → আগে মান ব্যবহার করবে (১১), পরে বাড়াবে → a হবে ১২
// ++a (pre increment) → আগে বাড়াবে, তারপর মান ব্যবহার করবে → a হবে ১৩
// যোগফল: ১১ + ১৩ = ২৪
// এই যোগফল a তে রাখা হয়


// Note :: Unary Operator

// Unary Operator মানে এমন অপারেটর যেটা মাত্র একটিমাত্র মান/ভ্যারিয়েবল-এর উপর কাজ করে
// যেমন: ++, --, typeof, !

// ⚠️ এটা শুধু ভ্যারিয়েবল এর সঙ্গেই ব্যবহার করা যায়,
// কোনো constant value (যেমন: 15 বা "Hamim") এর সঙ্গে না

// let a = 10;
// console.log(++a); // ✅ এখানে কাজ করবে → a = 11

// console.log(++15); // ❌ Error → কারণ 15 হলো constant value, এটা পরিবর্তনযোগ্য না

// 👉 কারণ ১৫ কোনো ভ্যারিয়েবল না, বরং একটা সংখ্যা
// আর আপনি constant কিছুতে ++ বা -- দিয়ে ইনক্রিমেন্ট/ডিক্রিমেন্ট করতে পারবেন না


/* Math Function */

// console.log(Math.random());
// 🔹 Math.random() → ০ এবং ১ এর মাঝের যেকোনো একটা দশমিক সংখ্যা রিটার্ন করবে
// ⚠️ কিন্তু কখনোই ঠিক ০ বা ঠিক ১ দিবে না
// যেমন: 0.2345, 0.9182 ইত্যাদি

// console.log(Math.round(12.6)); // 13
// console.log(Math.round(12.3)); // 12
// 🔹 Math.round() → দশমিক সংখ্যা রাউন্ড করে
// .৫ বা তার বেশি হলে উপরের দিকে (up), নিচে হলে নিচে (down)

// console.log(Math.ceil(12.3)); // 13
// 🔹 Math.ceil() → যেকোনো দশমিক সংখ্যা সবসময় উপরের পূর্ণ সংখ্যায় উঠায়
// মানে 12.1, 12.5, 12.9 → সবকিছু হবে 13

// console.log(Math.floor(12.3)); // 12
// 🔹 Math.floor() → যেকোনো দশমিক সংখ্যা নিচের পূর্ণ সংখ্যায় নামায়
// 12.9, 12.5, 12.1 → সবই হবে 12

// console.log(Math.trunc(12.3)); // 12
// 🔹 Math.trunc() → শুধু পূর্ণ সংখ্যাটা রাখে, দশমিক বাদ দিয়ে দেয়
// মানে দশমিক বাদ → 12.9 → 12

// console.log(Math.abs(-12)); // 12
// 🔹 Math.abs() → Absolute value দেয় (ঋণাত্মক হলে সেটাকে পজিটিভ করে দেয়)
// -12 → 12, 5 → 5

// console.log(Math.pow(2,5)); // 32
// 🔹 Math.pow(x, y) → x কে y বারের জন্য গুনে
// অর্থাৎ 2^5 → 2*2*2*2*2 = 32

// console.log(Math.sqrt(25)); // 5
// 🔹 Math.sqrt() → কোনো সংখ্যার বর্গমূল (square root) বের করে
// যেমন √25 = 5

// console.log(Math.max(25, 56, 78)); // 78
// 🔹 Math.max() → যেকোনো সংখ্যার মধ্যে সবচেয়ে বড়টা রিটার্ন করে

// console.log(Math.min(25, 56, 78)); // 25
// 🔹 Math.min() → যেকোনো সংখ্যার মধ্যে সবচেয়ে ছোটটা রিটার্ন করে

// Question 1 (Make a 4 digit otp --> hint(with the help of math function))

// console.log(Math.floor((Math.random()*9000)+1000));

// Math.random() → 0 থেকে 1 এর মাঝখানে যেকোনো দশমিক সংখ্যা দেবে (0 বাদে, 1 বাদে)

// Math.random() * 9000 → এটা 0 থেকে 8999 এর মাঝখানে যেকোনো দশমিক সংখ্যা দেবে

// + 1000 → এখন সেটা 1000 থেকে 9999 এর মাঝে চলে যাবে (৪ digit এর মধ্যে)

// Math.floor(...) → দশমিক বাদ দিয়ে নিচের পূর্ণসংখ্যা নিয়ে নিচ্ছে
