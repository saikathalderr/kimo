import { Highlight } from '@/controllers/types';
import HighlightItem from './highlightItem';

type HighlightsProps = {
  highlights: Array<Highlight>;
};

function Highlights(props: HighlightsProps) {
  const { highlights } = props;

  return (
    <div className="py-10">
      <p className="py-5 pt-0 font-bold text-dark">Highlights</p>
      <div className="hide-scroll-bar scrollbar-hide flex overflow-x-scroll pb-10">
        <div className="flex flex-nowrap gap-[17px]">
          {highlights.map((highlight, idx) => (
            <HighlightItem
              key={idx + 1 + 'highlight-item'}
              highlight={highlight}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlights;
