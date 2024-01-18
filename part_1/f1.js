
function check(x , y){
    if (x===100 || y===100 || (x + y)===100){
        return true;
    }
    return false;
}

let input = check(9, 10);

console.log(input)