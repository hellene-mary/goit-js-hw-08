// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryItem(galleryItem) {
    const { preview, original, description } = galleryItem;
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

const createGalleryItems = galleryItems.map(createGalleryItem).join('');

galleryEl.insertAdjacentHTML('beforeend', createGalleryItems);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
