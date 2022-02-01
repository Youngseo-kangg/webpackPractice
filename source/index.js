import hello_word from './hello.js';
import world_word from './world.js';
import _ from 'lodash'; // npm으로 설치한 lodash
import css from './style.css'; // css도 번들링 대상이라 source 내부로 옮김

document.querySelector('#root').innerHTML = _.join(
  [hello_word, world_word],
  ' '
);
