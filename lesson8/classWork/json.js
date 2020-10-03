let firstFEl = document.forms.form1.elements,
secondFEl = document.forms.form2.elements;

btn1.addEventListener('click',()=>{
  event.preventDefault();
  let name=firstFEl.name.value,
  age=firstFEl.age.value,
  password=firstFEl.password.value;
  let obj = {
    name:name,
    age:age,
    password:password.replace(/./g,'*')
  };
  jsonStr = JSON.stringify(obj);
  console.log(jsonStr);
});

btn2.addEventListener('click',()=>{
  event.preventDefault();
  let str=secondFEl[0].value;
  console.log(JSON.parse(str));
});
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'


*/
