let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}
document.querySelectorAll('.c-compare').forEach(cc => {
  const range = cc.querySelector('.c-compare__range');
  const update = () => cc.style.setProperty('--val', `${range.value}%`);
  range.addEventListener('input', update);
  update();
});
document.querySelectorAll('.lightbox').forEach(box => {
  box.addEventListener('click', () => {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  });
});