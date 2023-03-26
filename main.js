$(document).ready(function(){
  
  let monitor = $(".monitor")
  
  let already = false;
  let decimal = false;
  let symbolClicked = false;
  let secondCalc = false;
  
  let number1, number2;
  let resultNumber = 0;
  let calcSymbol = 0;
  let replaceSymbol;
  
   
  function clear(){
    monitor.text("");
    number1 = number2 = resultNumber = calcSymbol = 0;
    already = false;
    decimal = false;
    symbolClicked = false;
    secondCalc = false;
  }
  
  function display(i){
    let j =  monitor.text();
    monitor.text(j+i);
  }
  
  
  $(".number").on("click", function(){
    $(".clear").text("C");
    if(already == true){
      clear();
      already = false;
    }
    if(monitor.text() == 0 && decimal == false){
      monitor.text("");
    }
    
    if(symbolClicked == true){
      monitor.text("");
    }
    
    if(calcSymbol !== 0){
      secondCalc = true;
    }
    
    symbolClicked = false;
    
    num = $(this).val();
    display(num);
    
  });
  
   $(".clear").on("click", function(){
    $(".clear").text("AC");
    clear();
    
  });
  
  $(".decimal").on("click", function(){
    $(".clear").text("C");
    if(decimal == false){
      if(already == true){
        clear();
        already = false;
      }
       i = $(this).text();
       j =  monitor.text();
       monitor.text(j+i);
      decimal = true;
    }
    
  });
  
  $(".symbol").on("click", function(){
    if(secondCalc == false){
      if(symbolClicked == false){
        number1 = Number(monitor.text()); //初めて演算子をクリックした場合
      }else{
      // monitor.text().slice(0, -1);
        i = monitor.text().replace(/.$/, "");
        monitor.text(i);
      }
    }else{
      if(symbolClicked == false){
        number2 = Number(monitor.text());//2回目以降の演算子をクリックした場合
        result();
      }else{
        i = monitor.text().replace(/.$/, "");
        monitor.text(i);
      }
    }
     symbolClicked = true;
     mark = $(this).text();
     display(mark);
     calcSymbol = $(this).val();
     
     decimal = false;
  });
  
  $(".equal").on("click", function(){
    result();
    decimal = false;
    already = true;
    secondCalc = false;
  });
  
  function result(){
   if(secondCalc == true){
    number2 = Number(monitor.text());
    if(calcSymbol == 1){
      number1 /= number2;
    }else if(calcSymbol == 2){
      number1 *= number2;
    }else if(calcSymbol == 3){
      number1 -= number2;
    }else if(calcSymbol == 4){
      number1 += number2;
    }
    monitor.text(number1);
   }
  }
});
