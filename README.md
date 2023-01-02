# Usage

### 1.  jumble()
This method jumbles the characters of a string.

    const { jumble } = require("word-jumblr");

    const word = "molarity";
    console.log(jumble(word));

    //possible output -> ioytmral
    

### 2. jumbleSentence()
This method jumbles the words of a sentence or a statement.

    const { jumbleSentence } = require("word-jumblr");

    const sentence = "Programming is fun";
    console.log(jumbleSentence(sentence));

    //possible output -> fun programming is


### 3. jumbleSentenceAdd()
This method jumbles the words of the sentence and also jumbles the characters of each word.

    const { jumbleSentenceAdd } = require("word-jumblr");

    const sentence = "Programming is fun";
    console.log(jumbleSentenceAdd(sentence));

    //possible output -> unf si rogpmamginr
