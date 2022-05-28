let num = 266219;
let sum = 1;
let result;
let myStr = String(num);
let lengthStr = (myStr.length);

for (i = 0; i <= lengthStr - 1; i++) {
   sum *= Number(myStr[i]);
}
console.log(sum);

result = sum ** 3;
console.log(result);

result = String(result);

result = result.substring(0, 2);
console.log(Number(result));