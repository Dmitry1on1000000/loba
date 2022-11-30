// find();-от агл находить находит элемент

/*let arr =[1,2,3,4];
    let findElem =arr.find((e)=> e===3);
    console.log(findElem);*/

/*const names =[{name:"Alex"},{name:"Ivan"},{name:"Tony"}];
  const findElem = names.find((el)=> el.name ==="Ivan");
  console.log(findElem);*/

//  filter(); -от англ фильтер , создаёт новый массив фильтруя старый



 /*const names = [{ name: "0lEx" }, { name: "dmitry" }, { name: "tania" }];
console.log(names);


 const filter = names.filter((el)=>{
 if(el.name[2] === el.name[2].toUpperCase()){
   return true;
 }
   return false;
 });

//  console.log(filter);
                // более короткая запись 


  const filterone = names.filter((el)=>el.name[2]===el.name[2].toUpperCase());
 console.log(filterone);/*





                                                    // MAP

/*
const names = [{ name: "Alex" }, { name: "Ivan" }, { name: "Tony" }];
 const mapArr= names.map((el)=> ({name: el.name,handCout:2}));
 console.log(mapArr);*/


                                                  //  forEach

  /*const names = [{ name: "Alex" }, { name: "Ivan" }, { name: "Tony" }];
console.log(names);
const forEach = names.forEach((el) => (el.name="Alex"));

console.log(forEach);
console.log(names);*/





    // reduce()


    /*
const arr=[1,-2,5,-6,9,-8,5];

const result =arr.reduce((prev,cur)=>{

if(cur>0){
return prev+cur

}

else{

    return  prev;
}

} );
console.log(result);*/

 /*const positiveEvenSum =(arr)=>{
    const result = arr.reduce((start,current)=>{
    if(current%2===0 && current>0){
    return start+current;
    }

    return start;

    });

    return result;
    };
console.log(positiveEvenSum([10,10,10,-5]));*/


    // или

   /* const positiveEvenSum =(arr)=>
     arr.reduce((start,current)=>{
    if(current%2===0 && current>0){
    return start+current;
    }

    return start;

    });

    
console.log(positiveEvenSum([10,10,10,-5]));*/


    //  или такая  запись

    /*const positiveEvenSum =(arr)=>arr.filter((el)=> el %2===0 && el>0).reduce((start,current)=>start+current)
    console.log(positiveEvenSum([1,-2,5,4,2]));*/


    /*const positiveEvenSum =(arr)=>arr.reduce((start,current)=> current %2===0 && current>0 && start+current   );
    console.log(positiveEvenSum([1,3,5,4,4,2]));*/


                        // вариант 1 
    /*const array=[1,2,1,3,4,5,2,3];


    function uniqArrItem(itemArray) {

     const result =[];

        for(i=0; i<itemArray.length ; i +=1){

          if(!result.includes(itemArray[i])){

          result.push(itemArray[i]);
        }

        }
        return result;
    };
       const unicResult=uniqArrItem([1,2,1,3,4,5,2,3]);
       console.log(unicResult);*/

                        //  вариант 1.1 короткий




    
     /*const uniqArrItem =(arr)=>
    arr.filter((el,i,array)=> !array.includes(el,i+1));
    
    console.log(uniqArrItem([1,2,1,3,4,5,2,3]));*/



    
     /*     //  Как превести многомерный массив в один ?


    const multiArr=[1,2,[3,4,5,[6,7,8]],9,10,[11,12,[13,14,[15]]]];
    const firstTry=(arr)=>arr.toString().split(",").map((el)=>+el);
    console.log(firstTry(multiArr));


                        // ВАРИАНТ № 2

    const secondTry=(arr)=>arr.flat(Infinity);
    console.log(secondTry(multiArr));*/

                    // КОПИРОАНИЕ ОБЬЕКТОВ

            // Object.assign();

 /* let user={name:"Alex",car:"rio"};
  // let user2=Object.assign({age:353},user,{city:"London"});
    const user2={...user,age:500,city:"NN"};// пример spread
  console.log(user);
  console.log(user2);*/
                                  

    
                //  ОПЕРАТОР РАСШИРЕНИЯ SPREAD 
/*const arr= [1,2,3];

const arr2=[...arr];

arr.push(4);


console.log(arr);
console.log(arr2);*/

  //  ОПЕРАТОР SPREAD   ДЛЯ РАБОТЫ ВНУТРИ ФУНКЦИИ

/*const array=[1,2,3,4];

const arrPush=(arr)=>{
const arrNew =[...arr];
arrNew.push(5,6,7);
console.log(arrNew);
return array;

};
console.log(arrPush(array));*/


               // глубокая копия
/*
JSON.parse(); // ИЗ STRING В OBJECT
JSON.stringify(); // ИЗ  OBJECT В STRING
*/

/*
const user={name:"Alex", age:18};

const user2=JSON.parse((JSON.stringify(user)))
// console.log(JSON.stringify(user),user)

user.name ="Ivan";
user2.age=20;
console.log(user,user2);*/

                              // ОПЕРАТОР REST


/*
const infinitySum=(a,b, ...arg)=>{
return a+ b + arg.reduce((prev,cur)=>prev+cur,0)
};
console.log(infinitySum(2,2,5,5,5));*/



/*const user={name:"Alex", age:18, city:"London"};

 const userName = user.name;  // вариант №1
 const userAge= user.age;
 console.log(userName,"userName",userAge);

 const {name,...restParams}=user;

 console.log(name,"name");
 console.log(restParams,"restParams");*/


            
 
 // FOR(...Of ...) для МАССИВОВ и проходится по значениям 
 // FOR(...in ...) для Обьектов и проходится по ключам 

/*const arr =["Ivan","Alex","Tony"];
const obj={name:"Alex",age:18};

 for ( let value in obj){

 console.log(obj[value]);
};*/

/*for ( let i in arr){
                        //  вариант for in для массива 
 console.log(arr[i]);*/







/*const arraySum=(arr)=>{
let result=0;
for(let value of arr){
  result +=value;
}

return result;
};

console.log(arraySum([1,2,3]));*/

                     
// Напишите код, который получает из массива чисел новый
// массив, содержащий пары чисел, которые в сумме должны
// быть равны семи: (0:7), (1:6) и т.д.


