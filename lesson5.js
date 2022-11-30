

const getDigitsSum =(num) =>{
   
    const str = String(num);
     let result =0;

     for(i=0;i<str.length; i+=1){
      result += +str[i];
     }

   return result;

  };
  console.log(getDigitsSum(123));



const filterYears = () => {
    const result = [];
    for (let i = 1; i < 2020; i += 1) {
      if (getDigitsSum(i) === 13) {
        result.push(i);
      }
    }
  
    return result;
  };
  
  console.log(filterYears());


const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };
  
  console.log(isEven(7));
  console.log(isEven(12));

//13

/*const filterArr = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (isEven(arr[i])) {
        result.push(arr[i]);
      }
    }
  
    return result;
  };
  
  console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));*/

//15
/* const lessNine = (num) => {
    console.log(`Функция lessNine вызванна с параметром ${num}`);
    if (getDigitsSum(num) > 9) {
      return lessNine(getDigitsSum(num));
    }
    return getDigitsSum(num);
  };
  
  console.log(lessNine(156957565523));*/

/* const key = "firstName";

const person = {
  [key]: "Alex",
};

person.age = 56;

person["city-name"] = "NN";

person[4] = 4;

// console.log(person.firstName);
// console.log(person["city-name"]);

// console.log(person.age);

person.age = 26;

// console.log(person.age);

// console.log(person.height);
// person.height = 193;
// console.log(person.height);

// delete person.age;
// console.log(person.age);

const sayHello = function () {
  console.log("Привет я ALEX");
};

person.sayHello = sayHello;

person.sayHello();*/

/*const isUpperCase = (str, i) => {
    if (i > str.length) {
      return "ОШИБКА ТАКОГО ИНДЕКСА НЕТ";
    }
    if (str[i] === str[i].toUpperCase()) {
      return true;
    }
    return false;
  };
  
  console.log(isUpperCase("AbcdEGRT", 6));
  console.log(isUpperCase("FFFFJdddv", 6));
  console.log(isUpperCase("asdfvnfhEDFFDFD", 90));*/

/*let user = {
  sayName:function(age,name="Dmitry"){
  console.log(`${age}  ${name} `);
  },

 
 weight:"bold",
 height:124
 };
 
 user.sayName(12,"Alex")*/

/*let sayHello = (name)=>{
console.log(`Hello ${name}`);
return "34 age"
 };

console.log(sayHello("Dmitry"));

let call = (callback)=>{
for(i=0;i<1000000000; i += 1){
 
}

console.log(`Привет ${callback}`);


};
console.log(call("Alex"));*/

/*let sayHello=(name)=>{
  console.log(`Hello ${name}`);
  return "34 age" ;
};
console.log(sayHello("Dmitry"));


let call= (callback)=>{
for(i=0;i<1000000000;i+=1){

}
callback("Anya");
};

call(sayHello);*/

/*let resultFive = [];
let resultSix = [];

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 let massiv = (get) => {
  for (i = 0; i < get.length; i += 1) {
    console.log(`${i} : ${get}`);

    if (get[i] === 5) {

      resultFive.push(get[i]);

    } else if (get[i] === 6) {

      resultSix.push(get[i]);
    }
    
  }
  
};
 massiv(arr);
console.log(resultFive);
console.log(resultSix);


let showThree = [];
  let showTwo = [];

  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  let creatNewMassiv = (num) => {
    for (i = 0; i < num.length; i += 1) {
      console.log(`${i}: ${num}`);

      if (num[i] === 3) {
        showThree.push(num[i]);
      } else if (num[i] === 2) {
        showTwo.push(num[i]);
      }
    }
  };
  creatNewMassiv(arr);
  console.log(showThree);
  console.log(showTwo);*/


  


  
  


