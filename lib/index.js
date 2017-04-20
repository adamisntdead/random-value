var randomatic = require('randomatic');

/**
 * Generates a random Number (Float) between 0 and 2147483647
 * @return {Number}
 */
function randomNumber() {
  return Math.random() * 2147483647;
}

/**
 * Generates a random integer (Number) between 0 and 2147483647
 * @return {Number}
 */
function randomInt() {
  return Math.floor(randomNumber());
}

/**
 * Generates a random Boolean (true or false)
 * @return {Boolean}
 */
function randomBool() {
  return Boolean(Math.floor(Math.random() * 2));
}

/**
 * Generates a random String, with any possible charachter, and a length between 0 and 200
 * @return {String}
 */
function randomString() {
  return randomatic('*', Math.floor(Math.random() * 200));
}

/**
 * Generates a random word-like String, all lower-case and a length between 0 and 20
 * @return {String}
 */
function randomWord() {
  return randomatic('a', Math.floor(Math.random() * 20));
}

/**
 * Generates a random sentence-like String. All words have a length between 0 and 20,
 * and there is between 0 and 15 words.
 * The sentence is returned in Sentence case, terminated by a period.
 * @return {String}
 */
function randomSentence() {
  var sentenceLength = Math.floor(Math.random() * 15);
  var sentenceWords = [];

  for (var i = 0; i < sentenceLength; i++) {
    if (i === 0) {
      var word = randomWord().split('');
      if (word.length !== 0) {
        word[0] = word[0].toUpperCase();
      }
      sentenceWords.push(word.join(''));
    } else {
      sentenceWords.push(randomWord());
    }
  }

  return sentenceWords.join(' ') + '.';
}

module.exports = {
  randomNumber,
  randomInt,
  randomBool,
  randomString,
  randomWord,
  randomSentence
};
