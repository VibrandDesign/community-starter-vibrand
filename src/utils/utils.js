import { detect } from 'detect-browser';
const browser = detect();
export const isTouchDevices = browser.os === 'Android OS' || browser.os === 'iOS';
export const isSafari = browser.name === 'safari';

//* Element repositioning

export function handleReposition(
  windowWidth,
  targetAttribute,
  placeBefore,
  targetContainerAttribute,
  defaultContainerAttribute
) {
  const breakpoint = windowWidth;
  const targetElement = document.querySelector('[' + targetAttribute + ']');

  if (!targetElement) {
    return;
  }

  if (window.innerWidth <= breakpoint) {
    const targetContainer = document.querySelector('[' + targetContainerAttribute + ']');

    if (targetElement && targetContainer) {
      if (placeBefore) {
        targetContainer.prepend(targetElement);
      } else {
        targetContainer.appendChild(targetElement);
      }
    }
  } else {
    const targetContainer = document.querySelector('[' + defaultContainerAttribute + ']');

    if (targetElement && targetContainer) {
      targetContainer.appendChild(targetElement);
    }
  }
}

const currentURL = window.location.href;
export const devURL = currentURL.includes('?dev');

//* Calculate Height of Navbar

export function calculateNavbarHeight() {
  const navbarHeight = document.querySelector('[navbar="component"]').offsetHeight;
  document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
}

export function debounce(func) {
  let timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}