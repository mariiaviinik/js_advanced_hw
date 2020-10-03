/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/
window.addEventListener("load", () => {
    let formElements = document.myForm.elements;

    document.myForm.addEventListener("change", () => {
      let access = 0;

      if(formElements.login.value == "admin@example.com"){
        formElements.login.classList.add("OK");
        access++;
      } else{
        formElements.login.classList.add("error");
      }

      if(formElements.pas1.value == "12345678" ){
          formElements.pas1.classList.add("OK");
          if(access) {
            formElements.submit.disabled = formElements.exit.disabled = false;
          }
        } else{
          formElements.pas1.classList.add("error");
          formElements.submit.disabled = formElements.exit.disabled = true;
        }
    });

    formElements.submit.addEventListener('click', () => {
        event.preventDefault();
        localStorage.setItem('password', formElements.pas1.value);
        localStorage.setItem('username', formElements.login.value);
        formElements.login.value = formElements.pas1.value = '';

    });
       
    if (localStorage.getItem('username')) {
        document.myForm.classList.add("hide");
        alert(`Hello, ${localStorage.getItem('username')}`);
    } else {
        document.myForm.classList.remove("hide");
    }      

    formElements.exit.addEventListener('click', () => {
        localStorage.clear();
    })

   });