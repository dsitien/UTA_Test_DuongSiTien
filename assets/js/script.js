document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const headerMenu = document.querySelector('.header-menu');
    const xIcon = document.querySelector('.x-icon');

    function check() {
        if (window.innerWidth < 767) {
            menuIcon.addEventListener('click', menu);
            xIcon.addEventListener('click', hideMenu);
            document.addEventListener('click', sideMenu);
        } else {
            menuIcon.removeEventListener('click', menu);
            xIcon.removeEventListener('click', hideMenu);
            document.removeEventListener('click', sideMenu);
            headerMenu.style.display = 'flex';
        }
    }

    function menu() {
        headerMenu.style.display = (headerMenu.style.display === 'none' || headerMenu.style.display === '') ? 'flex' : 'none';
    }

    function hideMenu() {
        headerMenu.style.display = 'none';
    }

    function sideMenu(event) {
        if (!headerMenu.contains(event.target) && event.target !== menuIcon) {
            headerMenu.style.display = 'none';
        }
    }

    check();

    window.addEventListener('resize', check);
});
