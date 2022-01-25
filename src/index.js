const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let chunkedArr = [];
    for (let i = 0; i < expr.length; i += 10) {
      const chunk = expr.slice(i, i + 10);
      chunkedArr.push(chunk);
    }
    let morseArr = []
    chunkedArr.forEach((el) => {
          el = el.replace(/10/g,'.').replace(/11/g,'-').replace(/00/g,'');
          morseArr.push(el);
      });
    let str = '';
      morseArr.forEach((el) => {
          if(el === '**********'){
              str += ' ';
          } else{
              str += MORSE_TABLE[el];
          }
      });
  
      return str;
}

module.exports = {
    decode
}