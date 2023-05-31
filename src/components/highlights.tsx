import HighlightItem from './highlightItem';

function Highlights() {
  return (
    <div className="py-10">
      <p className="py-5 pt-0 font-bold text-dark">Highlights</p>
      <div className="hide-scroll-bar flex overflow-x-scroll pb-10">
        <div className="flex flex-nowrap gap-[17px]">
          <HighlightItem />
          <HighlightItem />
          <HighlightItem />
        </div>
      </div>
    </div>
  );
}

export default Highlights;
