const getData = url => {

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const options = {
    method: 'GET',
    mode: 'no-cors',
    headers
  };

  const request = new Request(url, options);

  return new Promise((resolve, reject) => {
    fetch(request)
      .then(response => {
        if (response.status === 200) {
          resolve(response.json());
        } else {
          reject(`Can't get data. URL: ${ url }`);
        }
      });
  });
};

export {
  getData
};
