import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const makeItemGallery = ({ preview, original, description }) => {
	return `<div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
		</a>
	</div>`;
};

const markupGallery = galleryItems.map(el => makeItemGallery(el)).join("");

galleryEl.insertAdjacentHTML("afterbegin", markupGallery);

const handleClickImgGallery = event => {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}

	const modalWindow = basicLightbox.create(
		`
  <img class="gallery__image" src="${event.target.dataset.source}" alt="${event.target.alt}"/>
`,
		{
			onShow: modalWindow => {
				document.addEventListener("keydown", handleModalWindowEsc);
			},
			onClose: modalWindow => {
				document.removeEventListener("keydown", handleModalWindowEsc);
			},
		},
	);
	modalWindow.show();

	// document.addEventListener("keydown", handleModalWindowEsc);

	function handleModalWindowEsc(event) {
		// console.log(event.code);
		if (event.code === "Escape") {
			modalWindow.close();
			// document.removeEventListener("keydown", handleModalWindowEsc);
		}
	}
};

galleryEl.addEventListener("click", handleClickImgGallery);
