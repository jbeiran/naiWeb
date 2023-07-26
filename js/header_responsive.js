document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
    } else {
        navMenu.classList.add('open');
    }
  });
  