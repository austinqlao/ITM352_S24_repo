function checkIt(item, index) {
    console.log(`part ${index} is ${(isNonNegInt(item)?'a':'not a')} quantity`);
}

let attributes  =  "Austin;20;20.5;19.5" ;
let pieces = attributes.split(';');