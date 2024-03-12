let attributes  =  "Austin;20;20.5;19.5" ;
let pieces = attributes.split(';');

console.log(pieces.join());
function isNonNegInt (q) {
    errors = [];
    if(Number(q) != q) errors.push('Not a number!');
    if(q < 0) errors.push('Negative value!');
    if(parseInt(q) != q) errors.push('Not an integer!');

    return (errors.length == 0);
}
pieces.forEach((item,index) => {
    console.log(`part ${index} is ${(isNonNegInt(item) ? 'a': 'not a')} quantity`);
});
