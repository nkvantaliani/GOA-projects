
//   document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('buttheme');
  
//     // გადართვის ფუნქცია
//     button.addEventListener('click', () => {
//       document.body.classList.toggle('dark');
//       document.body.classList.toggle('light');
//     });
  
//     // თავდაპირველი თემა
//     document.body.classList.add('light');
//   });

document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggleTheme');
  
    // გადართვის ფუნქცია
    toggleThemeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light');
    });
  
    // თავდაპირველი თემა
    document.body.classList.add('light');
  });
  