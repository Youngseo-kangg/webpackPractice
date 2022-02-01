import hello_word from './hello.js';
import world_word from './world.js';
import css from './style.css'; // css도 번들링 대상이라 source 내부로 옮김

document.querySelector('#root').innerHTML = world_word + ' ' + hello_word;
console.log('css: ', css);
