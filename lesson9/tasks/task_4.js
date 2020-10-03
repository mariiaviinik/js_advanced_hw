/*

  Задание:
    Написать конструктор обьекта. Отдельные функции разбить на модули
    и использовать внутри самого конструктора.
    Каждую функцию выделить в отдельный модуль и собрать.

    Тематика - птицы.
    Птицы могут:
      - Нестись
      - Летать
      - Плавать
      - Кушать
      - Охотиться
      - Петь
      - Переносить почту
      - Бегать

  Составить птиц (пару на выбор, не обязательно всех):
      Страус
      Голубь
      Курица
      Пингвин
      Чайка
      Ястреб
      Сова

 */
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

class Bird {

  constructor(species, energy, speed, high) {
    this.species = species;
    this.energy = energy == undefined ?100 :speed;
    this.speed = speed == undefined ?0 :speed;
    this.high == undefined ?0 :high;
    this.showEnergy = this.showEnergy.bind(this);
    this.doSmth = this.doSmth.bind(this);
    this.changeEnergy = this.changeEnergy.bind(this);
  }
  
  showEnergy() {
    console.log(`${this.species} has ${this.energy} energy`);
    return this.energy;
  }
  
  changeEnergy(val){
    this.energy+=val;
    return this.energy;
  }

  doSmth() {
    let whatToDo = ['fly', 'eat', 'hunt', 'sing', 'run', 'lay', 'postBring'], 
    values = [-10, -15, -20, -30],
    smth = whatToDo[getRandomArbitrary(0, whatToDo.length)],
    num = values[getRandomArbitrary(0, values.length)];
    if(smth == 'eat'){
      num = Math.abs(num);
    }
    console.log(`${this.species} is ${smth+'ing'}`);
    this.changeEnergy(num);
  }
}

let ostrich = new Bird('ostrich'),
seagull = new Bird('seagull'),
chicken = new Bird('chicken'),
hawk = new Bird('hawk');

ostrich.doSmth();
ostrich.doSmth();
ostrich.showEnergy();

seagull.doSmth();
seagull.doSmth();
seagull.showEnergy();

chicken.doSmth();
chicken.doSmth();
chicken.showEnergy();

hawk.doSmth();
hawk.doSmth();
hawk.showEnergy();