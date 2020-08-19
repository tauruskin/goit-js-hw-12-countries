import { alert, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const stackBottom = new Stack({
  dir1: 'up',
  dir2: 'right',
  firstpos1: 50,
  firstpos2: 50,
  push: 'top',
  modal: true,
  overlayClose: true,
  context: document.body,
});

function notificationOptions() {
  alert({
    title: 'Too many matches found',
    text: 'Please, do a more specific search',
    width: '400px',
    minHeight: 'auto',
    type: 'error',
    stack: stackBottom,
    icon: true,
    hide: true,
    closer: false,
    sticker: false,
    remove: true,
    delay: 500,
  });
}

export { notificationOptions };
