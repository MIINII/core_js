const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

export const miinii = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...(defaultOptions.headers ?? {}), ...(options.headers ?? {}) }, // 깊은복사
  };

  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;

  // console.log(response);
};

// await을 안써주면 fetch를 내보내니까 promise만 나와짐
// 안의 값을 가져오려고 await을 붙여서 호출

miinii.get = async (url, options) => {
  return miinii({
    url,
    ...options,
  });
};

miinii.post = (url, body, options) => {
  return miinii({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

miinii.put = (url, body, options) => {
  return miinii({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

miinii.delete = (url, options) => {
  return miinii({
    method: 'DELETE',
    url,
    ...options,
  });
};
