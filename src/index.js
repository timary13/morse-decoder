const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let result = expr.match(/.{10}|.{1,2}/g).map(function (letter) {
        if (~letter.indexOf('*'))
            return ' ';
        return letter.match(/.{2}|.{1,2}/g).map(function (double) {
            if (double == "00" || double == "01")
                return;
            else return ~double.indexOf("10") ? '.' : '-';
        })
            .join('');
    })
        .map(item => item != ' ' ? MORSE_TABLE[item] : ' ')
        .join('');
    return result;
}

module.exports = {
    decode
}