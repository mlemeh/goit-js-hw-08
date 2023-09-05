// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий  імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const str = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </li>`
}).join(" ");

gallery.insertAdjacentHTML("beforeend", str);

const lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay:250});

