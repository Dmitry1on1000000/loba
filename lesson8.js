// ЗАМЫКАНИЕ------------------

/*const user = (name) => {
  return (age, weight) => {
    return`${name} ${age + weight} `;
  };
};

const first = user("Dmitry");

console.log(first(30, 30));
console.log(first(40, 40));*/

// КАРРИРОВАНИЕ----------------

// const cubeValue = (a,b,c) => a+b+c;
// console.log(cubeValue(1,2,3));

/*
const cubeValue = (a)=>(b)=>(c)=> a+b+c;


console.log(cubeValue(2) (2) (2) );

const cubeValueNew = cubeValue(3) (3);
console.log(cubeValueNew(3));
console.log(cubeValueNew(4));
console.log(cubeValueNew(5));*/

// Вызов askPassword() в приведённом ниже коде должен
// проверить пароль и затем вызвать user.loginOk/loginFail в
// зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?

/*function askPasword(ok, fail) {
  let password = prompt("Password ?", "");
  if (password == "12345") {
    ok();
  } else {
    fail();
  }
}
let user = {
  name: "Вася",
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};
askPasword(user.loginOk.bind(user), user.loginFail.bind(user));*/

// Объект user был изменён. Теперь вместо двух функций
// loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде
// ниже, чтобы она могла вызывать функцию user.login(true) как
// ok и функцию user.login(false) как fail?

/*function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "12345") {ok()}
    
    else {
        fail()
    }



    }
    let user = {
    name: 'John',
    login(result) {
    alert( this.name + (result ? ' logged in  (Залогинился)' : ' failed to log in (Не зарегестрирован )') );
    }
    };
    askPassword(user.login.bind(user,true), user.login.bind(user,false));*/

// PROTOTYPE -------------------

/*const obj={
    city:"London",

};

const russian = {
    country:"Russian",
    city:"NN",
     __proto__:null,
    
    };

const people = {
  name: "Alex",
  age: 26,
  __proto__:russian,
  
};


console.log(people.city,people);*/

//-------------------------------------------------------------------------- ФУНКЦИЯ КОНСТРУКТОР-------------------------------------------------------------

 /*function CreateUser(userName, userAge) {
  this.name = userName;
  this.age = userAge;
  this.sayHi=function () {
    console.log(`Привет,меня зовут ${this.name}`);
  }
}


CreateUser.prototype.sayAge = function () {
    console.log(`Мне ${this.age}`);
};



const firstUser = new CreateUser("Alex",33);
const secondUser = new CreateUser("Tony",23);
const thirdUser = new CreateUser("Lena",53);
console.log(firstUser);
console.log(secondUser);
console.log(thirdUser);

secondUser.sayHi();
secondUser.sayAge();*/





// --------------------------ПРАКТИКА метод bind ,  использование __proto__ , функции конструктора  --------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*const person = {
  name: "Dmitry",
  serName: "Kurevin",
  country: "Russia",

  showName: function () {
    console.log(`Имя ${this.name}`);
    return this.name;
  },

  chengeName: function (key, value) {
    this[key] = value;
  },
};
person.showName();
person.chengeName("name", "Alex");
person.showName();

const car = {
  brand: "Kia",
  color: "silver",
  speed: "200 km/h",
  price: "500 000 рублей",

  sayHallo: function (phrase, smile) {
    console.log(
      `${this.name} у тебя есть машина ${this.brand} , ${this.color} цвета ? ${phrase}  ${smile}`
    );
  },
  __proto__: person,
};
console.log(car);

const cartwo = car.sayHallo.bind(car, "ФРАЗА", "СМАЙЛ))))");
cartwo();
car.sayHallo.bind(car, "ФРАЗА", "СМАЙЛ))))");

const peopleOne = {
  name: "Ivan",
  surName: "Zhukov",
};
const peopleTwo = {
  name: "Mark",
  surName: "Lionov",
};

function greetings(phrase, smile) {
  console.log(`${this.name}  ${this.surName} : ${phrase} : ${smile}`);
}

function Constructor(brend, color, price) {
  this.BREND = brend;
  this.COLOR = color;
  (this.PRICE = price),
    (this.sayHi = function () {
      console.log(`Марка машины  ${this.BREND}`);
    });
}

Constructor.prototype.showPrice = function () {
  //ПОЛОЖИЛИ В prototype функцию showPrice
  console.log(`Моя цена  ${this.PRICE}`);
};

const firstCar = new Constructor("rio", "red", "540 000"); //    создали функцию конструктор и положили её в пременную

firstCar.sayHi();
firstCar.showPrice();

const secondCar = new Constructor("NISAN", "white", "740 000"); //    создали функцию конструктор  С НОВЫМИ АРГУМЕНТАМИ  и положили её в пременную

secondCar.sayHi();
secondCar.showPrice();*/

//CLASS!!!!!!!!!!!!!!!!!_____________________________---------------------'

/*Создайте класс People, он должен содержать свойства  name (имя), surname 
(фамилия) и метод getFullName() (возвращает полное имя человека). Создайте класс 
Worker который будет наследоваться от класса People. Класс Worker должен 
содержать свойства name, surname унаследованные от родительского класса, и 
свойства rate (ставка по которой происходит оплата руб/день), day (количество 
отработанных дней) и метод getSalary() (возвращает заработную плату сотрудника).
Создать несколько экземпляров класса Worker с различными данными и проверить 
корректность работы.*/

/*class People {
   constructor(name,surName){
    this.NAME=name;
    this.SURNAME=surName;
  }
   
  getFullName(){
    return `${this.NAME} ${this.SURNAME}`;
  }

};
//  const FirstPeople= new People("Dmitry","Petrov");
//  console.log(FirstPeople);

// console.log(FirstPeople.getFullName());

 class Worker extends People {
  constructor(name,surName,rate,day){
    super(name,surName);
    this.RATE=rate;
    this.DAY=day;
  }

  getSalary(){
   return `${this.getFullName()} получил  ${this.RATE *  this.DAY}`
  }

};

 const firstWorker= new Worker ("Dmitry","Petrov",500,20);
 const secondWorker= new Worker ("Alex","Ivanov",100,10);



console.log(firstWorker.getFullName());
console.log(firstWorker.getSalary());


console.log(secondWorker.getFullName());
console.log(secondWorker.getSalary());*/


 
//-------setTimeout--------
 
/*function sayHi(phrase, who) {
  alert( `${phrase} ${ who}` );
}

 

setTimeout(()=>sayHi("Привет", "Джон"), 1000);*/