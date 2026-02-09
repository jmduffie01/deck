import {Card} from './card'
import { DeckDefinition } from './deckDefinition';

export type Deck = Card[];

export function createDeck(def: DeckDefinition): Deck {
    const deck: Deck = [];
    for (const suit of def.suits) {
        for (const rank of def.ranks) {
            deck.push({ suit, rank });
        }
    }
    return deck;
}