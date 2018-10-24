

//hace un cambio en la base de datos, ya sea borrar, cambiar o 
export const change = (url, method, body) => fetch(url, {
  method: method,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: body ? JSON.stringify(body) : {}
})
  .then(response => method != 'DELETE' ? response.json() : response);



export const get = (url) => fetch(url)
  .then(response => response.json());
