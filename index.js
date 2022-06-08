// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(namesArray, event) {
    let thankYouCards = []
    for(let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
}

// takes in a positive integer
// starting with that number counts down to 0
 
function countDown(posInt) {
    while(posInt > 0) {
        console.log(posInt);
    posInt -= 1;
    };
    console.log(posInt);
};
