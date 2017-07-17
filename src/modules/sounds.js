import { Howl } from 'howler';

export const music = new Howl({
  src: ['/generic-vocabulary-fest/sounds/circus-attractions.mp3'],
  loop: true,
  volume: 0.3
});

export const sounds = [
  new Howl({ src: ['/generic-vocabulary-fest/sounds/hey-hey.mp3'] }),
  new Howl({ src: ['/generic-vocabulary-fest/sounds/laugh.mp3'] })
];

export const pop = new Howl({
  src: ['/generic-vocabulary-fest/sounds/balloon-pop.mp3']
});

export default {
  music: music,
  sounds: sounds,
  pop: pop
};
