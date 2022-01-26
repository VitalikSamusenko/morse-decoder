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
    let str='';
    let res='';
    for (let i=0; i<expr.length; i+=10){
        str = expr.slice(i, i+10);
        if (str=="**********") res+=' ';
        else{
            let result = '';
            let word='';
            for(j=0; j<str.length; j+=2){
                word = str.slice(j, j+2);
                if(word == '10') result+='.';
                if(word=="11") result+='-';
            }
            res+=MORSE_TABLE[result];
        }
    }
    return res;
}

module.exports = {
    decode
}