import axios from 'axios';
const API_KEY = '33272220-12aa76911a3763f30e85ef70a';
const BASE_URL = `https://pixabay.com/api/`;
const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',

  per_page: 12,
});

export async function api(value, page) {
  let response = await axios(
    `${BASE_URL}?${searchParams}&q=${value}&page=${page}`
  );
  console.log(response.data);
  return response.data;
}
