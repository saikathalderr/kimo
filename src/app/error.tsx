'use client';

import Link from 'next/link';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

function Error(props: ErrorProps) {
  const { error, reset } = props;

  return (
    <div className="mx-auto mt-0 h-screen w-[80vw] pb-9 pt-40">
      <p className="font-bold text-red-600">Something went wrong:</p>
      <pre className="py-2 pb-10">{error.message}</pre>
      <div className="flex gap-4">
        <button className="primary-button" onClick={reset}>
          Try again
        </button>
        <Link legacyBehavior href="/">
          <a className="secondary-button">Go to home</a>
        </Link>
      </div>
    </div>
  );
}

export default Error;
