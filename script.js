// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
   }
//This function will calculate the square root
function sqrt() {
    var val = document.getElementById("result").value;
    document.getElementById("result").value = Math.sqrt(val);
}
   
   // This function display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    try {
        var toEval = document.getElementById("text").value.replace("√", "Math.sqrt");
        c(eval(toEval))
      } catch (calculate) {
        c('Error')
      }
   }
   
    
  