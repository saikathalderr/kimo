import { _highlightUrl } from './api';

export async function getHighlights() {
  const resp = await fetch(_highlightUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return resp.json();
}
