import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const newGalleryItem = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", newGalleryItem);

// console.log(createGalleryItems(galleryItems));

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" 
      href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
