var assert = require('assert');
var check = require('check-types');
var random = require('../index.js');

describe('randomNumber', function () {
  it('Returns a Number', function () {
    for (let i = 0; i < 100; i++) {
      assert(check.number(random.randomNumber()));
    }
  });

  it('The numbers generated are between 0 and 2147483647', function () {
    for (let i = 0; i < 100; i++) {
      assert(check.between(random.randomNumber(), 0, 2147483647));
    }
  });
});

describe('randomInt', function () {
  it('Returns an Integer', function () {
    for (let i = 0; i < 100; i++) {
      assert(check.integer(random.randomInt()));
    }
  });

  it('The integers generated are between 0 and 2147483647', function () {
    for (let i = 0; i < 100; i++) {
      assert(check.between(random.randomInt(), 0, 2147483648));
    }
  });
});

describe('randomBool', function () {
  it('Returns a Boolean', function () {
    for (let i = 0; i < 100; i++) {
      assert(check.boolean(random.randomBool()));
    }
  });
});

describe('randomString', function () {
  it('Returns a String', function () {
    for (let i = 0; i < 100; i++) {
      assert(check.string(random.randomString()));
    }
  });
});

describe('randomWord', function () {
  it('Returns a String', function () {
    for (let i = 0; i < 100; i++) {
      assert(check.string(random.randomWord()));
    }
  });
});

describe('randomSentence', function () {
  it('Returns a String', function () {
    for (let i = 0; i < 100; i++) {
      assert(check.string(random.randomSentence()));
    }
  });

  it('Ends with a period', function () {
    for (let i = 0; i < 100; i++) {
      var sentence = random.randomSentence();
      assert(sentence[sentence.length - 1] === '.');
    }
  });
});
