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

    let j = 0;

    while (wordArr.length != 0) {
        let randomChar = wordArr[Math.floor(Math.random() * wordArr.length)];
        let indexRemoved = wordArr.indexOf(randomChar);
        jumbledArr[j] = randomChar;
        wordArr.splice(indexRemoved, 1);
        j++;
    }
    return jumbledArr.join("");
}

/**
 * 
 * @param {String} sentence 
 */

const jumbleSentence = (sentence) => {
    if (!sentence.includes(" ")) {
        return console.error("argument must contain whitespaces");
    }

    let wordArr = sentence.split(" ");
    let indexArr = [];
    let jumbledArr = [];

    for (i = 0; i < wordArr.length; i++) {
        indexArr[i] = i;
    }

    let j = 0;

    while (wordArr.length != 0) {
        let randomword = wordArr[Math.floor(Math.random() * wordArr.length)];
        let indexRemoved = wordArr.indexOf(randomword);
        jumbledArr[j] = randomword;
        wordArr.splice(indexRemoved, 1);
        j++;
    }

    return jumbledArr.join(" ");
}

/**
 * 
 * @param {String} sentence 
 */

const jumbleSentenceAdd = (sentence) => {
    if (!sentence.includes(" ")) {
        return console.error("argument must contain whitespaces");
    }

    const jumbledArr = jumbleSentence(sentence).split(" ");

    jumbledArr.forEach((element, index, arr) => {
        arr[index] = jumble(element);
    });

    return jumbledArr.join(" ");
}

module.exports.jumble = jumble;
module.exports.jumbleSentence = jumbleSentence;
module.exports.jumbleSentenceAdd = jumbleSentenceAdd;