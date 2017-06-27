export const randomInteger = (min, max) => {
  let range = max - min;
  return min + Math.round(Math.random() * range);
};

export const randomMember = ( array ) => {
  return array[ randomInteger( 0, array.length - 1 ) ];
};
