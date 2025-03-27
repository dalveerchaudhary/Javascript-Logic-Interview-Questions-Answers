// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("dalveer singh ");
}

myFirst();
mySecond();
