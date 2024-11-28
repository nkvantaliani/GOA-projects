let images = [
    'img1.jpg',
    'img2.avif',
    'img3.jpeg',
    'img4.jpg'
  ];

  let index = 0;
  function prevImage() {
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    document.getElementById('slider').src = images[index];
  }

  function nextImage() {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    document.getElementById('slider').src = images[index];
  }