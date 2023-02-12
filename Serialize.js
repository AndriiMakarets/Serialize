
const fs = require('fs/promises');

function main() {
    let animals = [
        {name: 'Vasia', type: 'Cat', age: 4},
        {name: 'Murka', type: 'Cat', age: 1.5},
        {name: 'Varna', type: 'Turtle', age: 44},
        {name: 'Kesha', type: 'Parrot', age: 14},
        {name: 'Pufic', type: 'Humster', age: 0.5},
        //{name: 'Vasia', type: 'Cat', age: 4},
        {name: 'Randy', type: 'Dog', age: 3},
    ];
    let json = (JSON.stringify(animals));
    fs.writeFile('animal.json', json)
    let result = fs.readFile('animal.json');
    let animals2 = JSON.parse(json);
    animals2.forEach((animal) => {
        for (let prop in animal) {
            console.log( prop + " : " + animal[prop]);
        }
        console.log("---------");
    })
}

main();