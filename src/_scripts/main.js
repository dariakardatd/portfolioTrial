// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import { Link } from '../_modules/link/link';
import { ViewPort3 } from '../_modules/viewPort3/viewPort3';
import { SliderCards } from '../_modules/projects/mylampedusa/mylampedusa';
import { IconsZoom } from '../_modules/projects/mylampedusa/mylampedusa_Icons/mylampedusa_Icons';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');

  
  let sliders = document.querySelectorAll(".j-sliderProject");
  for (let i = 0; i < sliders.length; i++) {
    new SliderCards(sliders[i]);
  }

  new ViewPort3();

  new IconsZoom();
});
