

// JavaScript is exported
export function fetchAndDisplayCard() {

    const cardNameDiv = document.getElementById('cardName');
    const cardImageDiv = document.getElementById('cardImage');
    const cardTextDiv = document.getElementById('cardText');
  
    // fetch is used to call the api/ no key or autorization needed
    fetch('https://api.magicthegathering.io/v1/cards?random=true&contains=imageUrl')
      .then(response => response.json())
      .then(data => {
        if (data.cards && data.cards.length > 0 && data.cards[0].name && data.cards[0].imageUrl) {
          const card = data.cards[0];
  
          cardNameDiv.innerHTML = `<h2>${card.name}</h2>`;
          cardTextDiv.innerHTML = `<p>${card.text}</p>`;
          cardImageDiv.innerHTML = `<img src="${card.imageUrl}" alt="${card.name}">`;
  
        } else {
          cardNameDiv.innerHTML = "<p>Error.</p>";
          console.error("incomplete load:", data);
        }
      })
      .catch(error => {
        cardNameDiv.innerHTML = "<p>Error</p>";
        console.log("error");
      });
  }