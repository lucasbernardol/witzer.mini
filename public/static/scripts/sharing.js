const bodyRef = document.querySelector('body');

const anchorRef = document.querySelector('[data-id="anchor-ref"]');

function sharing(href) {
  // add attributes
  anchorRef.setAttribute('href', href);
  anchorRef.setAttribute('target', '_self');

  anchorRef.click();
}

// fech
async function fetchURL({ hash }) {
  console.log(hash);

  const response = await fetch(`/shortenings/${hash}`);

  const { href } = await response.json();

  if (!href) {
    window.location.href = '/';

    return; // go home
  }

  sharing(href);
}

window.addEventListener('load', async () => {
  const { hash } = bodyRef.dataset;

  await fetchURL({ hash });
});
