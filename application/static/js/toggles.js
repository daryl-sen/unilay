function toggleElement(id) {
  target = document.getElementById(id);
  target.classList.toggle('hidden');
}

function toggleMenu() {
  menu = document.getElementById('navigation');
  shades = document.getElementById('shades');

  shades.classList.toggle('hidden');
  menu.classList.toggle('display-block');
}

function dismissNotif(id) {
  target = document.getElementById(id);
  target.classList.toggle('hidden');
}
