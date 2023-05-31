import React from 'react';
import Guide from './guide';

function TravelGuide() {
  return (
    <div className="w-[100%] py-10 lg:w-[50%]">
      <p className="py-5 pt-0 font-bold text-dark">Travel Guide</p>
      <Guide />
    </div>
  );
}

export default TravelGuide;
