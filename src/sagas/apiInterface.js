

//hace un cambio en la base de datos, ya sea borrar, cambiar o 
export const change = (url, token, method, body) => fetch(url, {
  method: method,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `JWT ${token}`
  },
  body: body ? JSON.stringify(body) : {}
})
  .then(response => method !== 'DELETE' ? response.json() : response);



export const get = (url, token) => 
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  })
    .then( response => response.json() )
    .catch( error => error );


export const post = (url, token, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify({
      ...data
    })
  })
    .then( response => response.json() )
    .catch( error => error );
}