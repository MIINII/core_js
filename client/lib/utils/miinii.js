const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cahce',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-reffere',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

const miinii = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    // 얕복복
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};

miinii({});
