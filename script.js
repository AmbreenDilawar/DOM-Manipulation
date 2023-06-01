// Change the text when the button is clicked
function changeText() {
    var content = document.querySelector('#content p');
    content.textContent = 'Text changed!';
    content.style.color = 'red';
  }
  
  // Attach event listener to the button
  var changeBtn = document.getElementById('changeBtn');
  changeBtn.addEventListener('click', changeText);