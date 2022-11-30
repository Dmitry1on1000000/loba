
/*function example(){
    console.log(this,"THIS теперь тут");
}

const testObject={
    testMethod:example
};

const exampleObj={

    exampleMethod:example,
    exampleValue:"@333"
};
example();
testObject.testMethod();
exampleObj.exampleMethod();

const persona = {
     name: "Alex",
      age: "26",
    getName: function(){
        console.log(this.name);
    }

    };
persona.getName();*/


/*
Создать объект который будет описывать любой населенный пункт (на ваш выбор). 
Объект должен содержать свойства описывающие: название и численность. Так же 
объект должен содержать два метода: первый должен возвращать название города, а 
второй должен возвращать численность. 
*Дополнительно, добавить метод, который будет устанавливать новое значение для 
выбранного свойства из объекта описывающего город.




























const town={
    name:"Moscow",
    population:"25 mln",
    getName : function(){
         console.log(this.name);
        return this.name;
    },
    getPopulation: function () {
         console.log(this.population);
        return this. population;
    },

    setAnyValue:function (key,value) {
        this[key]=value;
    },
};

  town.getName();
    // town.getName();
    town.setAnyValue("name","London");
    town.getName();
    console.log(town);*/
 
                    //   практика сам 

   /* const user ={
        name: "Dmitry",
        serName: "Kurevin",
        currentWeight: "87 кг",
        showName: function () {
             console.log(this.name);
            return this.name;
        },

        showserName: function () {
            console.log( this.serName);
            return this.serName;
        },

        changesName: function (key,value) {
           
            this[key]=value;
            
        }

        



    };
   user.showName();
  user.changesName("name","Alex");
  user.showName();*/



                       //   РАБОТА С КОНТЕКСТОМ ВЫЗОВА



                    //    Использование call / apply

/*const person={
    name:"Vasya",
    surName:"Ivanov"
};

const person2={

    name:"Petya",
    surName:"Semenov"
};

const person3={

    name:"Dmitry"
    
};




function greetings (phrase,smile){
    console.log(`${this.name}  ${this.surName} : ${phrase} : ${smile}`);
};

greetings.call(person,"Привет","***");
greetings.call(person2,"Привет","***");
greetings.call(person3,"Привет","***");
greetings.call(person,"Привет","***");


greetings.call(person2,"Hello","*66*");
 greetings.apply(person3,["Привет","*-0-*"]); // тоже самое только метод apply


//  Использование bind удобнее чем 
   const town={
    cyty:"Bor",
    population:"70"

  };

const country={
    cyty:"Moscow",
    population:"5 mln",
    hauseColor:"red",

    showHauseColor: function () {
        console.log(`показали цвет  ${this.hauseColor}`);
        return this.hauseColor;
    },

    changeColor:function (key,value) {
        console.log(`поменяли цвет ${this.hauseColor}`);
        this[key]=value;
    }
};
country.showHauseColor();
country. changeColor("hauseColor","black");
country.showHauseColor();
console.log(country);

function user(name,age) {
    console.log(`Данные  ${this.cyty} , ${this.population} ,${name},${age} `);
};

 const user2=user.bind(town,"Alex",33);
 user2();



const greetingUser1 = greetings.bind(user1,"ПРИВЕЕЕТ!", "##############");
greetingUser1();*/







  











// Создайте второй объект описывающий город (первый возьмите из решения задачи 
//     №1). Второй объект должен содержать только свойства названия и численность.
//     ● Используя метод call() / apply() вызовите методы объекта первого города в 
//     контексте объекта второго города.
//     ● Используя метод bind(), изменить свойства объекта второго города на 
//     произвольные значения.


/*const town={
    name:"Moscow",
    population:"5 mln",
    showName:function () {
        console.log(this.name);
        return this.name;
    },
    showPopulation:function () {
        console.log(this.population);
        return this.population
    },

    changesName:function (key,value) {
        this[key]=value;
    }
};

town.showName();
town. showPopulation();
 console.log(town);
 town.changesName("name","London");
 console.log(town);


const townTwo={
     name:"Paris",
     population:"10 mln",
 };*/

//  town.showName();
//  town.showPopulation();

/*town.showName.call(townTwo);
town.showPopulation.call(townTwo);*/

//  const bount=town.showPopulation.bind(town);
//  bount();

 