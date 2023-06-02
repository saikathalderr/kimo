import { _highlightUrl } from './api';

export async function getHighlights() {
  const resp = await fetch(_highlightUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!resp.ok) {
    throw new Error(
      resp.statusText || `Something went wrong fetching highlights`,
    );
  }
  return resp.json();
}
