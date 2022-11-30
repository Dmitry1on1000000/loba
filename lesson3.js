// const name = "Alex3";

// if (name === "Ivan") {
//   console.log(`Привет ${name}`);
// } else if (name === "Alex") {
//   console.log(`Привет друг ${name}`);
// } else if (name === "Petr") {
//   console.log(`Hi ${name}`);
// } else {
//   console.log("Привет Незнакомец");
// }
//   Тернарный оператор
// const userName = "Дмитрий";
// const result =userName =="Дмитрий" ? "Hello Дмитрий" :"Hello user";
// console.log(result);


// Задача №1 

// const a = 1;
// const b = 20;
// const c = 3;

// if (a < b) {
//   b < c ? console.log("C самый большой") : console.log("B самый большой");
// } else {
//   a < c ? console.log("C самый большой") : console.log("A самый большой");
// }


// if (a < b) {
//     if (b < c) {
//       console.log("C самый большой");
//     } else {
//       console.log("B самый большой");
//     }
//   } else {
//     if (a < c) {
//       console.log("C самый большой");
//     } else {
//       console.log("A самый большой");
//     }
//   }

// задача 2 

// const userRole = "manager";

// switch (userRole) {
//   case "admin":
//     console.log("Это админ, и он любит чай");
//     break;

//   case "user":
//     console.log("Это юзер, и он любит колу");
//     break;

//   case "manager":
//     console.log("Это manager, и он любит кофе");
//     break;
// }

//  логическое   сравнение 
//   const a = 4;
//   const b = 2;
//   const c = 1;

//   if (a < b && b < c) {
//     console.log("C самый большой");
//  } else if (a < b && b > c) {
//    console.log("B самый большой");
//  } else if (a < c) {
//     console.log("C самый большой");
//      } else {
//    console.log("A самый большой");
//   }
  

 /*const a =3000;
 const b =200;
 const c =444;
 const D =1000;
 if (D > a && D > b &&  D > c) {
          console.log("D самый большой");
      } else if (b > a && b > c && b > D) {
        console.log("b самый большой");
      } else if (c > a && c > b && c > D) {
         console.log("C самый большой");
           } else {
         console.log("A самый большой");
        }*/

 
/*const temp = -30;

if (temp <= -30) {
  console.log("оставайся дома");
} else if (temp > -30 && temp <= -10) {
  console.log("сегодня холодно");
} else if (temp > -10 && temp <= 5) {
  console.log("не холодно");
} else if (temp > 5 && temp <= 15) {
  console.log("тепло");
} else if (temp > 15 && temp <= 25) {
  console.log("очень тепло");
} else if (temp > 25 && temp < 35) {
  console.log("жарко");
} else {
  console.log("пекло");
}*/




/*i+=1 то же самое, что и i++ 

const arr = [1, 3, 5, 6, 9, 12, 14, 16, 17, 18, 21, 25, 65, 37];

const result = [];

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] % 2 === 0) {
    result.push(arr[i]);
  }
}
console.log(result);*/


// const text = "My text";

// const count = 56;

// for (let i = 0; i < count; i += 1) {
//   console.log(text);
// }






 /*let N = 100;
 const M = 10;
 let i = 0;

 while (M < N) {
   N = N / 2;
   i += 1;
}

 console.log(i);*/

 

// let n = 0;
// for (i = 1800; i < 2022; i++) {
//     n += 1;
//     if (i === 1961) {
//         console.log(`${n} раз понадобилось чтобы получить ${i} год`);
//     }

//     // if (i % 4 === 0) {
//     //     console.log(`${i} - високосный год`);
//     // }
// }


// let count = 0;

// for (let i = 1800; i < 2022; i += 1) {
//   if (i % 4 === 0) {
//     count += 1;
//   }
// }

// console.log(count);