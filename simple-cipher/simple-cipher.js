const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const validation = value => {
    if (value.match(/[^a-z]/, 'g') ||
        value.length === 0 ) {
        throw new Error('Bad key');
    }
}

const generateKey = () => {
  return Array(...Array(100))
    .map(() => alphabet[Math.floor(Math.random())])
    .join('');
}

const getMod = (a, b) => (a % b + b) % b

const generateCode = (text, key, code) => {
    return [...text].reduce((newText, letter, index)=> {
        let move = code * alphabet.indexOf(key[getMod(index, key.length)]);
        return newText.concat(alphabet[getMod(alphabet.indexOf(letter) + move, alphabet.length)]);
    }, '');
}

class Cipher {
    constructor(key) {
        if (typeof key === 'undefined') {
            this._key = generateKey();
        } else {
            validation(key);
            this._key = key;
        }
    }

    get key() {
        return this._key;
    }

    encode(phrase) {
        return generateCode(phrase, this.key, 1);
    }

    decode(phrase) {
        return generateCode(phrase, this.key, -1);
    }
}

export default Cipher;
