// 2
let arr = [123,43,20,2]
let cur = 3
 
let gel = arr.map(dol => dol * cur)
console.log(gel)

// 3

let w = ["nata", "dad","umu","wiwila","noon"]
function pal(word) {
    let len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

let pali = w.filter(word=>pal(word))
console.log(pali)

// 4

function pipi(cards) {
    return cards.map(card => {
        let last = card.slice(-4)
        return '*'.repeat(card.length - 4) + last
    })
}
let credit = ["1122334455667788", "1231231231231231", "5555666677778888"]

// 6

function obname(arr) {
    return arr.map(obj => obj.name)
}

const sigmebi = [
    { name: "nata", score: 10000000000000000000000000000000 },
    { name: "kvata", score: 999 },
    { name: "kata", score: 66666 },
    { name: "bata", score: -10 }
];
console.log(obname(sigmebi))
