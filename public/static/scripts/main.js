const DOMModalElement = document.querySelector('[data-id="copy-modal"]');
const DOMDestroyElement = document.querySelector('[data-id="destroy-button"]');

const DOMOutputElement = document.querySelector('[data-id="output"]');
const DOMCopyButtonElement = document.querySelector('[data-id="copy-button"]');

const HIDDEN_CLASSNAME = 'hidden';

/**
 *  - Main function
 */
function main() {
  DOMDestroyElement.addEventListener('click', () => {
    DOMModalElement.classList.add(HIDDEN_CLASSNAME);
  });

  DOMCopyButtonElement.addEventListener('click', () => {
    // Add to clipboard
    navigator.clipboard.writeText(DOMOutputElement.textContent);

    alert('Copiado');
  });
}

window.addEventListener('load', () => {
  return main();
});
