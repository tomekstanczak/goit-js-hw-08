import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector('ul.gallery');
const addPictures = galleryItems.map(
  item =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
);
galleryConteiner.insertAdjacentHTML('beforeend', addPictures.join(''));

const gallery = new simpleLightbox('.gallery a', {});
gallery.on('show.simplelightbox', function () {});
