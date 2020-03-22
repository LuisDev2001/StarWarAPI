function init() {
  fetch('https://swapi.co/api/people/')
  .then(function(response) {
    return response.json();
  }).then(function(users){
    users.results.forEach(user => {
      insertCard(createCard(user))
    })
  })
}

function createCard(user) {
  const { 
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = user;

  const card = document.createElement('article');
  card.innerHTML = `
    <h1>${name}</h1>
    <p>${height}</p>
    <p>${mass}</p>
    <p>${hair_color}</p>
    <p>${skin_color}</p>
    <p>${eye_color}</p>
    <p>${birth_year}</p>
    <p>${gender}</p>
  `;

  return card;
}

function insertCard(card) {
  let container = document.getElementById('js_container');
  container.appendChild(card)
}

init()