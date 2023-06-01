export async function getHighlights() {
  const resp = await fetch('https://web-dev.dev.kimo.ai/v1/highlights', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return resp.json();
}
