function addNew(str){
    return str.indexOf('NEW!')=== 0? str : `NEW! ${str}`
}

const input  = addNew("NEW!");

console.log(input);