/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства


    
    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
      // }
      */
     function Dog (name, breed){
      this.name = name,
      this.breed = breed,
      this.status="status",
      this.changeStatus = () => {
        this.status = "status has changed";
      },
      this.showProps = () => {
        for(var key in this){
          console.log(key, this[key] );
        }
      }
    }

    let newDog = new Dog("Chelsea","Retriver");
    console.log(newDog);
    newDog.changeStatus();
    newDog.showProps();