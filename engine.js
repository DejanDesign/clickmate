
/* script to get on hover font color of parent element */
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  const parentColor = getComputedStyle(button.parentElement).getPropertyValue('background-color');

  button.addEventListener('mouseenter', () => {
    button.style.color = parentColor;
  });

  button.addEventListener('mouseleave', () => {
    button.style.color = '';
  });
});
