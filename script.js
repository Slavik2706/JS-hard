let str = prompt("Введите строку");

function getNewString(variable) {
   if (typeof variable === "string") {
      variable = variable.trim();
      if (variable.length >= 30) {
         variable = variable.substring(0, 30) + "...";
      }
      alert(variable);
   } else {
      alert("Переданное значение не является строкой");
   }
}

getNewString(str);