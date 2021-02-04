const setA = new Set(['a', 'e', 'i', 'o', 'u'])
const setB = new Set(['b', 'c', 'd', 'f', 'g'])
const setC = new Set(['h', 'j', 'k', 'l', 'm'])
const setD = new Set(['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'])

function getLetter(s) {
    let letter;
    const first = s[0];
    switch(true){
        case setA.has(first):
            letter = 'A'
            break;
        case setB.has(first):
            letter = 'B'
            break;
        case setC.has(first):
            letter = 'C'
            break;
        case setD.has(first):
            letter = 'D'
            break;
    }

    return letter;
}

console.log(getLetter('zapple'));