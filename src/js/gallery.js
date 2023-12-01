import images from './images.json';

const refs = {
  gallery: document.querySelector('.gallery'),
  basicLightbox: document.querySelector('.basicLightbox'),
  body: document.querySelector('body'),
};

refs.gallery.addEventListener('click', onModalOpen);

function checkEscapeBtnPushedOnModalOpen(el) {
  const ifBodyHasBasicLightbox =
    refs.body.lastElementChild.classList.contains('basicLightbox');
  if (ifBodyHasBasicLightbox) {
    const basicLightboxRef = document.querySelector('.basicLightbox');
    document.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        el.close();
      }
    });
  }
}

function createBasicLightboxElement(e) {
  const instance = basicLightbox.create(
    `<img class="modal__img" src="${e.target.dataset.source}" alt="${e.target.alt}">`
  );
  instance.show();
  return instance;
}

function onModalOpen(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const instanceRef = createBasicLightboxElement(evt);
  checkEscapeBtnPushedOnModalOpen(instanceRef);
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
