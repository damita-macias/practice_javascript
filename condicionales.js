const prompt = require("prompt-sync")();

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
