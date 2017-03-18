const root = 'http://localhost:8080';
const esc = encodeURIComponent;

const parameterize = (params) => {
  return Object.keys(params)
    .map((k) => esc(k) + '=' + esc(params[k]))
    .join('&');
}

const delay = (delay) => {
  return (value) => {
    return new Promise((resolve, reject) => {
	  setTimeout(() => {
	    resolve(value);
	  }, delay)
	});
  }
}


export const fetchAll = (route) => {
  return fetch(`${root}${route}`, {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    })
  })
    .then(delay(3000))
    .then((response) => response.json());
}

export const getComments = (postId) => {

  // parameterize queries
  const params = {
    postId
  }
  const query = parameterize(params);

  return fetch(`${root}/comments/?${query}`, {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    })
  })
    .then(delay(3000))
    .then((response) => response.json());
}
