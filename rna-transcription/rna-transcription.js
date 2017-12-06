class Transcriptor {
  constructor() {
  }
  toRna(dna) {
    let dnaSplit = dna.split('');
    let invalid = false;
    for (var i = 0; i < dnaSplit.length; i++) {
      switch(dnaSplit[i]) {
        case 'G':
          dnaSplit[i] = 'C';
          break;
        case 'C':
          dnaSplit[i] = 'G';
          break;
        case 'T':
          dnaSplit[i] = 'A';
          break;
        case 'A':
          dnaSplit[i] = 'U';
          break;
        default:
          throw new Error('Invalid input DNA.');
      }
    }
    return dnaSplit.join('');
  }
}

module.exports = Transcriptor;



// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`