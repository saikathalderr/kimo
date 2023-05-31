import Image from 'next/image';
import Icon from './icon';

function HighlightItem() {
  return (
    <div className="inline-block px-3">
      <div className="h-[340px] w-[368px] overflow-hidden rounded-lg bg-white shadow-lg shadow-green/10">
        <div className="relative h-[170px] w-full">
          <Image
            src="/static/images/travel-guide.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-[24px]">
          <p className="mb-3 text-lg font-bold text-green">Travel Guide</p>
          <p className="w-4/5 text-sm text-dark">
            Best Hawaiian islands for surfing.
          </p>
          <div className="flex items-center justify-end">
            <button className="primary-icon-button">
              <Icon name="arrow_forward" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightItem;
