class Pangram {
  constructor(sentence) {
    this._sentence = sentence;
  }

  get sentence() {
    return this._sentence;
  }

  isPangram() {
    let isPangram, letters = {};

    let replaced = this.sentence.toLowerCase().replace(/[^a-z]/g, "");

    [...replaced].forEach((letter, index) => {
      if (!letters[letter]) {
        letters[letter] = index;
      }
    });

    //console.log(letters, replaced, Object.keys(letters).length);

    if (letters) {
      isPangram = Object.keys(letters).length === 26 ? true : false;
    } else {
      isPangram = false;
    }
    return isPangram;
  }
}

export default Pangram;
