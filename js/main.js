(function() {
  var menuButton = document.getElementById('mobile-menu-button');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuLinks = mobileMenu.querySelectorAll('a');

  function toggleMenu() {
    var isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    mobileMenu.classList.toggle('hidden');
  }

  menuButton.addEventListener('click', toggleMenu);

  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.add('hidden');
    });
  });
})();
