import { Suit, Rank } from './card';

export interface DeckDefinition {
    readonly suits: readonly Suit[];
    readonly ranks: readonly Rank[];
}

const STANDARD: DeckDefinition = {
    suits: ['Hearts', 'Spades', 'Diamonds', 'Clubs'],
    ranks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
}

export const DEFINITIONS = {
    STANDARD
} as const;