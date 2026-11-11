const prompt = require("prompt-sync")();

console.log("Hi there!");

const botName = "TeacherBot";
const greeting = `My name is ${botName}`;
console.log(greeting)

const subject = "Javascript";
const topic = "strings";

const sentences = `Today you will learn about ${topic} in ${subject}.`;
console.log(sentences)

const strLenghtIntro = `Here is an example of using the lenght property on the word ${subject}.`;
console.log(strLenghtIntro)

const strLenght = subject.length;
console.log(strLenght)

console.log(`Here is an example of using the lenght property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`)
console.log(subject[0])

console.log(`Here is an example of accessing the second letter in the word ${subject}.`)
console.log(subject[1])

console.log(`Here is an example of accessing the last letter in the word ${subject}.`)
const LastCharacter = subject[subject.length - 1]
console.log(LastCharacter);

const LearningIsFunSentences = "Learning is fun. "
console.log("Here are examples of finding the positions of substrings in the sentences.")

console.log(LearningIsFunSentences.indexOf("Learning"));
console.log(LearningIsFunSentences.indexOf("fun"));
console.log(LearningIsFunSentences.indexOf("learning"));

console.log("I hope you enjoyed learning today.")
