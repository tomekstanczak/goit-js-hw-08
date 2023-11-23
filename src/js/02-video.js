import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const inframe = document.querySelector('#vimeo-player');
const player = new Player(inframe);

const onPlay = event =>
  localStorage.setItem('videoplayer-current-time', event.seconds);

const throttled = throttle(onPlay, 60000);

player.on('play', () => {
  player.setMuted(true);
});

player.on('timeupdate', throttled);

player.on('volumechange', event => {
  localStorage.setItem('currentVolumen', event.volume);
});

window.addEventListener('DOMContentLoaded', () => {
  const setTime = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(setTime);
  const volumeSetting = localStorage.getItem('currentVolumen');
  player.setVolume(volumeSetting);
});
