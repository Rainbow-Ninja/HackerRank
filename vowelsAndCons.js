function vowelsAndConsonants(s) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u']
    const vows = [];
    const cons = [];
    
    for(let i = 0; i < s.length; i++){
        VOWELS.indexOf(s[i]) > -1 ? vows.push(s[i]) : cons.push(s[i])
    }
    vows.forEach(el => console.log(el))
    cons.forEach(el => console.log(el))
}

vowelsAndConsonants("javascriptloops")