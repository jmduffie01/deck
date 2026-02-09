import { createDeck } from './src/engine/deck'
import { DEFINITIONS } from './src/engine/deckDefinition'
import { shuffle } from './src/engine/shuffle'

let myDeck = createDeck(DEFINITIONS.STANDARD);

console.log("Deck size:", myDeck.length)

myDeck = shuffle(myDeck);
console.log(myDeck)