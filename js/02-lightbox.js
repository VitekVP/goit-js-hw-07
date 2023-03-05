import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const makeItemGallery = ({ preview, original, description }) =>
	`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const markupGallery = galleryItems.map(el => makeItemGallery(el)).join("");

galleryEl.insertAdjacentHTML("afterbegin", markupGallery);

new SimpleLightbox(".gallery__item", {
	captionsData: "alt",
	captionDelay: 250,
});
