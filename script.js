let arr = ["48", "23", "37", "25", "77", "43", "68"]

const findNumber = function (num) {
   if (num[0] == 2 || num[0] == 4) {
      console.log(num)
   }
}

for (let i = 0; i < 7; i++) {
   findNumber(arr[i])
}

console.log("-------- Простые числа от 1 до 100 --------")

function isPrime(num) {
   if (num < 2) {
      return false
   }
   for (let i = 2; i < num; i++) {
      if (num % i == 0)
         return false
   }
   return true
}

for (let i = 1; i <= 100; i++) {
   if (isPrime(i)) {
      console.log(i + " Делители этого числа: 1 и " + i)
   }
}