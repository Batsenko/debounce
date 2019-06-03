'use strict';

/** 
     * Реализовать декоратор debounce
     * 
     * Чтобы оригинальная функция запускалась только после определённой паузы в запусках обёртки
     * Пока пользователь печататет - ничего
     * Если остановился и подождал секунду - вывести последнее значение
     * Функция onChange должна получать тот же `this` и аргументы, что и обёртка
     **/
    function debounce(f, delay) {
  
    }

    function onChange(event) {
      console.log(event.target.value, this.value)
    }
    
    let wrapper = debounce(onChange, 1000);

    input1.addEventListener('input', wrapper);