/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/
function random (min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function changeColor()
  {
    let colors = [];
    for(var i=0;i<3;i++)
    {
        colors[i]=random(1,255).toString(16);
    }
    return "#" + colors[0] + colors[1] + colors[2];
  }

  let btn = document.createElement('button');
  btn.innerText = 'click';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    localStorage.setItem('color', changeColor());
    document.body.style.background = localStorage.getItem('color');
    console.log(localStorage.getItem('color'));
  });
