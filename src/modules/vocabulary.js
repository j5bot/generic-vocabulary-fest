export const vocabulary = [

  { word: 'action', definition: 'An object which describes the fact that something happened.', usage: 'The application dispatched an action when the button was clicked.' },
  { word: 'flux standard action', definition: 'An action object containing a type, payload, and optional error field.', usage: 'Flux standard actions are a human-readable standard for action objects.' },
  { word: 'spread', definition: 'The ... operator which iterates the contents of an iterable such as an array or object, used in structuring.', usage: 'The spread operator allows for the use of very natural extension and composition techniques.' },
  { word: 'destructuring', definition: 'The {} = or [] = syntax which allows for extracting properties from an array or object during an assignment operation.', usage: 'Structuring syntax is a natural complement to object literal syntax.' },
  { word: 'rest', definition: 'A parameter which represents an indefinite number of arguments in a function.', usage: 'Think of the rest parameter as "and the rest".' },
  { word: 'pure function', definition: 'A function which always returns the same value given the same argument values, and has no observable side effects.', usage: 'If a pure function\'s parameters are passed by reference, they cannot be mutated inside the function.' }

];

export default vocabulary;
