/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/
let Train = {
    name: "Train",
    speed: 160,
    numOfPassengers: 10,
    go() {
        console.log(`Поезд ${this.name} везет ${this.numOfPassengers} со скоростью ${this.speed}`);
    },
    stay() {
        console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}`);
    },
    pickUp() {
        numOfPassengers+=4;
    }
}
