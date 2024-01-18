function getfileName(str){
    return str.slice(str.lastIndexOf('.'));
}

let input  = getfileName('index.html');


console.log(input);