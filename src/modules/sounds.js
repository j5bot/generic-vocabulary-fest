import { Howl } from 'howler';

export const music = new Howl({
  src: ['/sounds/circus-attractions.mp3'],
  loop: true,
  volume: 0.3
});

export const sounds = [
  new Howl({ src: ['/sounds/hey-hey.mp3'] }),
  new Howl({ src: ['/sounds/laugh.mp3'] })
];

export const pop = new Howl({
  src: ['/sounds/balloon-pop.mp3']
});

export default {
  music: music,
  sounds: sounds,
  pop: pop
};
