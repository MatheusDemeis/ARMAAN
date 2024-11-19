const fs = require("node:fs/promises");
const { EOL } = require("node:os");

 function addSupply(coffeeType) {
    return fs.appendFile(`supply.txt`, EOL + coffeeType);
}

async function viewAllSupply(coffeeType) {
    const content = await fs.readFile(`supply.txt`, `utf8`);
        let counter = 0;
        content.split(EOL).forEach(coffee => {
            if(coffee === coffeeType) {
                counter++;
            }
        })
        return counter;
}

async function main() {
    const count = await viewAllSupply("medium-roast")
    console.log(count);
    await addSupply(`medium-roast`);
    const countAfterAdding = await viewAllSupply(`medium-roast`);
    console.log(countAfterAdding);
}

main();