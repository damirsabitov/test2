document.addEventListener('scroll', function () {
    const navMenu = document.querySelector('.nav__menu');
    const originalOffsetY = navMenu.offsetTop;

    if (window.scrollY > originalOffsetY) {
        navMenu.classList.add('fixed');
    } else {
        navMenu.classList.remove('fixed');
    }
});

const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
});

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('hover', function (event) {
        event.preventDefault();
        const dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});


window.addEventListener('hover', function (event) {
    if (!event.target.matches('.menu-link')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});