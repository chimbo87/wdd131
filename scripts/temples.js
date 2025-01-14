
document.addEventListener('DOMContentLoaded', () => {
  
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

   
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

  
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});


document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
