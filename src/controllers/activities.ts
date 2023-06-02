import { _activityUrl } from './api';

export async function getActivity({ activityType }: { activityType: string }) {
  const url = _activityUrl.replace('{{activity_type}}', activityType);
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!resp.ok) {
    throw new Error(
      resp.statusText ||
        `Something went wrong fetching activity - ${activityType}`,
    );
  }
  return resp.json();
}
