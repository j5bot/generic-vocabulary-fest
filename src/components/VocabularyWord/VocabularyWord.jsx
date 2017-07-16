import React from 'react';
import './VocabularyWord.css';

export const VocabularyWord = ( props ) => {

  let { term } = props;

  return (
      <div data-vocabulary-word>
      { term.visible && (
        <dl>
          <dt>{ term.word }</dt>
          <dd>
            { term.definition }
            <span className="usage">
              { term.usage }
            </span>
          </dd>
        </dl>
      ) }
      </div>
  );

};

export default VocabularyWord;
