/*Задание 1.
Напишите программу, которая вводит с клавиатуры непустой массив целых чисел,
и выводит число локальных максимумов (элемент является локальным максимумом,
если он не имеет соседей больших, чем он сам).*/

window.onload = function () {

   input.oninput = function() {


       let digit = form.querySelector(`[name="word"]`).value.split(" ");
        let arr = [];
       console.log(digit)


       for (let n = 0; n < digit.length; n++) {
           if (!isNaN(digit[n])) {
               arr.push(digit[n]);
           }

       }

           console.log(arr)


           if (arr !== undefined) {

               let oldElement = document.querySelector('p');
               if (oldElement != null) {
                   oldElement.remove();
               }

               let sum = 0;
               let arrayOfMax = [];

               for (let i = 0; i < arr.length; i++) {
                   if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
                       sum++;
                       console.log("количество = " + sum);
                       var count = sum;
                       arrayOfMax.push(arr[i]);
                       console.log("массив = " + arrayOfMax);
                   }

               }

               let answer = `Массив содержит ${count} локальных максимумов: ${arrayOfMax}`;
               getAnswer(answer);


           }



   }
}

function getAnswer (answer) {
    let element = document.createElement('p');
    element.innerHTML = answer;
    element.setAttribute("class", "answer")
    form.append(element);
}