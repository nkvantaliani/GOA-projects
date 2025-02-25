

document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggleTheme');
    toggleThemeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light');
    });
    document.body.classList.add('light');
  });
  