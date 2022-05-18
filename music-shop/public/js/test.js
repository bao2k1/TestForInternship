/*eslint-disable*/
const clrBtn = document.querySelector('.clrBtn');
const rsInputs = document.querySelectorAll('.input');
clrBtn.addEventListener('click', e => {
  e.preventDefault();
  rsInputs.forEach(rsInput => {
    rsInput.value = ' ';
  });
});
