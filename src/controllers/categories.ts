import { _categoriesUrl } from './api';

export async function getCategories() {
  const resp = await fetch(_categoriesUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return resp.json();
}
