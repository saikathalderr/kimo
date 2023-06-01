import Image from 'next/image';
import Icon from './icon';
import { Highlight } from '@/controllers/types';
import Link from 'next/link';

type HighlightItemProps = {
  highlight: Highlight;
};

function HighlightItem(props: HighlightItemProps) {
  const { highlight } = props;
  const { title, description, image } = highlight;

  return (
    <div className="inline-block px-3">
      <div className="min-h-full w-[368px] overflow-hidden rounded-lg bg-white shadow-lg shadow-green/10">
        <div className="relative h-[170px] w-full">
          <Image
            fill
            src={image}
            alt={title}
            style={{ objectFit: 'cover' }}
            sizes="(min-width: 1024px) 368px, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <Link href={`/activities/${title}`}>
          <div className="p-[24px]">
            <p className="mb-3 text-lg font-bold text-green">{title}</p>
            <p className="w-4/5 text-sm text-dark">{description}</p>
            <div className="flex items-center justify-end">
              <button className="primary-icon-button">
                <Icon name="arrow_forward" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HighlightItem;
