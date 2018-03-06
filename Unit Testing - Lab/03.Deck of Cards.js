function printDeckOfCards(cards) {
    function createCard(card, suit) {
        const VALID_CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const VALID_SUITS = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        if(VALID_CARDS.indexOf(card) < 0 || !VALID_SUITS.hasOwnProperty(suit)){
            throw new Error('Error');
        }
        return {
            card,
            suit,
            toString: function () {
                return card + VALID_SUITS[suit];
            }

        }
    }
    let deck = [];
    for (let cardStr of cards) {
        let face = cardStr.substring(0, cardStr.length-1);
        let suit = cardStr.substr(cardStr.length-1, 1);
        try {
            deck.push(createCard(face, suit));
        }
        catch (err) {
            console.log("Invalid card: " + cardStr);
            return;
        }
    }
    console.log(deck.join(' '));
}
