import { Deck } from "./deck"

export const shuffle = (deck: Deck): Deck => {
    const newDeck = [...deck];

    // Fisher-Yates shuffle
    for (let i = newDeck.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }

    return newDeck;
}