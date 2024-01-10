const $container = document.getElementById('container');

const deck1 = Deck();
const deck2 = Deck();
const deck3 = Deck();
const deck4 = Deck();

const decks = [deck1, deck2, deck3, deck4]

const newCards = []



const includedCards = {
    0: { id: 0, amount: 4 },
    1: { id: 1, amount: 4 },
    2: { id: 2, amount: 4 },
    4: { id: 4, amount: 3 }
}

const IncludedCardsKeys = Object.keys(includedCards)


decks.forEach(deck => {
    deck.sort();

    deck.shuffle();
    deck.cards.forEach(card => {
        const cardId = card.i

        if (IncludedCardsKeys.includes(String(cardId))
            && includedCards[cardId].amount > 0) {


            newCards.push(card)
            includedCards[cardId].amount -= 1

        }

    });
})

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(newCards)


newCards.forEach(card => {
    console.log(card);
    // Add it to an html container
    card.mount($container);

    // Allow to move/drag it
    card.enableDragging();

    // Allow to flip it
    card.enableFlipping();
});


const resetCards = () => {

    decks.forEach(deck => {
        deck.sort();
        deck.shuffle();

    })

}


document.getElementById("reset-button").addEventListener("click", resetCards);

