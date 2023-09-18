// Первое задание

var ages = +prompt("Введите свой возвраст");

if (ages > 0 && ages <= 18) {
  alert("Вы еще молоды, Вам нужно учиться");
} else if (ages > 18 && ages <= 50) {
  alert("Вам нужно работать");
} else if (ages > 50 && ages <= 59) {
  alert("Вам скоро на пенсию");
} else if (ages > 59 && ages <= 100) {
  alert("Вы пенсионер");
} else {
  alert("Что-то пошло не так");
}

// Второе задание

var time = +prompt("Введите время");

switch (time) {
  case 0:
  case 1:
    case 2:
      case 3:
      case 4:
      case 5:
      case 6:
    alert(time + ' часа ночи');
  break
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
  alert(time + ' часов утра')
  break
  case 13:
  alert('1 часов дня')
  break
  case 14:
  alert('2 часов дня')
  break
  case 15:
  alert('3 часов дня')
  break
  case 16:
  alert('4 часов дня')
  break
  case 17:
  alert('5 часов дня')
  break
  case 18:
  alert('6 часов вечера')
  break
  case 19:
  alert('7 часов вечера')
  break
  case 20:
  alert('8 часов вечера')
  break
  case 21:
  alert('9 часов вечера')
  break
  case 22:
  alert('10 часов вечера')
  break
  case 23:
  alert('11 часов вечера')
  break
  
}

// Третье задание

var first = +prompt('Введите первое  число ')
var second= +prompt('Введите второе число ')
var third= +prompt('Введите третье число ')

if(first > second > third ){
  alert('Среднее число: ' + first)
}else if(first > second < third){
  alert('Среднее число: ' + second)
}else if(first < second < third){
  alert('Среднее число: ' + third)
}
