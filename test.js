// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if (maxLength > message.maxLength ){
//   result = message;
// } else {
//   result = message.maxLength + "..."
// }
//   /// Change code above this line
//   return result;
// }
// Task 2

// В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа
// попадает это число (в первую, вторую, третью или четвертую).
// let min = 18;
// const time = 40;
// switch (true) {
//   case time <= 15:
//     console.log("Первая четверть");
//     break;
//     case  time <=30 :
//     console.log("Вторая четверть");
//     break;
//     case  time <=45 :
//     console.log("Третья четверть");
//     break;
//     case  time <=59 :
//     console.log("Четвёртая четверть");
//     break;
//   default:
//     console.log("Вы за гранью времени")
// }

// Task 8
// Повторять цикл, пока ввод неверен
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
// либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку
// нечисловых строк в этой задаче необязательно.

// let total = 0;
// while (true) {
//   const number = prompt("введите сило больше 100")
//   if (number === null) {
//     break;
//   }
//   if (!Number.isNaN(number)) {
//     alert("string")
//   }
// }

// let total = 0;

// while (true) {

//   const number = prompt("Let me a number bigger than 100");
  
//     if (number === null) {
//         alert(total);
//         break;
//     }

//     if (!Number.isNaN(number)) {
//         alert("string")
//     }
//     total += Number(number);
// }
// let res = 0;

// while (true) {
//   const num = prompt("Vvedi chislo bolshe 100");
//   if (num === null) {
//     alert(`summa ${res}`);
//     break;
//   }
//   if (+num < 100) {
//     alert("vvedi bolshe 100");
//   }
//   if (+num > 100) {
//     res += +num;
//   }
//   if (Number.isNaN(+num)) {
//     alert("vi vveli ne chislo");
//   }
// }


// function getExtremeElements(array) {
//   // Change code below this line
// // const lastElement = array.length -1;
// // const array1 = array1[array[0],array[-1]];
//     // const firstElement = ;
    
// //    console.log(array[firstElement,array1])

//   // Change code above this line
//     console.log(array[0]);
// }
// const el = [1, 2, 3, 4, 5,33];
// arr = el.slice(-1);
// arr1 = el.slice(0, 1);
// arry = el.splice(1,el.length -2)
// console.log(el);


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// const space = message.split(" ");
// const spaceIn = space.length -1;
// const price = spaceIn * pricePerWord
// console.log(price, "ценник");
// console.log(space,'массив');
// console.log(space.length,'пробелы');
//    // Change code above this line
// }
// function Arfin(numbers, value) {
//    // Change code below this line
//    let newArray = []
//    for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) {
//          newArray.push(numbers[i]);
//          // return newArray;
//       }
//    }
//    console.log(newArray,"вывод того что надо")
// }
  // Change code above this line
// function calculateTotal(number) {
//    prompt(number);
// let sumNumbers = 0;
// for (let i = 0 ; i <= number; i +=  1 ){
   
//    sumNumbers += i
   
//    }
//    console.log(sumNumbers);
//    return sumNumbers;
// }

// function slugify(title) {
//   // Change code below this line
//    slug = title.toLowerCase().replaceAll(' ','-');
//   // Change code above this line
//    return slug;
// }

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(2);
// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)




// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//    newArray = firstArray.concat(secondArray);
//    newArray1 = newArray.slice(0, maxLength)
//    console.log(newArray1)
//     // Change code above this line
// }



// function calculateTotalPrice(order) {
//    let total = 0;
//   // Change code below this line
// for (let i = 0 ; i < order.length; i +=  1 ){
//    // total += order[i];
//    total += order[i];
//    }
//   // Change code above this line
//    return total;
// }



// findLongestWord("The quick brown fox jumped over the lazy dog")
// function findLongestWord(string) {
//   // Change code below this line
//      string = string.split(" ")
//    let firstWorld = string[0];
//    let longWorlds="";
// for (let i = 0 ; i < string.length; i +=  1 ){
//    if (string[i].length > longWorlds.length) {
//        longWorlds = string[i];
//    }
//    }
//   // Change code above this line
//    return longWorlds;


//   // Change code above this line
// }



// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
//   // Change code below this line

// for (let i = min; i <= max; i +=1){
// numbers.push(i);
// }
//   // Change code above this line
//   // return numbers;
// }



// function filterArray(numbers, value) {
//    // Change code below this line
//   const num = [];
//   for (let i = 0; i <= numbers.length; i += 1){
//     if (numbers[i] > value) {
//       num.push(numbers[i]);
//     }
//   }
//   return num;
//   console.log(num)
//   // Change code above this line
// }


// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const element = [];
//   for (let i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       element.push(array1[i]);
//     }
//   }
//   console.log(element);
//   return;
  
//  // Change code above this line
// }








