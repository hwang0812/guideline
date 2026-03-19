const sections = document.querySelectorAll('h2');
const links = document.querySelectorAll('.toc a');


links.forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
}));


window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (pageYOffset >= s.offsetTop-50) current = s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
});
