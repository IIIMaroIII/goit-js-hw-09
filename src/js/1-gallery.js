import images from '../img/images.json';
import SimpleLightbox from 'simplelightbox';
import '../css/gallery.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
  body: document.querySelector('body'),
};

function createGalleryItemMarkup(images) {
  const galleryItem = images
    .map(({ preview, original, description }) => {
      return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      title="${description}"
    />
  </a>
</li>`;
    })
    .join('')
    .trim();
  renderMarkups(galleryItem);
}

function renderMarkups(markup) {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

createGalleryItemMarkup(images);
let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
