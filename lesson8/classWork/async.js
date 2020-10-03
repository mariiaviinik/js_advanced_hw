/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/
async function objList(){
  let inf = await fetch('http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2');
  let obj = inf.json();
  return obj;
};

let table = document.createElement('div');
table.classList.add('table');

let tableCreate = (res) => {
  res.forEach(obj => {
    let {_id, company, balance, registered, address} = obj,
    cells = {_id, company, balance, registered, address},
    row = document.createElement('div'),
    col = [],
    i=0;
    for(key in cells){
      let adress = '';
      col[i] = document.createElement('div');
      if(key=='address'){
        for(key in address){
          adress += `${key}:${address[key]}, `;
        }
        col[i].innerText = ' | '+ adress;
      } else{
        col[i].innerText = ' | '+ cells[key];
      }
      i++;  
    }
    col.forEach(el => {
      row.appendChild(el);
    });
    table.appendChild(row);
  });
  document.documentElement.appendChild(table);
};

objList()
.then(res => {
  tableCreate(res);
});