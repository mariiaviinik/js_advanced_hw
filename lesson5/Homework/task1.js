/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>
*/

function comment(name, text, avatarUrl){
  this.name = name,
  this.text = text,
  this.avatarUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpancakesfromscratch.com%2Feasy-homemade-pancakes-recipe%2F&psig=AOvVaw1ddCQnsSvPFaWc97_i0-1l&ust=1599154498610000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLif9fuAy-sCFQAAAAAdAAAAABAK',
  this.like = 0,
  this.addLikes = function(){
    this.like++;
  }
}

function showComment(arr){
  this.arr = arr,
  this.show = function(){
    this.arr.forEach(el => {
      document.documentElement.innerHTML+=(`<div id="CommentsFeed">${el}</div>`);
    });
  }
}

let CommentsArray = ['Cool', 'Amzing', 'Cringe', 'Wow'];

let c = new showComment(CommentsArray);
c.show();
console.log(c);

let firstcomment = new comment("test", "test");
firstcomment.addLikes();
console.log(firstcomment);