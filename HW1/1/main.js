function sequence(start = 0, step = 1) {
    let callNumber = start;
    return function() {
      var returnValue = callNumber; // значение для вывода
      callNumber += step; // готовимся к следующему шагу
      return returnValue;
    }
  }
  
  var generator = sequence(10, 3);
  
  console.log(generator()); // 10
  console.log(generator()); // 13
  
  var generator2 = sequence(8, 2);
  
  console.log(generator2()); // 0
  console.log(generator2()); // 1

  var generator3 = sequence(6, 3);
  
  console.log(generator3()); // 0
  console.log(generator3());

  var generator4 = sequence();
  
  console.log(generator4()); // 0
  console.log(generator4());