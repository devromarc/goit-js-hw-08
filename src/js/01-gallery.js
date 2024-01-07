// Described in documentation;

import SimpleLightbox from 'simplelightbox';
// Additional styles import

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
galleryContainer.style.listStyle = 'none';

const createGallery = el => {
  return el
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join('');
};

const galleryImageSet = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryImageSet);

// By creating a new instance with new SimpleLightbox(...), the constructor of the SimpleLightbox class is automatically called.

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

// lightbox.on('show.simplelightbox');
