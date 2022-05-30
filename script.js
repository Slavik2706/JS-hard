'use strict';

let lang = "en";

if (lang == "ru") {
   console.log("Понедельник");
   console.log("Вторник");
   console.log("Среда");
   console.log("Четверг");
   console.log("Пятница");
   console.log("Суббота");
   console.log("Воскресенье");
} else if (lang == "en") {
   console.log("Monday");
   console.log("Tuesday");
   console.log("Wednes­day");
   console.log("Thursday");
   console.log("Friday");
   console.log("Saturday");
   console.log("Sunday");
}
console.log("-----------------------------");
switch (lang) {
   case "ru":
      console.log("Понедельник");
      console.log("Вторник");
      console.log("Среда");
      console.log("Четверг");
      console.log("Пятница");
      console.log("Суббота");
      console.log("Воскресенье");
      break;
   case "en":
      console.log("Monday");
      console.log("Tuesday");
      console.log("Wednes­day");
      console.log("Thursday");
      console.log("Friday");
      console.log("Saturday");
      console.log("Sunday");
      break;
}
console.log("-----------------------------");
let arr = [
   ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
   ["Monday", "Tuesday", "Wednes­day", "Thursday", "Friday", "Saturday", "Sunday"]
];

for (let i = 0; i < 7; i++) {
   console.log(arr[0][i]);
}
console.log("-----------------------------");
for (let i = 0; i < 7; i++) {
   console.log(arr[1][i]);
}
console.log("-----------------------------");
let namePerson = "Артем";

if (namePerson == "Артем") console.log("директор");
else if (namePerson == "Александр") console.log("преподаватель");
else console.log("студент");
console.log("-----------------------------");
namePerson == "Артем" ? console.log("директор") : namePerson == "Александр" ? console.log("преподаватель") : console.log("студент");

