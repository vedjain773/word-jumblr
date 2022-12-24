/**
 * 
 * @param {String} word 
 */

const jumble = (word) => {
    let wordArr = [];
    let indexArr = [];
    let jumbledArr = [];

    for (i = 0; i < word.length; i++) {
        wordArr[i] = word.charAt(i);
        indexArr[i] = i;
    }

    console.log(wordArr);
    let j = 0;

    while (wordArr.length != 0) {
        let randomChar = wordArr[Math.floor(Math.random() * wordArr.length * 0.74)];
        let indexRemoved = wordArr.indexOf(randomChar);
        jumbledArr[j] = randomChar;
        wordArr.splice(indexRemoved, 1);
        j++;
    }
    return jumbledArr.join("");
}

module.exports.jumble = jumble;