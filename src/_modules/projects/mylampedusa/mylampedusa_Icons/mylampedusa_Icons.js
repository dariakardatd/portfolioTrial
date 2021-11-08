'use strict';

export class IconsZoom {
  constructor() {
    console.log('IconsZoom module');

    const selected = document.querySelectorAll ('.IconAndImgAndText');

    for (let i = 0; i < selected.length; i++) {
      const iconAndImageContainer = selected [i]
      console.log(iconAndImageContainer);

      iconAndImageContainer.addEventListener ('click', e => {
      // const image = document.querySelector(".IconAndImg__img");
      e.currentTarget.classList.toggle('active');
        console.log (image)
      })
    }
  }
}
