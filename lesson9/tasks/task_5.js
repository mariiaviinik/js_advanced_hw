  /*
    Задание:
    Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
    Написать регулярное выражение которое найдет:
      1. Все слова. 
      2. Все совпадения букв от a до e,
      3. Года, например 2004
      4. Слова обернутые в [квадратныеКавычки]
      5. Все форматы файлов .jpg / .png / .gif
      6. Все email com.ua
      7. Все слова написанные с большой буквы
      8. Найти телефон написаный по паттерну +00 (000) 000-00-00, 
         где вместо 0 может быть любое число
  */
 let str = `Lorem ae ipsum is a [pseudo] Latin [] texte eused in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder repeat (or filler) text. It's a convenient tool for http://facebook.com mock-ups vasya@gmail.com. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author gray and color colour philosopher Cicero. Its words and he letters 2006 have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, grey correct, or comprehensible Latin anymore. While lorem ipsum's [still] resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are andrew@itea.ua digraphs not to be found in the original.

 In a 2007 professional context it often happens that private
 or corporate clients corder a publication .jpg  to be made and presented with the .gzip actual petya@ukr.net content still not being ready.
 Think of a news .gif blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted
 by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, 0001 disregarding the layout and its elements. Besides, random text risks to be uni
 ntendedly humorous or [offensive], an unacceptable risk in corporate environments. .mp3 Lorem ipsum and its many variants have been http://google.com.ua employed since the early 1960 ies, and quite likely since the sixteenth century.
 `;
 
 console.log(str.match(/\D/g));
 console.log(str.match(/[a-e]/g));
 console.log(str.match(/\b2007\b/g));
 console.log(str.match(/\[\w+\]/g));
 console.log(str.match(/\.gif|\.png|\.jpg/g));
 console.log(str.match(/(\b\w*)@(\w+\.\w+\b)/g));
 console.log(str.match(/([A-Z])\w+./g));