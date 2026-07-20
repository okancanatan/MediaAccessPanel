const actions = [...document.querySelectorAll('.action-card')];
const selectionMessage = document.querySelector('#selection-message');

function moveFocus(currentIndex, direction) {
  const nextIndex = (currentIndex + direction + actions.length) % actions.length;
  actions[nextIndex].focus();
}

document.addEventListener('keydown', (event) => {
  const currentIndex = actions.indexOf(document.activeElement);

  if (currentIndex === -1) return;

  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault();
    moveFocus(currentIndex, -1);
  }

  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault();
    moveFocus(currentIndex, 1);
  }
});

actions.forEach((action) => {
  action.addEventListener('click', () => {
    selectionMessage.textContent = `${action.getAttribute('aria-label')} selected.`;
  });
});

window.addEventListener('load', () => actions[0].focus());
