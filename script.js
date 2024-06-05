const cards = [];
const data = [
  { image: "Photos/Untitled(3).webp", title: "Jamal", rating: "7/9", category: "LANE: MID", description: "I like to play mid because its fun and challenging." },
  { image: "Photos/Untitled(4).webp", title: "James", rating: "8/9", category: "LANE: TOP", description: "Top is like chess, if you have brains you have gains." },
  { image: "Photos/Untitled(5).webp", title: "Oscar", rating: "9/9", category: "LANE: JG", description: "JG DIFF JG DIFF, but not with me." },
  { image: "Photos/Untitled(6).webp", title: "John", rating: "6/9", category: "LANE: ADC", description: "ADC FEED ADC FEED, but enemys scream I'm a smurf." },
  { image: "Photos/Untitled(7).webp", title: "Pablo", rating: "6.5/9", category: "LANE: SUP", description: "I play Yuumi and chill." },
  { image: "Photos/Untitled(8).webp", title: "Peter", rating: "0/9", category: "LANE: Coach", description: "They think they are good at the game but I am better." }
];

for (let i = 1; i <= 3; i++) {
  cards.push({
    element: document.getElementById(`card${i}`),
    index: i - 1
  });
}

const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
nextButton.style.backgroundColor = 'transparent';
nextButton.style.outline = 'none';
nextButton.style.border = 'none'; // Ensure border is also removed
prevButton.style.backgroundColor = 'transparent';
prevButton.style.outline = 'none';
prevButton.style.border = 'none'; // Ensure border is also removed
nextButton.style.fontSize = '12rem';
prevButton.style.fontSize = '12rem';
prevButton.style.color = 'white';
nextButton.style.color = 'white';

// Ensure outline is removed when the button is focused
nextButton.addEventListener('focus', () => {
  nextButton.style.outline = 'none';
});
prevButton.addEventListener('focus', () => {
  prevButton.style.outline = 'none';
});
// Function to handle next button click
nextButton.addEventListener('click', () => {
  // Change the content of the player cards accordingly
  cards.forEach(card => {
    card.index = (card.index + 1) % data.length;
    updateCard(card);
  });
});

// Function to handle previous button click
prevButton.addEventListener('click', () => {
  // Change the content of the player cards accordingly
  cards.forEach(card => {
    card.index = (card.index - 1 + data.length) % data.length;
    updateCard(card);
  });
});

// Function to update card content
function updateCard(card) {
  const { element, index } = card;
  const { image, title, rating, category, description } = data[index];
  element.querySelector('.player-image').src = image;
  element.querySelector('.player-title').textContent = title;
  element.querySelector('.player-rating').textContent = rating;
  element.querySelector('.player-category').textContent = category;
  element.querySelector('.player-description').textContent = description;
}



