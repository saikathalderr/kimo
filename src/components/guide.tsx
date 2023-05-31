import Image from 'next/image';
import React from 'react';

function Guide() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-[24px]">
      <div className="flex flex-col gap-[40px]">
        <div>
          <h2 className="text-2xl font-bold">Hadwin Malone</h2>
          <p>Guide since 2012</p>
        </div>
        <button className="secondary-button w-fit">Contact</button>
      </div>
      <div className="relative h-[128px] w-[128px]">
        <Image
          src="/static/images/travel-guide.jpg"
          className="rounded-full"
          alt="Guide Image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default Guide;
