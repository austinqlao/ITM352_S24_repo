require("./products_data.js");

for (let i = 1; eval("typeof name" + i) !== 'undefined'; i++) {
    if ((i > 0.25 * i) && (i < 0.75 * i)) {
        console.log(`${eval('name' + i)} is sold out!`);
        continue;
    }
    console.log(`${i}. ${eval('name' + i)}`);
}

console.log(`That's all we have!`);