import images from './images.json';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
  body: document.querySelector('body'),
};

refs.gallery.addEventListener('click', onModalOpen);

function createSimpleLightBoxEl(e) {
  let gallery = new simpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function (e) {
    `<div class="gallery">
    <a href="">
      <img
        class="modal__img"
        src="${e.target.dataset.source}"
        alt="${e.target.alt}"
        title="${e.target.alt}"
      />
    </a>
  </div>`;
  });
}

function onModalOpen(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  createSimpleLightBoxEl(evt);
}

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

// `  <div class="gallery">
//   <a href="${e.target.dataset.source}">
//     <img
//       class="modal__img"
//       src="${e.target.dataset.source}"
//       alt="${e.target.alt}"
//       title="${e.target.alt}"
//     />
//   </a>
// </div>`;
