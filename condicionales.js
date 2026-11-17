const prompt = require("prompt-sync")();

const titulo = "I love cats."
console.log("Original String:")
console.log(titulo)

const replacedString = titulo.replace("cats", "dogs")
console.log("After using the replace() method:")
console.log(replacedString)

const exampleSentence = "I love cats and cats are so much fun!"
console.log("Original Sentence:")
console.log(exampleSentence)

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs")
console.log("Replacing all occurrences of cats with dogs.")
console.log(dogsOnlySentence)

const learningSentences = "I love learning!"
console.log("Original learning sentence:")
console.log(learningSentences)

const repeatedLove = "love ".repeat(3).trimEnd()
console.log(repeatedLove)

const newSentence = `I ${repeatedLove} learning.`
console.log(newSentence)const prompt = require("prompt-sync")();

const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:")

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(hasFreeCodeCamp)

console.log(`fccSentence.includes("freeCodeCamp") retunrs ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`)

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") retunrs ${hasJavaScript} because the word "JavaScript" is not in the sentence.`)

const hasLowercaseFCC = fccSentence.includes("freecodec$amp");
console.log(`fccSentence.includes("freecodecamp") retunrs ${hasLowercaseFCC} beacuse includes is case-sensitive.`)

const message = "Welcome in my heart"
console.log("Here are some examples of the slice() method:")

const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`)

const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`)

const locales = message.slice(-1);
console.log(`The ending punctation mark is a "${locales}"`)

console.log("concluido");
...
