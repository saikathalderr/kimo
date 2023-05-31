import CatergoryItem from './catergoryItem';

function Catergories() {
  return (
    <div className="py-10">
      <p className="py-5 pt-0 font-bold text-dark">Catergories</p>
      <div>
        <CatergoryItem />
        <CatergoryItem />
        <CatergoryItem />
        <CatergoryItem />
        <CatergoryItem />
      </div>
    </div>
  );
}

export default Catergories;
