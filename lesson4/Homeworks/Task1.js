function invalid(el){
    formElements[el].classList.remove("valid");
    formElements[el].classList.add("invalid");
}

function valid(el){
    formElements[el].classList.remove("invalid");
    formElements[el].classList.add("valid");
}

let formElements = document.myForm.elements;

check.addEventListener("click", (event) => {
    if(formElements.login.validity.valueMissing){
        invalid('login');
        formElements.login.setCustomValidity("Как тебя зовут дружище?!");   
    } else if(formElements.login.validity.tooShort){
        invalid('login');
        formElements.login.setCustomValidity("Нужно больше 2 символов");
    } else {
        formElements.login.setCustomValidity("");
        valid('login');
    }

    if(formElements.email.validity.tooShort || formElements.email.validity.valueMissing){
        invalid('email');
        formElements.email.setCustomValidity("Ну и зря, не получишь бандероль с яблоками!");
    } else {
        formElements.email.setCustomValidity("");
        valid('email');
    }

    if(formElements.pas.validity.valueMissing){
        invalid('pas');
        formElements.pas.setCustomValidity("Я никому не скажу наш секрет");
    } else if(formElements.pas.validity.tooShort){
        invalid('pas');
        formElements.pas.setCustomValidity("Нужно больше 8 символов");
    } else if(formElements.pas.validity.tooLong){
        invalid('pas');
        formElements.pas.setCustomValidity("Нужно меньше 16 символов");   
    } else {
        formElements.pas.setCustomValidity("");
        valid('pas');
    }

    if(formElements.num.validity.valueMissing){
        invalid('num');
        formElements.num.setCustomValidity("Надо заполнить поле");   
    } else if(formElements.num.validity.rangeUnderflow){
        invalid('num');
        formElements.num.setCustomValidity("Ну хоть покушай немного... Яблочки вкусные!");
    } else {
        formElements.num.setCustomValidity("");
        valid('num');
    }
    
    if(formElements.thanks.validity.patternMismatch || formElements.thanks.validity.valueMissing){
        invalid('thanks');
        formElements.thanks.setCustomValidity("Фу, неблагодарный(-ая)!");   
    } else {
        formElements.thanks.setCustomValidity("");
        valid('thanks');
    }

    if(!formElements.agree.checked){
        invalid('agree');
        formElements.agree.setCustomValidity("Необразованные живут дольше! Хорошо подумай!");   
    } else {
        formElements.agree.setCustomValidity("");
        valid('agree');
    }

    if(document.myForm.checkValidity()){
        event.preventDefault();
        alert("Форма валиднa)");
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
});
    /*

        Документация:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Проверка всех полей формы на валидость
        form.reportValidity() > Проверяет все поля на валидность и выводит возле каждого из не прошедшего валидацию
            сообщение с ошибкой

        formElement.validity > Объект с параметрами валидности поля 
        formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
            сообщения выведет message в браузерный попал

        Классы для стилизации состояния элемента
        input:valid{}
        input:invalid{}

        
        Задание:
        
        Используя браузерное API для валидации форм реализовать валидацию следующей формы:
        

        - Имя пользователя: type:text -> validation: required; minlength = 2;  
            Если пустое выввести сообщение: "Как тебя зовут дружище?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Если пустой вывести сообщение: "Я никому не скажу наш секрет";
        - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
            Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
        - Напиши спасибо за яблоки: type: text -> validation: required; 
            Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

        - Согласен на обучение: type: checkbox -> validation: required;
            Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

        Внизу две кнопки:

        1) Обычный submit который отправит форму, если она валидна.
        2) Кнопка Validate(Проверить) которая запускает методы:
            - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
            - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

    */