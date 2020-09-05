function getRandomIntInclusive(max)
{
    return Math.floor(Math.random()*max);
}

function changeColor()
{
    for(var i=0;i<3;i++)
    {
        var colors = [];
        colors[i]=getRandomIntInclusive(256).toString(16);
    }
    div.style.background = "#" + colors[0] + colors[1] + colors[2];
    // for(var i=0;i<3;i++)
    // {
    //     color[i]=getRandomIntInclusive(256);
    // }
    // div.style.background = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
}

var button = document.createElement("button");
var div = document.createElement("div");

div.style.position = "absolute";
div.style.boxSizing = "border-box";
div.style.transform = "translate(-50%, -50%)";
div.style.top = "50%";
div.style.left = "50%";
div.style.width = "400px";
div.style.height = "100px";
div.style.background = "white";
div.style.textAlign = "center";

button.innerText = "CLICK ON ME";
button.style.position = "relative";
button.style.top = "40%";

div.appendChild(button);
document.body.appendChild(div);

// addEventListener("click", changeColor);
button.onclick = function() {
    changeColor();
  };
/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

// */