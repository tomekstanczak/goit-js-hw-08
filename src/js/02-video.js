import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const inframe = document.querySelector('#vimeo-player');
const player = new Player(inframe);

const onPlay = event =>
  localStorage.setItem('videoplayer-current-time', event.seconds);

const throttled = throttle(onPlay, 1000);

player.on('timeupdate', throttled);

player.on('play', () => {
  player.setMuted(true);
});

window.addEventListener('DOMContentLoaded', () => {
  const currentTimeVideo = localStorage.getItem('videoplayer-current-time');
  if (currentTimeVideo !== null) {
    player.setCurrentTime(currentTimeVideo);
  }
});
