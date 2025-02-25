function moveCircle() {
    const circle = document.getElementById('circle');
    circle.style.right = '900px';
    setTimeout(function() {
      circle.style.right = '0px';
    }, 800); 
  }
  