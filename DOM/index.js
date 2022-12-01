
/*Для работы с DOM (объектная модель документа) элементами на странице в JavaScript есть удобные методы, которые позволяют получать и далее манипулировать ими. Еще недавно активно использовалось 4 метода с помощью которых можно добраться до элементов:

getElementsByClassName() - по именам классов;
getElementsByTagName() - по имени тега;
getElementsByName() - по значению атрибута name;
getElementById() - по идентификатору (id) элемента.
Сегодня все эти методы заменили:

querySelector()
querySelectorAll()
querySelector()
querySelector() - это document метод, который возвращает первый элемент, соответствующий указанному селектору или группе селекторов. Если поиск не увенчался успехом возвращается значение null.

Синтаксис
    
    let element = document.querySelector(selectors);*/

//----------------------------------------------------------------------------------------СОЗДАНИЕ УЗЛА header -------------------------------------------------------------------------------

const headerFirst = document.createElement("header");//создали элемент header
document.body.append(headerFirst);

//-----------------------------------------------------------------------------------------СОЗДАНИЕ УЗЛА div   --------------------------------------------------------------------------
const div =  document.createElement("div");//создали элемент div
 div.className="container";  //добавили класс
 headerFirst.append(div);//положили div внутрь const headerFirst
div.textContent="Текст внутри";  //добавили текст внутрь div
console.log(headerFirst);

// ----------------------------------------------------------------------------------------СОЗДАНИЕ INPUT----------------------------------------------------------------------------------------

const input =document.createElement("input");//создали 
div.append(input); //положили внутрь const div

//------------------------------------------------------------------------------------------СПИСОК ЭЛЕМЕНТОВ ------------------------------------------------------------------------

const elementsUl = document.createElement("ul");//создали
elementsUl.className="list";//присвоили класс
elementsUl.innerHTML="<li>Список 1 </li> <li>Список 2 </li> <li>Список 3 </li>";// поместили  содержимое внутрь  const elementsUl 
input.after(elementsUl); //поместили содержимое после узла  const input 


//-------------------------------------------------------------------------------------------ИЩЕМ ЭЛЕМЕНТ по индексу и присваиваем ему класс со стилями --------------------------------------------------------------------

    
    
    let showLi = document.querySelectorAll("li");  //нашли все li
    let liOneIndex=showLi[1];  // присвоили li с индексом [1] в переменную liOneIndex
    liOneIndex.className="color";  //задали класс liOneIndex 
    liOneIndex.style.background ="red";//задали background liOneIndex

    
    console.log(showLi);
    console.log(liOneIndex);