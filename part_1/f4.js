function date(){
    const date = new Date();

    const day = date.getDay() + 14;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`
}

const input = date();

console.log(input);