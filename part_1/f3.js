function chrecterMove(str){

    return str.split('').map( char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

}

const input = chrecterMove('abcd');
console.log(input);