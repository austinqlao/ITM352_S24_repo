let attributes  =  "Austin;20;20.5;19.5" ;
let pieces = attributes.split(';');
for(let part of pieces) {
    console.log(`${part} is a ${typeof part}`)
}
