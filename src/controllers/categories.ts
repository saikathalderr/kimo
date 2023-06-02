import { _categoriesUrl } from './api';

export async function getCategories() {
  const resp = await fetch(_categoriesUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!resp.ok) {
    throw new Error(
      resp.statusText || `Something went wrong fetching categories`,
    );
  }
  return resp.json();
}
