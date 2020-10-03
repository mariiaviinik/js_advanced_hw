async function objList(url){
  let inf = await fetch(url);
  let obj = inf.json();
  return obj;
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let randomPerson = (res) => {
  let i = 0;
  let arrOfPerson = [];
  res.forEach(el => {
    arrOfPerson[i] = el.employers[getRandom(0, Object.keys(el.employers).length)];
    i++;
  });
  return arrOfPerson;
}

async function addFriends(res, arr){
  res.forEach(el => {
    el.friends = arr[0].friends;
  });
  return res;
}

let table = document.createElement('div');
let tableCreate = (res) => {
  res.forEach(obj => {
    row = document.createElement('div'),
    col = [],
    i=0;
    for(key in obj){
      col[i] = document.createElement('div');
      let friendsStr = '';
      if(key=='friends'){
        obj[key].forEach(friend => {
          for(var key in friend){
            friendsStr += `${key}: ${friend[key]}; `;
          }
        });
        col[i].innerText = 'friends: '+ friendsStr;
      } else{
        col[i].innerText = key + ': ' +obj[key];
      }
      i++;  
    }
    col.forEach(el => {
      row.appendChild(el);
    });
    table.innerHTML += `<p>`;
    table.appendChild(row);
  });
  document.documentElement.appendChild(table);
};

objList('http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2')
.then(res => {
  console.log(res);
  return randomPerson(res);
  
})
.then(res1 => {
  objList('http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2')
  .then(res2 => {
    addFriends(res1, res2)
    .then(res3 => {
      tableCreate(res3);
    })
  })
})

/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      return fetch()
  //       .then( friendsResponse)
  //       .then()
  //   })
  //   .then( func)
