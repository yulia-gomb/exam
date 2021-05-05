/*Задание 2.
Дана строка S.
Определить, является ли она палиндромом.
Замечание: палиндромом называются строки, которые одинаково читаются как слева-направо, так и справа-налево.*/

window.onload = function () {

   input.oninput = function() {

       let word = form.querySelector(`[name="word"]`).value.toLowerCase();

       if (word != undefined) {
           let oppositeWord = word.split("").reverse().join("");


           let oldElement = document.querySelector('p');
           if (oldElement != null) {
               oldElement.remove();
           }

           if (word == oppositeWord) {
               let answer = "Строка является палиндромом!";
               getAnswer(answer);

           } else {
               let answer = "Строка НЕ является палиндромом!";
               getAnswer(answer);
           }
       }
       

   }
}

function getAnswer (answer) {
    let element = document.createElement('p');
    element.innerHTML = answer;
    element.setAttribute("class", "answer")
    form.append(element);
}