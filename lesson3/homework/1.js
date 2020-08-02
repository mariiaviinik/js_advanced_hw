/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/
  function NextSlide(){
    var lastIndex = OurSliderImages.length-1;
    if(currentPosition == lastIndex){
      currentPosition = 0;
    } else {
      currentPosition++;
    }
  }

  function PrevSlide(){
    if(currentPosition == 0){
      currentPosition = OurSliderImages.length-1;
    } else {
      currentPosition--;
    }
  }

  
  function RenderImage(){
    img.src = OurSliderImages[currentPosition];
    var i = 1;
    var test = setInterval(function(){
      i++;
      img.style.width = img.style.height = 25.6*i+"px";
      console.log(img.style.width);
      if(img.style.width == "512px") clearInterval(test);
    }, 20)
  }

  var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  var sliderBlock = document.querySelector("#slider");
  var currentPosition = 0;
  var img = document.createElement("img");


  window.addEventListener('load', function(){
    img.src = OurSliderImages[currentPosition];
    sliderBlock.appendChild(img);
  })

  PrevSilde.addEventListener("click", PrevSlide);
  PrevSilde.addEventListener("click", RenderImage);
  NextSilde.addEventListener("click", NextSlide);
  NextSilde.addEventListener("click", RenderImage);
  
  
  