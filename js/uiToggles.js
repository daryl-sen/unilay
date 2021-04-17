/*
  This script should be included near the END of the page, AFTER the associated page elements
  i.e.

  <body>
    <main>
      Your page content...
    </main>
    <script src="uiToggles.js"></script>
  </body>
*/

const mobileNavButton = document.getElementById('mobile-nav-button');
const mobileNavMenu = document.getElementById('nav-links');
const shades = document.getElementById('shades');
const closeMenuButton = document.getElementById('close-button');

const toggleElement = (id) => {
  target = document.getElementById(id);
  target.classList.toggle('hidden');
};

const toggleMenu = () => {
  shades.classList.toggle('hidden');
  mobileNavMenu.classList.toggle('display-block')
}

const dismissNotif = (id) => {
  target = document.getElementById(id);
  target.classList.toggle('hidden');
}

mobileNavButton.addEventListener('click', toggleMenu);
shades.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);