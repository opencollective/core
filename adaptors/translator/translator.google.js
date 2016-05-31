'use strict';

import GoogleTranslate from 'google-translate-api';
// -- Internal
const LANGUAGE = 'en';

export default (phrase, fromLanguage) => {
  return new Promise((resolve, reject) => {
    const time = new Date();
    GoogleTranslate(phrase, {from: fromLanguage, to: LANGUAGE}).then(response => {
      resolve({
        engine: 'google',
        iso: response.from.language.iso,
        phrase: response.text,
        ms: (new Date() - time)
      });
    }).catch(error => {
      reject(error);
    });
  })
}
