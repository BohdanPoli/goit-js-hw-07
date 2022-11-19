import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Посилання на елементи в документі

const ref = {
  div: document.querySelector(".gallery"),
};

// Додаємо розмітку

const markup = createGalleryItemMarkup(galleryItems);
ref.div.insertAdjacentHTML("afterbegin", markup);

// Додаємо слухач подій

ref.div.addEventListener("click", onClickImage);

// Функція створення розмітки з об'єкта

function createGalleryItemMarkup(objectImage) {
  return objectImage
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a>
</div>`;
    })
    .join("");
}

// Функція кліку по зображенню

function onClickImage(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => {},

      onClose: (instance) => {},
    }
  );

  instance.show();
}

// Не можу зробити окрему функцію для закриття по клавіші escape, та передати її в OnShow
//Хотів в onClose додати removeIventListener

// function close() {
// if (e.code === "Escape") {
// instance.close();
// }
// }
