let buttons = document.querySelectorAll('.button');
  let body = document.querySelector("body");
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      console.log(e);
      console.log(e.target);
      
      // Use e.target.id to check the button's id
      if(e.target.id === 'grey') {
        body.style.backgroundColor = 'grey';
      }
      if(e.target.id === 'white') {
        body.style.backgroundColor = 'white';
      }
      if(e.target.id === 'blue') {
        body.style.backgroundColor = 'blue';
      }
      if(e.target.id === 'yellow') {
        body.style.backgroundColor = 'yellow';
      }
    });
  });