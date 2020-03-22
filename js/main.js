function getUsuario()
{
  return fetch('https://swapi.co/api/people')
}

getUsuario()
  .then(data => data.json())
  .then(users => {

  })