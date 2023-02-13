const buttons = document.querySelectorAll('.myButton');
  
buttons.forEach(button => {
  let points = 0;

  button.addEventListener('click', function() {
    points++;
    this.style.backgroundColor = `#FA5252`;
    this.style.color = "white";
    this.style.fontSize = `${20 + points * 2}px`;
    this.style.width = `${100 + points * 20}px`;
    this.innerHTML = `AHH NOOO! You clicked me ${points} times`;
  });
});